export default function LinkCard({ link }) {
  let domain = "";
  try {
    domain = new URL(link.url).hostname;
  } catch {
    domain = "Invalid URL";
  }

  return (
    <div className="p-4 bg-white shadow rounded-lg flex flex-col">
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 font-medium hover:underline break-words"
      >
        {link.title || link.url}
      </a>
      <span className="text-sm text-gray-500">{domain}</span>
    </div>
  );
}
