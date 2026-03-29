import { useOutletContext } from "react-router-dom";
import TopicGrid from "../components/TopicGrid";
import roadmapData from "../lib/roadmapData";

export default function Home() {
  const { completedItems } = useOutletContext();

  return <TopicGrid topics={roadmapData} completedItems={completedItems} />;
}