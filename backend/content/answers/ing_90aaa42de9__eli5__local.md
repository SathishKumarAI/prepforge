---
qid: ing_90aaa42de9__eli5__local
question: 'Explain: LLM-as-Judge for RAG — Rag Evaluation Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 205
total_tokens: 366
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:26:20-05:00'
sources: []
---

Think of a courtroom where the judge is an AI that only looks at the evidence you hand it, not the whole case book. In “LLM‑as‑Judge for RAG,” the language model (the judge) reads the documents the system fetched (the evidence) and the answer it produced (the verdict). It then decides if the answer fits the facts, is relevant, and doesn’t miss anything important—just like a judge checks that the lawyer’s arguments are supported by the evidence. The patterns you see (e.g., “fact‑checking” or “source‑confidence”) are different ways of asking the judge to weigh specific aspects: does it cite the right source? Is the answer accurate? By letting an LLM act as a neutral referee, we can automatically score how well retrieval‑augmented systems actually use their extra information.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
