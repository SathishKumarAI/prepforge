// Topic → Catppuccin accent mapping. Keeps color usage consistent app-wide.
export const TOPIC_COLOR: Record<string, string> = {
  AI: "mauve",
  "Machine Learning": "blue",
  "Data Science": "teal",
  "Data Analytics": "peach",
};

export const DIFFICULTY_COLOR: Record<string, string> = {
  easy: "green",
  medium: "yellow",
  hard: "red",
};

export function topicColor(topic: string): string {
  return TOPIC_COLOR[topic] ?? "lavender";
}

export function difficultyColor(d: string): string {
  return DIFFICULTY_COLOR[d] ?? "subtext0";
}

// tailwind can't do fully dynamic classes; map to explicit text/bg utilities.
export const ACCENT_TEXT: Record<string, string> = {
  mauve: "text-mauve",
  blue: "text-blue",
  teal: "text-teal",
  peach: "text-peach",
  green: "text-green",
  yellow: "text-yellow",
  red: "text-red",
  lavender: "text-lavender",
  subtext0: "text-subtext0",
};

export const ACCENT_BORDER: Record<string, string> = {
  mauve: "border-mauve/40",
  blue: "border-blue/40",
  teal: "border-teal/40",
  peach: "border-peach/40",
  green: "border-green/40",
  yellow: "border-yellow/40",
  red: "border-red/40",
  lavender: "border-lavender/40",
  subtext0: "border-subtext0/40",
};

export const ACCENT_DOT: Record<string, string> = {
  mauve: "bg-mauve",
  blue: "bg-blue",
  teal: "bg-teal",
  peach: "bg-peach",
  green: "bg-green",
  yellow: "bg-yellow",
  red: "bg-red",
  lavender: "bg-lavender",
  subtext0: "bg-subtext0",
};
