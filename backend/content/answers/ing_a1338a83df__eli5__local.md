---
qid: ing_a1338a83df__eli5__local
question: 'Explain: Component-Level Evaluation — Rag Evaluation Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 208
total_tokens: 364
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:53:22-05:00'
sources: []
---

Think of a recipe book that’s split into three sections: ingredients, instructions, and flavor tests.  
In **component‑level evaluation** for RAG (Retrieve‑Augment‑Generate) systems, we look at each “section” separately to see how well it works.

1. **Retrieval component** – the pantry. We ask: *Are we pulling the right facts?*  
2. **Augmentation component** – the mixing bowl. We check: *Did we combine those facts correctly into a useful context?*  
3. **Generation component** – the final dish. We evaluate: *Is the answer tasty, accurate, and relevant?*

By grading each part like a chef’s critique—checking for freshness (retrieval quality), balance of flavors (augmentation coherence), and presentation (generation clarity)—we can pinpoint exactly where the recipe needs improvement before tasting the finished meal.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
