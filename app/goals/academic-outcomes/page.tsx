import type { Metadata } from "next";
import { GoalPage } from "@/components/GoalPage";
import { goals } from "@/lib/content";

export const metadata: Metadata = {
  title: "Improving Academic Outcomes",
};

export default function AcademicOutcomesPage() {
  return (
    <GoalPage
      title={goals.academic.title}
      paragraphs={goals.academic.body}
      href="/goals/academic-outcomes"
      highlight="Focused on a 95% graduation rate — enrolled, employed, or enlisted."
    />
  );
}
