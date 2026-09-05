---
qid: ing_7f6ac83dc4__eli5__local
question: 'Explain: Covering Indexes — Indexing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 191
total_tokens: 351
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:58:45-05:00'
sources: []
---

Imagine you’re looking for a specific recipe in a huge cookbook that’s arranged by ingredients. A normal index is like a table of contents that tells you *where* the recipe appears, but you still have to flip back to the page to read it.  
A **covering index** is a shortcut: instead of just pointing to the page, it already contains all the information you need (the ingredients and steps). When you look up “chocolate cake,” the index gives you the whole recipe right away—no extra flipping.  

In databases, a covering index stores not only the key column(s) used for searching but also the other columns you’ll read. This lets queries run faster because the database can answer them entirely from the index without touching the main table. Think of it as a pre‑packed recipe card that saves time and effort.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
