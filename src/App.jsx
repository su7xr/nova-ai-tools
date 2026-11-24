import React, { useState } from "react";

const tools = [
  { name: "ChatGPT", category: "Chat", icon: "🤖", desc: "Your AI assistant for everything.", link: "https://chatgpt.com" },
  { name: "Claude", category: "Chat", icon: "✦", desc: "Think, write and create with AI.", link: "https://claude.ai" },
  { name: "Midjourney", category: "Image", icon: "🎨", desc: "Create beautiful AI images.", link: "https://midjourney.com" },
  { name: "Cursor", category: "Coding", icon: "⌘", desc: "Build software with AI.", link: "https://cursor.com" },
  { name: "Perplexity", category: "Research", icon: "◈", desc: "Discover answers with AI search.", link: "https://perplexity.ai" },
  { name: "Canva AI", category: "Design", icon: "✨", desc: "Design anything with AI.", link: "https://canva.com" },
  { name: "Runway", category: "Video", icon: "🎬", desc: "Create videos using AI.", link: "https://runwayml.com" },
  { name: "ElevenLabs", category: "Audio", icon: "🎙️", desc: "Generate realistic AI voices.", link: "https://elevenlabs.io" }
];

export default function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [favorites, setFavorites] = useState([]);
  const [dark, setDark] = useState(true);

  const categories = ["All", "Chat", "Image", "Coding", "Research", "Design", "Video", "Audio"];

  const filtered = tools.filter(tool =>
    (category === "All" || tool.category === category) &&
    (tool.name.toLowerCase().includes(search.toLowerCase()) ||
     tool.desc.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className={dark ? "app dark" : "app"}>
      <header>
        <h2>✦ Nova<span>AI</span></h2>
        <button onClick={() => setDark(!dark)}>
          {dark ? "☀️ Light" : "🌙 Dark"}
        </button>
      </header>

      <section className="hero">
        <p className="tag">✦ THE FUTURE OF ARTIFICIAL INTELLIGENCE</p>
        <h1>Discover the <span>Power of AI.</span></h1>
        <p>Find the perfect AI tools to create, learn, design and build.</p>
        <input
          placeholder="Search AI tools..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </section>

      <main>
        <h2>Explore Categories</h2>
        <div className="categories">
          {categories.map(c => (
            <button
              key={c}
              className={category === c ? "selected" : ""}
              onClick={() => setCategory(c)}
            >{c}</button>
          ))}
        </div>

        <div className="heading">
          <h2>Featured AI Tools</h2>
          <span>{filtered.length} Tools</span>
        </div>

        <div className="grid">
          {filtered.map(tool => (
            <article className="card" key={tool.name}>
              <div className="tool-icon">{tool.icon}</div>
              <div className="card-top">
                <span>{tool.category}</span>
                <button onClick={() =>
                  setFavorites(old =>
                    old.includes(tool.name)
                      ? old.filter(x => x !== tool.name)
                      : [...old, tool.name]
                  )
                }>
                  {favorites.includes(tool.name) ? "❤️" : "🤍"}
                </button>
              </div>
              <h3>{tool.name}</h3>
              <p>{tool.desc}</p>
              <a href={tool.link} target="_blank" rel="noreferrer">
                Explore Tool ↗
              </a>
            </article>
          ))}
        </div>
      </main>

      <footer>
        <h2>✦ NovaAI</h2>
        <p>Discover better tools. Build better things.</p>
        <p>© 2026 NovaAI</p>
      </footer>
    </div>
  );
              }
