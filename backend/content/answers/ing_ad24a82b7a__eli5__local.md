---
qid: ing_ad24a82b7a__eli5__local
question: 'Explain: Retrieval Quality Drift — Rag Evaluation Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 244
total_tokens: 400
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:11:50-05:00'
sources: []
---

Imagine your favorite recipe book (the “retrieval system”) is stored in a library that’s constantly reorganizing its shelves. A **Retrieval Quality Drift** happens when the books you usually find quickly start to be shuffled around—sometimes the right page appears, sometimes it’s hidden behind newer titles. In Retrieval‑Augmented Generation (RAG), the model asks this book for facts and then writes a story with them. If the book’s organization changes over time, the model might pull out outdated or irrelevant passages, so its answers slowly become less useful—just like a recipe that suddenly gives you wrong measurements.

**Evaluation Patterns** are like regular taste‑tests: you give the system a set of questions and check how often it pulls the correct facts. If you notice the scores falling after some weeks, that’s evidence of drift—you’re not getting the same quality of information because the “book” has been reshuffled. Monitoring these patterns lets you spot when the library needs to be reorganized or updated so your model keeps producing reliable answers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
