export async function fetchTitle(url) {
  try {
    const res = await fetch(
      `https://api.microlink.io/?url=${encodeURIComponent(url)}`
    );

    if (!res.ok) throw new Error("Network error");

    const data = await res.json();
    return data?.data?.title || null;
  } catch (err) {
    console.error("Error fetching title:", err);
    return null; // fallback
  }
}
