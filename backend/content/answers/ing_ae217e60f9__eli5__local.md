---
qid: ing_ae217e60f9__eli5__local
question: 'Explain: Dense (Semantic) Retrieval — Hybrid Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 263
total_tokens: 420
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:13:31-05:00'
sources: []
---

Imagine you’re looking for a recipe in a huge cookbook that’s been split into two parts.  
The first part is the **index**—a list of every word in the book, sorted alphabetically so you can quickly find “spaghetti” or “basil.” That’s like a *classic keyword search*: it tells you where to look but only if the exact words match.

The second part is the **content**—the full paragraphs that describe each recipe. Instead of reading every word, your brain (or a computer) has read the whole cookbook and created a tiny “memory” for each recipe: a short vector that captures its overall flavor (e.g., “Italian pasta with tomato sauce”). This memory lets you find recipes even if you use different words (“pasta dish”)—that’s **dense (semantic) retrieval**.

A *hybrid search* stitches these two together. First, it uses the keyword index to narrow down a handful of candidate recipes quickly. Then it re‑scores those candidates with their semantic vectors to pick the ones that truly match your taste. The result is fast, accurate, and flexible—like having both an efficient librarian and a well‑read chef guiding you.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
