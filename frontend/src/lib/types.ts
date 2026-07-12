export type Difficulty = "easy" | "medium" | "hard";

export interface Quiz {
  choices: string[];
  correctIndex: number;
}

export interface VaultSource {
  title: string;
  path: string; // vault-relative path to the source document
}

export interface AltAnswer {
  answer: string;
  source: VaultSource;
}

export interface Question {
  id: string;
  topic: string;
  difficulty: Difficulty;
  tags: string[];
  question: string;
  answer: string;
  quiz?: Quiz;
  // present on questions ingested from the Obsidian vault
  sources?: VaultSource[];
  alt_answers?: AltAnswer[];
  from_vault?: boolean;
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
