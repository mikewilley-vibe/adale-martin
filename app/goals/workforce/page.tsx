import type { Metadata } from "next";
import { GoalPage } from "@/components/GoalPage";
import { goals } from "@/lib/content";

export const metadata: Metadata = {
  title: "Workforce Retention",
};

export default function WorkforcePage() {
  return (
    <GoalPage
      title={goals.workforce.title}
      paragraphs={goals.workforce.body}
      href="/goals/workforce"
      highlight="87%+ teacher retention — above the national average — because educators matter."
    />
  );
}
