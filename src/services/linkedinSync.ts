import { Certification } from '../types';

const syncEndpoint = (import.meta.env.VITE_LINKEDIN_CERTIFICATIONS_URL as string | undefined)?.trim();

export const LINKEDIN_SYNC_CONFIGURED = Boolean(syncEndpoint);

export interface LinkedInSyncResult {
  certifications: Certification[];
  syncedAt: string;
}

function normalizeCertification(value: unknown): Certification | null {
  if (!value || typeof value !== 'object') return null;

  const item = value as Record<string, unknown>;
  const title = typeof item.title === 'string' ? item.title.trim() : '';
  const issuer = typeof item.issuer === 'string' ? item.issuer.trim() : '';

  if (!title || !issuer) return null;

  return {
    id: typeof item.id === 'string' && item.id.trim() ? item.id : `${title}-${issuer}`.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    title,
    issuer,
    issueDate: typeof item.issueDate === 'string' ? item.issueDate : 'Date unavailable',
    credentialId: typeof item.credentialId === 'string' ? item.credentialId : 'Not provided',
    badgeUrl: typeof item.badgeUrl === 'string' ? item.badgeUrl : undefined,
    credentialUrl: typeof item.credentialUrl === 'string' ? item.credentialUrl : undefined,
    skillsVerified: Array.isArray(item.skillsVerified)
      ? item.skillsVerified.filter((skill): skill is string => typeof skill === 'string')
      : []
  };
}

export async function fetchLinkedInCertifications(): Promise<LinkedInSyncResult> {
  if (!syncEndpoint) {
    throw new Error('LinkedIn sync is not configured. Add VITE_LINKEDIN_CERTIFICATIONS_URL to connect a server-side LinkedIn adapter.');
  }

  const response = await fetch(syncEndpoint, {
    headers: { Accept: 'application/json' },
    credentials: 'include'
  });

  if (!response.ok) {
    throw new Error(`LinkedIn sync failed with status ${response.status}.`);
  }

  const payload: unknown = await response.json();
  const rawCertifications = Array.isArray(payload)
    ? payload
    : payload && typeof payload === 'object' && Array.isArray((payload as { certifications?: unknown }).certifications)
      ? (payload as { certifications: unknown[] }).certifications
      : [];

  const certifications = rawCertifications
    .map(normalizeCertification)
    .filter((certification): certification is Certification => certification !== null);

  return { certifications, syncedAt: new Date().toISOString() };
}
