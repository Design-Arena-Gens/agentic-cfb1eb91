export type Mood = "cute" | "funny" | "emotional" | "clever" | "relaxing";
export type TargetEmotion = "curiosity" | "joy" | "surprise" | "calm" | "empathy";
export type Format = "Shorts" | "Long video" | "Both";

export interface VideoBlueprint {
  id: string;
  mood: Mood;
  targetEmotion: TargetEmotion;
  scenario: string;
  hook: string;
  escalation: string;
  resolution: string;
  narrationStyle: "voiceover" | "minimal" | "silent";
  script: string[];
  visualPrompts: string[];
  format: Format;
  recommendedLength: string;
  cameraStyle: string;
  title: string;
  description: string;
}

export const catArchetypes = [
  {
    name: "Marble",
    traits: ["curious", "wide-eyed", "cream tabby"],
    defaultMood: "cute" satisfies Mood,
    quirks: [
      "tries to mimic human routines",
      "collects shiny paperclips",
      "is obsessed with gentle chimes"
    ]
  },
  {
    name: "Nova",
    traits: ["clever", "sleek charcoal coat", "green eyes"],
    defaultMood: "clever" satisfies Mood,
    quirks: ["solves puzzle feeders effortlessly", "loves ambient synth music", "watches astronomy videos"]
  },
  {
    name: "Pip",
    traits: ["playful", "calico", "tiny white socks"],
    defaultMood: "funny" satisfies Mood,
    quirks: [
      "treats cardboard boxes like stage props",
      "pounces at soap bubbles with ballerina precision",
      "chirps whenever the fridge opens"
    ]
  },
  {
    name: "Saffron",
    traits: ["gentle", "floofy amber coat", "deep blue eyes"],
    defaultMood: "relaxing" satisfies Mood,
    quirks: ["hums in purr trills", "guards plush toys", "falls asleep mid-stretch"]
  },
  {
    name: "Atlas",
    traits: ["majestic", "silver Maine Coon", "feathered tail"],
    defaultMood: "emotional" satisfies Mood,
    quirks: [
      "comforts anxious kittens",
      "wraps paws around shoulders",
      "stares out windows like a lighthouse keeper"
    ]
  }
] as const;

export const sceneSettings = [
  {
    location: "sun-drenched loft studio with hanging plants",
    lighting: "golden hour beams filtering through tall windows",
    soundtrack: "soft lo-fi guitar"
  },
  {
    location: "miniature cinema built from cardboard",
    lighting: "twinkle lights and improvised spotlights",
    soundtrack: "playful marimba beats"
  },
  {
    location: "midnight rooftop garden overlooking the city",
    lighting: "moonlit glow with subtle neon edges",
    soundtrack: "ambient synth paired with gentle night sounds"
  },
  {
    location: "cozy reading nook with layered blankets and fairy lights",
    lighting: "warm lamplight contrasting with cool shadows",
    soundtrack: "whisper-soft piano"
  },
  {
    location: "studio kitchen with a cat-sized chef station",
    lighting: "bright morning light with soft bounce fill",
    soundtrack: "cheerful pizzicato strings"
  },
  {
    location: "backyard obstacle course built from recycled toys",
    lighting: "vibrant spring afternoon",
    soundtrack: "upbeat acoustic pop"
  }
] as const;

export const narrativeBeats = [
  {
    hook: "Open on a tight close-up of startled kitten eyes as a gentle chime rings.",
    escalation:
      "Cut to rapid, playful shots of the cat experimenting, each clip revealing a surprising new trick.",
    resolution:
      "End with a calm wide shot as the cat settles, looping back to the opening sound cue for seamless replay."
  },
  {
    hook: "Begin with a floating title card sketched on a window, the cat's paw tracing the outline.",
    escalation:
      "Build momentum by alternating between slow-motion discoveries and quick comedic beats.",
    resolution:
      "Close on a softly lit moment that nods to the title card, inviting viewers to imagine the next chapter."
  },
  {
    hook: "Start with ambient sound and a single paw tapping a mysterious button.",
    escalation:
      "Stack curiosity by revealing each response to the button press, escalating both pace and wonder.",
    resolution:
      "Resolve with the cat proudly presenting the final reveal, then glance back at the button to tease a loop."
  },
  {
    hook: "Launch with a playful text message alert as the cat checks a tiny screen.",
    escalation:
      "Mix POV shots and reaction faces as the cat follows a whimsical scavenger hunt across the room.",
    resolution:
      "Tie it together with a satisfying aerial shot of the completed mission, ending on a wink to replay."
  },
  {
    hook: "Cold open on the cat mid-action, freeze-frame, then rewind to explain how we got here.",
    escalation:
      "Blend montage-style pacing with narrative voiceover to keep energy high and stakes personal.",
    resolution:
      "Finish with a heartfelt beat showing the cat's reward, followed by a subtle call to imagine part two."
  }
] as const;

export const narrationPalettes = [
  {
    style: "voiceover" as const,
    scriptFrame: [
      "That sound? It's Marble's secret morning alarm.",
      "Every chime unlocks a new little ritual she's perfected.",
      "By the end, she'll reveal the habit that keeps her humans on schedule."
    ]
  },
  {
    style: "minimal" as const,
    scriptFrame: [
      "Text overlays only when the visual beat needs clarity.",
      "Natural sound carries the story—paw taps, soft purrs, the environment.",
      "A single line at the end ties the emotional bow."
    ]
  },
  {
    style: "voiceover" as const,
    scriptFrame: [
      "Nova treats every puzzle like a mission briefing.",
      "Watch how each clever twist brings her closer to the hidden treat.",
      "Stay for the quiet victory dance—it says everything."
    ]
  },
  {
    style: "silent" as const,
    scriptFrame: [
      "Lean fully on expressive cat acting and ambient score.",
      "Use rhythmic cuts to keep retention high.",
      "Final shot holds just long enough to encourage looping."
    ]
  },
  {
    style: "voiceover" as const,
    scriptFrame: [
      "Atlas has appointed himself guardian of the evening mood.",
      "Tonight, he's curating calm for a kitten who's never seen rain.",
      "Watch the transformation—they both end up dreamy-eyed."
    ]
  }
] as const;

export const formatGuidance = [
  {
    format: "Shorts" as const,
    length: "45-55 seconds",
    camera: "Dynamic mixed—whip pans for gags, slow push-ins for reveals."
  },
  {
    format: "Long video" as const,
    length: "6-7 minutes",
    camera: "Documentary-style handheld with intentional rack focus moments."
  },
  {
    format: "Both" as const,
    length: "Create a 75-second anchor cut that can expand into a 7-minute featurette.",
    camera: "Modular shots—start wide for context, cut to playful macro lens details."
  },
  {
    format: "Shorts" as const,
    length: "35-40 seconds",
    camera: "Loop-aware—start and end with identical framing for seamless replay."
  },
  {
    format: "Both" as const,
    length: "90 seconds core story with optional bonus scenes for long-form.",
    camera: "Stabilized gimbal sweeping moves paired with cat-level eye-lines."
  }
] as const;

export const titleFragments = {
  curiosity: ["The Cat Who Hacked Morning Light", "Mystery Button Mission", "Rooftop Whisper Signals"],
  joy: ["Tiny Chef's Midnight Diner Rush", "Pip's Bubble Ballet Surprise", "Marble's Cozy Studio Show"],
  surprise: ["Cardboard Cinema's Secret Ending", "Nova's Code Name: Pawprint", "Atlas and the Vanishing Dot"],
  calm: ["Saffron's Rainy Day Ritual", "Dream Loops in the Loft", "Moonlit Purr Therapy"],
  empathy: ["Atlas Heals a Scared Kitten", "The Night Pip Stayed Soft", "Saffron's Comfort Loop"]
};

export const descriptionFrames = [
  "Crafted to keep viewers leaning in from the first eye-flutter to the last purr.",
  "Shot list blends tactile close-ups with spacious reveals to keep retention high.",
  "Built for safe, cozy storytelling—no fake drama, just pure feline magic.",
  "Every beat designed to feel hand-made and replay-worthy.",
  "Perfect for creators who want original cat stories their audience can trust."
];
