export async function apiRequest<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const url = `${import.meta.env.VITE_API_URL}${endpoint}`;

  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`Error ${response.status}`);
  }

  const data = await response.json();

  const forceError = import.meta.env.VITE_FORCE_ERROR === "true";
  if (forceError) {
    throw new Error("Error on request");
  }

  return data as T;
}
