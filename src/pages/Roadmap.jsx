import { useState, useMemo, useEffect } from "react";
import { Menu, Sun, Moon } from "lucide-react";
import Sidebar from "../components/Sidebar";
import TopicContent from "../components/TopicContent";
import { roadmapData } from "../lib/roadmapData";

export default function Roadmap() {
  const [activeId, setActiveId] = useState(roadmapData[0].id);
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [progress, setProgress] = useState(() => {
    try { return JSON.parse(localStorage.getItem("roadmap_progress") || "{}"); } catch { return {}; }
  });
  const [notes, setNotes] = useState(() => {
    try { return JSON.parse(localStorage.getItem("roadmap_notes") || "{}"); } catch { return {}; }
  });
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("roadmap_theme") === "dark" || window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("roadmap_theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("roadmap_progress", JSON.stringify(progress));
  }, [progress]);

  useEffect(() => {
    localStorage.setItem("roadmap_notes", JSON.stringify(notes));
  }, [notes]);

  const filteredTopics = useMemo(() => {
    if (!searchQuery.trim()) return roadmapData;
    const q = searchQuery.toLowerCase();
    return roadmapData.filter(t =>
      t.title.toLowerCase().includes(q) ||
      t.topics?.some(topic => topic.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  const activeTopic = roadmapData.find(t => t.id === activeId) || roadmapData[0];

  const handleToggle = (topicId, resourceTitle) => {
    const key = `${topicId}::${resourceTitle}`;
    setProgress(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const topicProgress = useMemo(() => {
    const p = {};
    activeTopic.resources.forEach(r => {
      p[r.title] = !!progress[`${activeTopic.id}::${r.title}`];
    });
    return p;
  }, [activeTopic, progress]);

  // Calculate overall progress
  const totalAll = roadmapData.reduce((acc, t) => acc + t.resources.length, 0);
  const doneAll = Object.values(progress).filter(Boolean).length;
  const overallPct = Math.round((doneAll / totalAll) * 100);

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      <Sidebar
        topics={filteredTopics}
        activeId={activeId}
        onSelect={setActiveId}
        searchQuery={searchQuery}
        onSearch={setSearchQuery}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top bar */}
        <header className="flex items-center justify-between px-4 lg:px-6 py-4 border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground"
            >
              <Menu size={18} />
            </button>
            <div className="hidden sm:block">
              <div className="flex items-center gap-2">
                <div className="w-24 h-1.5 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500"
                    style={{ width: `${overallPct}%` }}
                  />
                </div>
                <span className="text-xs text-muted-foreground font-medium">{overallPct}% overall</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-muted-foreground px-3 py-1.5 bg-muted rounded-full">
              <span>{activeTopic.icon}</span>
              <span>{activeTopic.title}</span>
            </span>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>
        </header>

        <TopicContent
          topic={activeTopic}
          progress={topicProgress}
          onToggle={(resourceTitle) => handleToggle(activeTopic.id, resourceTitle)}
          note={notes[activeTopic.id] || ""}
          onNoteChange={(val) => setNotes(prev => ({ ...prev, [activeTopic.id]: val }))}
        />
      </div>
    </div>
  );
}