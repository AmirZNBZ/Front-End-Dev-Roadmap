import { useState, useRef, useEffect } from "react";
import { Search, X, BookOpen, FileText, GraduationCap, Wrench, Link as LinkIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import roadmapData from "../lib/roadmapData";

const typeIcons = {
  book: BookOpen,
  docs: FileText,
  course: GraduationCap,
  tool: Wrench,
  link: LinkIcon,
};

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);
  const containerRef = useRef(null);
  const navigate = useNavigate();

  const results = query.trim().length > 1
    ? roadmapData.flatMap((topic) =>
        topic.resources
          .filter((r) =>
            r.name.toLowerCase().includes(query.toLowerCase()) ||
            topic.title.toLowerCase().includes(query.toLowerCase())
          )
          .map((r) => ({ ...r, topicId: topic.id, topicTitle: topic.title }))
      ).slice(0, 8)
    : [];

  const topicResults = query.trim().length > 1
    ? roadmapData.filter((t) => t.title.toLowerCase().includes(query.toLowerCase())).slice(0, 3)
    : [];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "/" && !isOpen) {
        e.preventDefault();
        setIsOpen(true);
        inputRef.current?.focus();
      }
      if (e.key === "Escape") {
        setIsOpen(false);
        setQuery("");
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <div ref={containerRef} className="relative">
      <div
        className={`flex items-center gap-2 px-3 py-2 rounded-xl border transition-all duration-200 ${
          isOpen ? "bg-card border-primary/30 shadow-lg shadow-primary/5 ring-2 ring-primary/10" : "bg-muted/50 border-transparent hover:bg-muted"
        }`}
        onClick={() => { setIsOpen(true); inputRef.current?.focus(); }}
      >
        <Search className="h-4 w-4 text-muted-foreground flex-shrink-0" />
        <input
          ref={inputRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsOpen(true)}
          placeholder="Search topics & resources..."
          className="bg-transparent text-sm outline-none flex-1 placeholder:text-muted-foreground/60 w-full min-w-0"
        />
        {!isOpen && (
          <kbd className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] font-mono font-medium text-muted-foreground bg-background border rounded-md">
            /
          </kbd>
        )}
        {query && (
          <button onClick={(e) => { e.stopPropagation(); setQuery(""); }} className="p-0.5 hover:bg-accent rounded-md transition-colors">
            <X className="h-3.5 w-3.5 text-muted-foreground" />
          </button>
        )}
      </div>

      <AnimatePresence>
        {isOpen && query.trim().length > 1 && (topicResults.length > 0 || results.length > 0) && (
          <motion.div
            initial={{ opacity: 0, y: 4, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 right-0 mt-2 bg-card border rounded-xl shadow-xl shadow-black/10 overflow-hidden z-50 max-h-80 overflow-y-auto"
          >
            {topicResults.length > 0 && (
              <div className="p-2">
                <p className="px-2 py-1 text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Topics</p>
                {topicResults.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => { navigate(`/topic/${t.id}`); setIsOpen(false); setQuery(""); }}
                    className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-accent transition-colors text-left"
                  >
                    <div className={`h-6 w-6 rounded-lg bg-gradient-to-br ${t.color} flex items-center justify-center`}>
                      <span className="text-white text-[10px] font-bold">{t.title[0]}</span>
                    </div>
                    <span className="text-sm font-medium">{t.title}</span>
                  </button>
                ))}
              </div>
            )}
            {results.length > 0 && (
              <div className="p-2 border-t border-border">
                <p className="px-2 py-1 text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Resources</p>
                {results.map((r, i) => {
                  const Icon = typeIcons[r.type] || LinkIcon;
                  return (
                    <button
                      key={`${r.topicId}-${i}`}
                      onClick={() => { navigate(`/topic/${r.topicId}`); setIsOpen(false); setQuery(""); }}
                      className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-accent transition-colors text-left"
                    >
                      <Icon className="h-3.5 w-3.5 text-muted-foreground flex-shrink-0" />
                      <div className="min-w-0">
                        <p className="text-sm font-medium truncate">{r.name}</p>
                        <p className="text-[10px] text-muted-foreground">{r.topicTitle}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}