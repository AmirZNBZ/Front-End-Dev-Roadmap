import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Code, Braces, FileType, Route, Database, Plug, Shield, TestTube, Zap, FolderTree, Puzzle, RefreshCw, Container, LayoutDashboard, ArrowRight } from "lucide-react";

const topicIcons = {
  "html-css": Code,
  "javascript": Braces,
  "typescript": FileType,
  "react": Code,
  "routing": Route,
  "state-management": Database,
  "api": Plug,
  "authentication": Shield,
  "testing": TestTube,
  "performance": Zap,
  "monorepo": FolderTree,
  "micro-frontend": Puzzle,
  "ci-cd": RefreshCw,
  "docker": Container,
  "frontend-system-design": LayoutDashboard,
};

export default function TopicGrid({ topics, completedItems }) {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight mb-2">
          Frontend Developer Roadmap
        </h1>
        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-xl">
          A curated learning path for modern frontend development. Track your progress and explore resources for each topic.
        </p>
      </div>

      <div className="grid gap-3">
        {topics.map((topic, index) => {
          const Icon = topicIcons[topic.id] || Code;
          const completed = topic.resources.filter((_, i) => completedItems[`${topic.id}-${i}`]).length;
          const total = topic.resources.length;
          const pct = total > 0 ? Math.round((completed / total) * 100) : 0;

          return (
            <Link key={topic.id} to={`/topic/${topic.id}`}>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.04, duration: 0.3 }}
                whileHover={{ y: -2 }}
                className="group flex items-center gap-4 p-4 rounded-xl border bg-card hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300"
              >
                <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${topic.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold text-muted-foreground tabular-nums">{String(index + 1).padStart(2, "0")}</span>
                    <h3 className="text-sm font-bold text-card-foreground">{topic.title}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5 truncate">{topic.description}</p>
                  {/* Mini progress */}
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex-1 h-1 bg-muted rounded-full overflow-hidden max-w-32">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${topic.color} transition-all duration-500`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <span className="text-[10px] font-semibold text-muted-foreground tabular-nums">{completed}/{total}</span>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </motion.div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}