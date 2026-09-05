---
qid: ing_5bd6d6d6a9__eli5__local
question: 'Explain: Pattern 3: Hybrid (ColBERT + BM25 + Dense)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 194
total_tokens: 358
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:01:43-05:00'
sources: []
---

Imagine you’re looking for a recipe in a huge cookbook that’s split into two parts: the first part is a quick index of all the ingredients (like BM25, which lists “what” appears where), and the second part is a smart assistant that can understand how similar a dish tastes to what you want (like ColBERT, a dense vector model). A hybrid system keeps both parts alive. When you ask for “vegan chocolate cake,” it first checks the ingredient index for all recipes containing “vegan” or “chocolate.” Then it feeds those candidates to the assistant, which scores how closely each recipe’s overall flavor matches your request. The final answer is a blend of the exact match list and the nuanced similarity score, giving you both speed and depth.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
