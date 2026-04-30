const DEFAULT_API_BASE_URL = 'http://localhost:8000';

export const API_BASE_URL = (
  import.meta.env.VITE_API_BASE_URL?.trim() || DEFAULT_API_BASE_URL
).replace(/\/+$/, '');

export async function requestJson<T>(
  path: string,
  init: RequestInit = {},
): Promise<T> {
  const url = new URL(path.replace(/^\//, ''), `${API_BASE_URL}/`);
  const response = await fetch(url, {
    ...init,
    headers: {
      Accept: 'application/json',
      ...(init.headers ?? {}),
    },
  });

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status} ${response.statusText}`);
  }

  return response.json() as Promise<T>;
}
