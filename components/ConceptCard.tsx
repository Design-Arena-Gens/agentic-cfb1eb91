import { type VideoBlueprint } from "@/lib/catIdeas";
import { clsx } from "clsx";

interface ConceptCardProps {
  concept: VideoBlueprint;
  index: number;
}

export function ConceptCard({ concept, index }: ConceptCardProps) {
  return (
    <article
      className={clsx(
        "glass-panel rounded-3xl border border-peach/20 p-8 backdrop-blur",
        "transition-all duration-300 hover:-translate-y-1 hover:border-peach/40 hover:shadow-2xl"
      )}
    >
      <header className="flex items-baseline justify-between gap-4 border-b border-white/5 pb-4">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-peach/70">Concept {index + 1}</p>
          <h2 className="mt-2 text-2xl font-semibold text-cream">{concept.title}</h2>
        </div>
        <div className="rounded-full border border-peach/40 bg-peach/10 px-4 py-1 text-sm text-peach">
          {concept.mood} • {concept.targetEmotion}
        </div>
      </header>

      <section className="mt-6 space-y-3 text-slate">
        <p className="text-base text-cream/90">{concept.scenario}</p>
        <div className="space-y-2">
          <p className="font-semibold text-peach">Structure</p>
          <ul className="grid gap-2 text-sm leading-relaxed text-cream/80 md:grid-cols-3 md:text-base">
            <li className="rounded-2xl bg-white/5 p-3">
              <p className="font-medium text-peach/80">Beginning</p>
              <p>{concept.hook}</p>
            </li>
            <li className="rounded-2xl bg-white/5 p-3">
              <p className="font-medium text-peach/80">Middle</p>
              <p>{concept.escalation}</p>
            </li>
            <li className="rounded-2xl bg-white/5 p-3">
              <p className="font-medium text-peach/80">Ending</p>
              <p>{concept.resolution}</p>
            </li>
          </ul>
        </div>
      </section>

      <section className="mt-6 space-y-3">
        <p className="font-semibold text-peach">Script Beat</p>
        <div className="grid gap-3 text-sm leading-relaxed text-cream/80 md:grid-cols-3 md:text-base">
          {concept.script.map((line, lineIndex) => (
            <div key={lineIndex} className="rounded-2xl bg-white/5 p-3">
              <p className="text-peach/70">Beat {lineIndex + 1}</p>
              <p>{line}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-6 space-y-3">
        <p className="font-semibold text-peach">Visual Directions</p>
        <ul className="grid gap-3 text-sm leading-relaxed text-cream/80">
          {concept.visualPrompts.map((prompt, promptIndex) => (
            <li key={promptIndex} className="rounded-2xl border border-peach/20 bg-white/5 p-3">
              <span className="text-peach/70">Prompt {promptIndex + 1}:</span> {prompt}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-6 space-y-2 border-t border-white/5 pt-4 text-sm text-cream/80">
        <div className="flex flex-wrap items-center gap-3 text-peach/80">
          <span className="rounded-full border border-peach/30 px-3 py-1">
            Format: {concept.format}
          </span>
          <span className="rounded-full border border-peach/30 px-3 py-1">
            Length: {concept.recommendedLength}
          </span>
          <span className="rounded-full border border-peach/30 px-3 py-1">
            Camera: {concept.cameraStyle}
          </span>
        </div>
        <p className="pt-2 text-cream/70">
          <strong>Title:</strong> {concept.title}
        </p>
        <p className="text-cream/70">
          <strong>Description:</strong> {concept.description}
        </p>
      </section>
    </article>
  );
}
