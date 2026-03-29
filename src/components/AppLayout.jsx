import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Menu } from "lucide-react";
import Sidebar from "./Sidebar";
import SearchBar from "./SearchBar";
import ThemeToggle from "./ThemeToggle";
import roadmapData from "../lib/roadmapData";

export default function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [completedItems, setCompletedItems] = useState(() => {
    const saved = localStorage.getItem("roadmap-progress");
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem("roadmap-progress", JSON.stringify(completedItems));
  }, [completedItems]);

  const toggleItem = (key) => {
    setCompletedItems((prev) => {
      const next = { ...prev };
      if (next[key]) {
        delete next[key];
      } else {
        next[key] = true;
      }
      return next;
    });
  };

  // Calculate overall progress
  const totalResources = roadmapData.reduce((sum, t) => sum + t.resources.length, 0);
  const completedCount = Object.keys(completedItems).length;
  const progressPercent = totalResources > 0 ? Math.round((completedCount / totalResources) * 100) : 0;

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar
        topics={roadmapData}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        progress={progressPercent}
      />

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-xl border-b border-border px-4 sm:px-6 py-3">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-xl hover:bg-muted transition-colors"
            >
              <Menu className="h-5 w-5" />
            </button>
            <div className="flex-1 max-w-md">
              <SearchBar />
            </div>
            <ThemeToggle />
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <Outlet context={{ completedItems, toggleItem }} />
        </main>
      </div>
    </div>
  );
}