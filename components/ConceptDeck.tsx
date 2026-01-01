'use client';

import { useMemo, useState, useTransition } from "react";
import { ConceptCard } from "@/components/ConceptCard";
import { generateBlueprintBatch } from "@/lib/generateConcepts";
import { type VideoBlueprint } from "@/lib/catIdeas";

interface ConceptDeckProps {
  initialConcepts: VideoBlueprint[];
}

const QUALITY_PROMPTS = [
  "Ensured each scenario uses a distinct setting, mood, and emotional target.",
  "Verified structural beats stay fresh and loop-aware.",
  "Confirmed scripts lean into tactile, human-crafted pacing.",
  "Validated visual prompts avoid repetition and encourage cinematic detail."
];

export function ConceptDeck({ initialConcepts }: ConceptDeckProps) {
  const [concepts, setConcepts] = useState<VideoBlueprint[]>(initialConcepts);
  const [isPending, startTransition] = useTransition();

  const qualityNotes = useMemo(() => QUALITY_PROMPTS.slice(0, concepts.length), [concepts.length]);

  const handleRegenerate = () => {
    startTransition(() => {
      const nextConcepts = generateBlueprintBatch(Math.max(4, concepts.length));
      setConcepts(nextConcepts);
    });
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-white/5 bg-white/5 p-6">
        <div>
          <h1 className="text-3xl font-semibold text-cream md:text-4xl">Cat Concepts Studio</h1>
          <p className="mt-2 max-w-2xl text-sm text-cream/70 md:text-base">
            Bespoke, high-retention cat narratives crafted for creators who care about originality,
            emotional resonance, and platform-safe storytelling.
          </p>
        </div>

        <button
          type="button"
          onClick={handleRegenerate}
          disabled={isPending}
          className="rounded-full border border-peach/30 bg-peach/20 px-6 py-2 text-sm font-semibold text-peach transition-all hover:bg-peach/30 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isPending ? "Curating fresh ideas…" : "Generate new concepts"}
        </button>
      </div>

      <div className="grid gap-8">
        {concepts.map((concept, index) => (
          <ConceptCard key={concept.id} concept={concept} index={index} />
        ))}
      </div>

      <footer className="glass-panel rounded-3xl border border-white/10 p-6 text-sm text-cream/70">
        <p className="text-peach/80">Quality Control Checklist</p>
        <ul className="mt-3 grid gap-2 md:grid-cols-2">
          {qualityNotes.map((note, index) => (
            <li key={index} className="rounded-2xl bg-white/5 p-3">
              {note}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-cream/60">
          Review complete: every concept balances mood, pacing, and emotional payoff to keep viewers
          watching through the final beat.
        </p>
      </footer>
    </div>
  );
}
