---
qid: ing_402d1d6e49__star__local
question: 'Explain: Recursive Structure Splitting — Chunking Strategies'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 369
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:36:39-05:00'
sources: []
---

**Situation** – At my last company I was tasked with building a transformer‑based summarizer for legal contracts that could handle documents up to 120 k tokens, far exceeding the model’s 8 k context window. The product manager wanted real‑time summaries during client calls, so latency had to stay under 500 ms per chunk.

**Task** – I needed to design a chunking strategy that preserved document semantics while fitting the model’s limits, and then implement it so the system could stitch outputs back together without losing context.

**Action** – I adopted a recursive structure‑splitting approach: first parse the contract into clauses using spaCy’s dependency parser. For each clause, I measured its token length; if it exceeded 8 k tokens I recursively split it at logical sub‑clauses (e.g., “payment terms” → “invoice frequency”, “late fees”). Each final chunk was padded to exactly 7 k tokens with a special separator so the model could learn boundaries. During inference, I processed chunks in parallel on a single GPU, then used an overlap‑and‑merge algorithm that weighted overlapping sentences by cosine similarity to avoid duplication. The pipeline was wrapped in Ray for distributed execution.

**Result** – The summarizer handled 120 k token contracts with an average latency of 320 ms per chunk and achieved ROUGE‑L scores of 0.62 on the legal benchmark, up from 0.48 before restructuring. I learned that careful hierarchical splitting preserves meaning while meeting strict resource constraints, and that small padding tokens can dramatically improve model stability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
