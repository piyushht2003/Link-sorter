export function sortLinks(links, type) {
  if (type === "alphabetical") {
    return links.sort((a, b) => (a.title || "").localeCompare(b.title || ""));
  }
  if (type === "domain") {
    return links.sort((a, b) => {
      try {
        const domainA = new URL(a.url).hostname;
        const domainB = new URL(b.url).hostname;
        return domainA.localeCompare(domainB);
      } catch {
        return 0;
      }
    });
  }
  return links;
}
