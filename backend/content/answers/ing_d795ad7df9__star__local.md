---
qid: ing_d795ad7df9__star__local
question: 'Explain: The Problem — Real Time Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 299
total_tokens: 532
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:39:58-05:00'
sources: []
---

**Situation:** In my last role at a fintech startup, we launched a new customer support chatbot that needed to pull up relevant policy documents instantly as users typed questions. The existing batch‑search engine returned results in about 2 seconds—too slow for a conversational UI where any delay felt like a dead‑end.

**Task:** I was tasked with reducing the search latency to under 200 milliseconds while keeping accuracy above 90% recall on our policy corpus of 12,000 PDFs and markdown files.

**Action:** I re‑engineered the index using an inverted index stored in Redis for sub‑millisecond lookups. To handle natural language variations, I trained a lightweight BERT‑based sentence encoder on labeled user queries and policy summaries, then projected embeddings into a FAISS HNSW graph for approximate nearest‑neighbor search. The pipeline ran as a stateless microservice with a 5 ms cache layer for hot queries. I also implemented a fallback to the legacy engine only when no candidate met a confidence threshold.

**Result:** Query latency dropped from 2 seconds to 120 milliseconds, and user satisfaction scores rose by 18% in A/B testing. I learned that marrying fast key‑value stores with modern semantic embeddings can deliver real‑time AI search without sacrificing relevance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
