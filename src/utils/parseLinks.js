function normalize(url) {
  let v = url.trim()
  if (!v) return ''
  // add protocol if missing
  if (!/^https?:\/\//i.test(v)) {
    v = 'https://' + v
  }
  try {
    const u = new URL(v)
    return u.href
  } catch {
    return ''
  }
}

export function parseLinks(input, { dedupe = true } = {}) {
  const parts = input
    .split(/\s+/) // split by any whitespace
    .map(normalize)
    .filter(Boolean)

  return dedupe ? Array.from(new Set(parts)) : parts
}