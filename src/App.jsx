import { useState } from "react";
import Header from "./components/Header";
import InputArea from "./components/InputArea";
import SortOptions from "./components/SortOptions";
import LinkList from "./components/LinkList";
import { sortLinks } from "./utils/sortLinks";
import { fetchTitle } from "./services/fetchTitle";

function App() {
  const [links, setLinks] = useState([]);

  const handleAddLinks = async (urls) => {
    const newLinks = await Promise.all(
      urls.map(async (url) => {
        // here normalizing the URL to ensure it has a protocol
        let normalizedUrl = url.trim();
        if (!/^https?:\/\//i.test(normalizedUrl)) {
          normalizedUrl = "https://" + normalizedUrl;
        }

        const title = await fetchTitle(normalizedUrl);

        return { url: normalizedUrl, title: title || normalizedUrl };
      })
    );

    setLinks((prev) => [...prev, ...newLinks]);
  };

  const handleSort = (type) => {
    setLinks((prev) => sortLinks([...prev], type));
  };

  return (
    <div className="min-h-screen dark:bg-zinc-900 bg-zinc-100 text-black dark:text-white">
      <Header />
      <main className="max-w-3xl mx-auto flex-col items-center justify-center px-12 py-32">
        <InputArea onSubmit={handleAddLinks} />
        <SortOptions onSort={handleSort} />
        <LinkList links={links} />
      </main>
    </div>
  );
}

export default App;
