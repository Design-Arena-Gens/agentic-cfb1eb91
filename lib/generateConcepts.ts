import {
  catArchetypes,
  descriptionFrames,
  formatGuidance,
  narrativeBeats,
  narrationPalettes,
  sceneSettings,
  titleFragments,
  type TargetEmotion,
  type VideoBlueprint
} from "./catIdeas";

const usedPairs = new Set<string>();

function sampleUnique<T>(list: readonly T[], usedIndices: Set<number>): T {
  const available = list.map((item, index) => ({ item, index })).filter(({ index }) => !usedIndices.has(index));
  const pool = available.length > 0 ? available : list.map((item, index) => ({ item, index }));
  const choice = pool[Math.floor(Math.random() * pool.length)];
  usedIndices.add(choice.index);
  return choice.item;
}

function randomChoice<T>(list: readonly T[]): T {
  return list[Math.floor(Math.random() * list.length)];
}

function selectTitle(emotion: TargetEmotion): string {
  const options = titleFragments[emotion];
  return options[Math.floor(Math.random() * options.length)];
}

export function generateBlueprintBatch(count = 4): VideoBlueprint[] {
  usedPairs.clear();
  const usedArchetypes = new Set<number>();
  const usedSettings = new Set<number>();
  const usedNarratives = new Set<number>();
  const usedNarration = new Set<number>();
  const usedFormats = new Set<number>();

  return Array.from({ length: count }).map(() => {
    const cat = sampleUnique(catArchetypes, usedArchetypes);
    const setting = sampleUnique(sceneSettings, usedSettings);
    const narrative = sampleUnique(narrativeBeats, usedNarratives);
    const narration = sampleUnique(narrationPalettes, usedNarration);
    const format = sampleUnique(formatGuidance, usedFormats);

    let targetEmotion: TargetEmotion = cat.defaultMood === "relaxing" ? "calm" : "joy";
    if (cat.defaultMood === "clever") targetEmotion = "curiosity";
    if (cat.defaultMood === "emotional") targetEmotion = randomChoice(["empathy", "surprise"]);
    if (cat.defaultMood === "funny") targetEmotion = randomChoice(["joy", "surprise"]);
    if (cat.defaultMood === "cute") targetEmotion = randomChoice(["joy", "curiosity"]);

    const pairKey = `${cat.name}-${setting.location}-${targetEmotion}`;
    if (usedPairs.has(pairKey)) {
      targetEmotion = randomChoice(["curiosity", "joy", "surprise", "calm", "empathy"]);
    }
    usedPairs.add(pairKey);

    const script = [...narration.scriptFrame];
    const visualPrompts = [
      `Ultra-detailed depiction of ${cat.traits.join(", ")} in a ${setting.location}, lighting ${setting.lighting}, captured with ${format.camera.toLowerCase()}.`,
      `Secondary shot: focus on ${cat.quirks[0]}, make the space tactile and lived-in, emphasize ${setting.soundtrack} mood.`,
      `Cutaway moment highlighting ${narrative.escalation.toLowerCase()}, keep framing intentional and loop-aware.`
    ];

    const hookText = narrative.hook.replace("Open on", "Hook:")
      .replace("Begin with", "Hook:")
      .replace("Start with", "Hook:")
      .replace("Launch with", "Hook:")
      .replace("Cold open on", "Hook:");

    const resolutionText = narrative.resolution.replace("End with", "Ending:")
      .replace("Close on", "Ending:")
      .replace("Resolve with", "Ending:")
      .replace("Tie it together with", "Ending:")
      .replace("Finish with", "Ending:");

    const descriptionParts = new Set<string>();
    while (descriptionParts.size < 2) {
      descriptionParts.add(randomChoice(descriptionFrames));
    }

    return {
      id: `${cat.name.toLowerCase()}-${Math.random().toString(36).slice(2, 7)}`,
      mood: cat.defaultMood,
      targetEmotion,
      scenario: `${cat.name}, a ${cat.traits.join(" and ")}, navigates a ${setting.location} where ${randomChoice(
        cat.quirks
      )} becomes the catalyst for an unexpected beat.`,
      hook: hookText,
      escalation: narrative.escalation,
      resolution: resolutionText,
      narrationStyle: narration.style,
      script,
      visualPrompts,
      format: format.format,
      recommendedLength: format.length,
      cameraStyle: format.camera,
      title: selectTitle(targetEmotion),
      description: Array.from(descriptionParts).join(" ")
    };
  });
}
