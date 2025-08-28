import LinkCard from "./LinkCard";

export default function LinkList({ links }) {
  if (!links.length) {
    return <p className="text-gray-500 mt-4">No links added yet.</p>;
  }

  return (
    <div className="mt-6 grid gap-4">
      {links.map((link, idx) => (
        <LinkCard key={idx} link={link} />
      ))}
    </div>
  );
}
