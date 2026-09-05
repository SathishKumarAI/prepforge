---
qid: ing_803b3beec7__eli5__local
question: 'Explain: Mixture-of-Experts (MoE) — Llm Fundamentals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 242
total_tokens: 404
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:00:13-05:00'
sources: []
---

Imagine a huge library where each book is written by a different author who specializes in a particular subject—one writes about history, another about physics, another about cooking. When someone asks for information, the librarian doesn’t hand out every book; instead she quickly looks at the question and hands over only the relevant author’s book.

In AI, a **Mixture‑of‑Experts (MoE)** works like that librarian. The “library” is a neural network split into many small sub‑networks called **experts**—each trained on different patterns or tasks. A tiny controller decides which expert(s) should answer each input. Thus the system uses only the right experts for each question, keeping computation light while still handling many topics.

This design lets large models stay fast and efficient: instead of every part of the network working on every input, only a few specialists do the heavy lifting, just as the librarian gives you the right book without rummaging through everything.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
