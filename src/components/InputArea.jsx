import { useState } from "react";

export default function InputArea({ onSubmit }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const urls = text.split("\n").map((line) => line.trim()).filter(Boolean);
    if (urls.length) {
      onSubmit(urls);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <textarea
        className="w-full p-3 border rounded-lg"
        rows="4"
        placeholder="Paste multiple links, one per line"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
      >
        Add Links
      </button>
    </form>
  );
}
