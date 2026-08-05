import type { Metadata } from "next";
import { GoalPage } from "@/components/GoalPage";
import { goals } from "@/lib/content";

export const metadata: Metadata = {
  title: "Safe and Secure Schools",
};

export default function SafeSchoolsPage() {
  return (
    <GoalPage
      title={goals.safety.title}
      paragraphs={goals.safety.body}
      href="/goals/safe-schools"
      highlight="Expanding security resources to every NPS school — including elementary."
    />
  );
}
