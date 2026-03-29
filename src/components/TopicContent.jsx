import { useState } from "react";
import ResourceCard from "./ResourceCard";
import { ChevronDown, Tag, StickyNote } from "lucide-react";

function Section({ title, children, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 bg-muted/40 hover:bg-muted/70 transition-colors"
      >
        <span className="font-semibold text-sm text-foreground">{title}</span>
        <ChevronDown size={16} className={`text-muted-foreground transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="px-5 py-4 space-y-3">{children}</div>}
    </div>
  );
}

export default function TopicContent({ topic, progress, onToggle, note, onNoteChange }) {
  const books = topic.resources.filter(r => r.type === "book");
  const docs = topic.resources.filter(r => r.type === "docs");
  const courses = topic.resources.filter(r => r.type === "course");
  const tools = topic.resources.filter(r => r.type === "tool");

  const totalResources = topic.resources.length;
  const completedCount = topic.resources.filter(r => progress[r.title]).length;
  const progressPct = totalResources > 0 ? Math.round((completedCount / totalResources) * 100) : 0;

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="max-w-3xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${topic.color} text-white text-2xl mb-4 shadow-lg`}>
            {topic.icon}
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-3">{topic.title}</h1>
          <p className="text-muted-foreground leading-relaxed">{topic.description}</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8 p-5 rounded-xl bg-card border border-border">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-foreground">Progress</span>
            <span className="text-sm font-semibold text-primary">{completedCount}/{totalResources} completed</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div
              className={`h-2 rounded-full bg-gradient-to-r ${topic.color} transition-all duration-500`}
              style={{ width: `${progressPct}%` }}
            />
          </div>
          <p className="text-xs text-muted-foreground mt-2">{progressPct}% complete</p>
        </div>

        {/* Topics Tags */}
        {topic.topics?.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <Tag size={14} className="text-muted-foreground" />
              <span className="text-sm font-semibold text-foreground">Key Concepts</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {topic.topics.map(t => (
                <span key={t} className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground border border-border">
                  {t}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Resources */}
        <div className="space-y-4">
          {books.length > 0 && (
            <Section title={`📚 Books (${books.length})`}>
              {books.map(r => (
                <ResourceCard key={r.title} resource={r} completed={!!progress[r.title]} onToggle={() => onToggle(r.title)} />
              ))}
            </Section>
          )}
          {docs.length > 0 && (
            <Section title={`📄 Documentation (${docs.length})`}>
              {docs.map(r => (
                <ResourceCard key={r.title} resource={r} completed={!!progress[r.title]} onToggle={() => onToggle(r.title)} />
              ))}
            </Section>
          )}
          {courses.length > 0 && (
            <Section title={`🎓 Courses (${courses.length})`}>
              {courses.map(r => (
                <ResourceCard key={r.title} resource={r} completed={!!progress[r.title]} onToggle={() => onToggle(r.title)} />
              ))}
            </Section>
          )}
          {tools.length > 0 && (
            <Section title={`🛠️ Tools (${tools.length})`}>
              {tools.map(r => (
                <ResourceCard key={r.title} resource={r} completed={!!progress[r.title]} onToggle={() => onToggle(r.title)} />
              ))}
            </Section>
          )}
        </div>

        {/* Notes */}
        <div className="mt-6 border border-border rounded-xl overflow-hidden">
          <div className="flex items-center gap-2 px-5 py-4 bg-muted/40">
            <StickyNote size={14} className="text-muted-foreground" />
            <span className="font-semibold text-sm text-foreground">My Notes</span>
          </div>
          <div className="px-5 py-4">
            <textarea
              value={note || ""}
              onChange={e => onNoteChange(e.target.value)}
              placeholder="Add personal notes for this topic..."
              rows={4}
              className="w-full text-sm bg-transparent text-foreground placeholder:text-muted-foreground resize-none focus:outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}