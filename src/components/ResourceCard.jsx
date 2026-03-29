import { ExternalLink, BookOpen, FileText, Play, Wrench } from "lucide-react";

const TAG_CONFIG = {
  book: { label: "Book", icon: BookOpen, color: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300" },
  docs: { label: "Docs", icon: FileText, color: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300" },
  course: { label: "Course", icon: Play, color: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300" },
  tool: { label: "Tool", icon: Wrench, color: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300" },
};

export default function ResourceCard({ resource, completed, onToggle }) {
  const tag = TAG_CONFIG[resource.type] || TAG_CONFIG.docs;
  const Icon = tag.icon;

  return (
    <div className={`group relative flex items-start gap-4 p-4 rounded-xl border transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 ${
      completed
        ? "bg-muted/60 border-border opacity-60"
        : "bg-card border-border hover:border-ring/50"
    }`}>
      {/* Checkbox */}
      <button
        onClick={onToggle}
        className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
          completed
            ? "bg-primary border-primary text-primary-foreground"
            : "border-border hover:border-primary/50"
        }`}
      >
        {completed && (
          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
            <path d="M1 4L3.5 6.5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </button>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <a
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`font-medium text-sm leading-snug transition-colors hover:text-primary ${
                completed ? "line-through text-muted-foreground" : "text-foreground"
              }`}
            >
              {resource.title}
            </a>
            {resource.author && (
              <p className="text-xs text-muted-foreground mt-0.5">by {resource.author}</p>
            )}
          </div>
          <a
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 text-muted-foreground hover:text-primary transition-colors opacity-0 group-hover:opacity-100"
          >
            <ExternalLink size={14} />
          </a>
        </div>

        <div className="mt-2">
          <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${tag.color}`}>
            <Icon size={10} />
            {tag.label}
          </span>
        </div>
      </div>
    </div>
  );
}