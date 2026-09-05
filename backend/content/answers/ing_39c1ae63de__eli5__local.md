---
qid: ing_39c1ae63de__eli5__local
question: Walk me through hybrid retrieval - keyword, vector, and reranking. When
  does each stage earn its cost?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 337
total_tokens: 506
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:07:47-05:00'
sources: []
---

Imagine you’re looking for a recipe in a giant cookbook that’s split into three parts: the index (like a table of contents), the pantry (all the ingredients you have), and a chef who can taste-test the final dish.

**1. Keyword retrieval – the table of contents.**  
You type “chocolate cake” and the system scans the titles, headings, and short summaries that list exact words. It’s fast because it only looks at a pre‑built list, but if you miss a word (“fudge”) or use a synonym (“brownie”), it won’t find what you want.

**2. Vector retrieval – the pantry.**  
Now the system compares the whole recipe text to your query in a high‑dimensional “taste space.” It measures similarity even when words differ (e.g., “cocoa” vs. “dark chocolate”). This is slower because it crunches many numbers, but it catches recipes that keyword search would miss.

**3. Reranking – the chef tasting.**  
From the combined list of candidates, a final model re‑orders them using extra clues: context, user history, or how often people liked similar dishes. It costs the most because it runs a complex neural network on each candidate, but only for a handful of top results.

Each stage earns its cost when you need speed (keywords), breadth (vectors), and precision (reranking). Together they give quick, accurate answers without drowning in data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
