---
qid: ing_42bebfe77b__eli5__local
question: 'Explain: Retriever Evaluation — Rag Evaluation Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 155
output_tokens: 215
total_tokens: 370
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:22:04-05:00'
sources: []
---

Imagine you’re cooking a meal with a smart assistant that first fetches ingredients (the “retriever”) and then cooks the dish (the “generator”). To make sure it’s actually using the right ingredients, we run a **Retriever Evaluation**—a test that checks whether the assistant brings back useful, relevant facts before it starts cooking.

In RAG (Retrieval‑Augmented Generation) evaluation patterns, we give the system a question and a set of documents. The retriever picks the most helpful snippets, and then the generator writes an answer. We score the retriever by looking at how many of those picked snippets are truly relevant to the answer—much like checking that every ingredient in your recipe matches what you’re supposed to make.

If the retriever fails, the dish will taste off no matter how good the cooking instructions are. Thus, retriever evaluation is the first quality check before the final output is judged.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
