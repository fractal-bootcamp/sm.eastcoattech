import { useState, useEffect } from 'react'
import './App.css'

interface NewsItem {
  id: number;
  title: string;
  url: string;
  score: number;
  by: string;
}

function App() {
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    // Simulating fetching data from an API
    const fakeNews: NewsItem[] = [
      { id: 1, title: "React 18 released", url: "https://reactjs.org", score: 100, by: "user1" },
      { id: 2, title: "TypeScript 4.7 announcement", url: "https://www.typescriptlang.org", score: 85, by: "user2" },
      { id: 3, title: "New AI breakthrough", url: "https://example.com/ai-news", score: 120, by: "user3" },
    ];
    setNews(fakeNews);
  }, []);

  return (
    <div className="bg-orange-500 min-h-screen">
      <header className="bg-orange-600 p-4">
        <h1 className="text-2xl font-bold text-white">Hacker News Clone</h1>
      </header>
      <main className="container mx-auto p-4 w-5/6">
        <ul className="space-y-4">
          {news.map((item) => (
            <li key={item.id} className="bg-white p-4 rounded shadow">
              <a href={item.url} className="text-lg font-semibold text-gray-800 hover:underline">{item.title}</a>
              <div className="text-sm text-gray-600 mt-1">
                {item.score} points by {item.by}
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}

export default App