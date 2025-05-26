export const SBPost = async (url, data) => {
  const apiKey = useRuntimeConfig().public.supabaseAnonKey;
  const baseUrl = useRuntimeConfig().public.supabaseUrl;
  const response = await fetch(baseUrl + url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apiKey: apiKey,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
};
