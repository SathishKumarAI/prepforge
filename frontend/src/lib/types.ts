export type Difficulty = "easy" | "medium" | "hard";

export interface Quiz {
  choices: string[];
  correctIndex: number;
}

export interface Question {
  id: string;
  topic: string;
  difficulty: Difficulty;
  tags: string[];
  question: string;
  answer: string;
  quiz?: Quiz;
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
