export type Difficulty = "easy" | "medium" | "hard";

export interface Quiz {
  choices: string[];
  correctIndex: number;
  kind?: "mcq" | "cloze" | "truefalse" | "spotwrong"; // default mcq
  prompt?: string; // overrides the displayed question (cloze sentence, T/F statement, …)
}

export interface VaultSource {
  title: string;
  path: string; // vault-relative (or library-relative) path to the source document
  kind?: "vault" | "library"; // "library" = an ingested doc/video (read via /library/read)
}

export interface AltAnswer {
  answer: string;
  source: VaultSource;
}

// An outbound reading link the source author curated — surfaced for deeper study.
export interface DeepLink {
  title: string;
  url: string;
  via?: string; // set when borrowed from a related question, never presented as this card's own
}

// Where a question came from — set on every question, curated ones included.
export interface Origin {
  kind: "curated" | "library" | "vault";
  label: string;
}

export interface Question {
  id: string;
  topic: string;
  difficulty: Difficulty;
  tags: string[];
  question: string;
  answer: string;
  quiz?: Quiz;
  links?: DeepLink[];
  reading?: DeepLink[]; // authored citations, or links borrowed from close relatives
  origin?: Origin;
  truncated?: boolean; // answer was cut — the full text is in the source document
  // present on questions ingested from the Obsidian vault
  sources?: VaultSource[];
  alt_answers?: AltAnswer[];
  from_vault?: boolean;
  // zero-token TF-IDF memory index — related question ids
  related?: { id: string; score: number }[];
}

export interface Source {
  title: string;
  url: string;
}

export interface AnswerMeta {
  model?: string;
  input_tokens?: number;
  output_tokens?: number;
  total_tokens?: number;
  web_searches?: number;
  cost_usd?: number;
  cached?: boolean; // served from a pre-written .md, no API call
}

export interface GeneratedAnswer {
  answer?: string;
  sources?: Source[];
  meta?: AnswerMeta;
  error?: string;
  message?: string;
}

export interface Resource {
  id: string;
  kind: "video" | "article";
  source: string;
  topic: string;
  title: string;
  url: string;
  summary: string;
  published: string | null;
  thumbnail: string | null;
}
