export function getAuthHeaders(): { Authorization?: string } {
  if (typeof window === "undefined") return {};

  const token = localStorage.getItem("token");

  if (!token) return {};

  return {
    Authorization: `Bearer ${token}`,
  };
}

export function getImageUrl(path: string) {
  if (path.startsWith("http")) return path;
  return `${process.env.NEXT_PUBLIC_API_ROOT}/${path}`;
}

export async function fetchAPI<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const headers = new Headers(options?.headers);

  const authHeaders = getAuthHeaders();
  if (authHeaders.Authorization) {
    headers.set("Authorization", authHeaders.Authorization);
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}${endpoint}`,
    {
      ...options,
      cache: options?.cache || "no-store",
      headers,
    }
  );

  if (!res.ok) {
    let errorMessage = `Failed to fetch data from ${endpoint}`;

    try {
      const errorData = await res.json();
      errorMessage =
        errorData.message || errorData.error || errorMessage;
    } catch (e) {
      console.log(e);
    }

    throw new Error(errorMessage);
  }

  return res.json();
}
