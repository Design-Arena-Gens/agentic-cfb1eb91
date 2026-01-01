import { Suspense } from "react";
import { ConceptDeck } from "@/components/ConceptDeck";
import { generateBlueprintBatch } from "@/lib/generateConcepts";

async function fetchConcepts() {
  return generateBlueprintBatch(4);
}

export default async function Page() {
  const concepts = await fetchConcepts();

  return (
    <main className="mx-auto max-w-6xl px-6 py-12 md:py-16">
      <Suspense fallback={<p className="text-cream/70">Curating feline narratives…</p>}>
        <ConceptDeck initialConcepts={concepts} />
      </Suspense>
    </main>
  );
}
