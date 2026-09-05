---
qid: ing_6e12ad58c3__eli5__local
question: 'Explain: Multi-Head Attention — Llm Internals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 214
total_tokens: 372
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:30:52-05:00'
sources: []
---

**Multi‑head attention in a large language model (LLM)** is like having several pairs of expert translators working on the same sentence at once.

Imagine you’re reading a story and want to understand every nuance. One translator focuses on *who* is speaking, another on *what* they say, a third on *why* it matters, and so on. Each pair reads the whole sentence but zooms in on a different aspect, then shares their notes with everyone else.

In an LLM, each “translator” is called a **head**. All heads simultaneously examine every word (the model’s input) and create its own small understanding of relationships between words. Afterward, the model blends these diverse insights into one richer picture before moving to the next step. This lets the AI capture many layers of meaning without getting stuck on just one viewpoint.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
