import { useOutletContext } from "react-router-dom";
import TopicContent from "../components/TopicContent";
import roadmapData from "../lib/roadmapData";

export default function TopicPage() {
  const { completedItems, toggleItem } = useOutletContext();
  const urlParams = new URLSearchParams(window.location.search);
  const topicId = window.location.pathname.split("/topic/")[1];
  const topic = roadmapData.find((t) => t.id === topicId);

  if (!topic) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-muted-foreground">Topic not found.</p>
      </div>
    );
  }

  return (
    <TopicContent
      topic={topic}
      completedItems={completedItems}
      onToggleItem={toggleItem}
    />
  );
}