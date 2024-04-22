export const fetcher = async (url: string, method: string, data?: Record<string, unknown>) => {
  const response = await fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error('Error');
  }
  return response.json();
};
