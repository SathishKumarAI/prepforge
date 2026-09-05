---
qid: ing_7fadafdf4b__eli5__local
question: 'Explain: Grouped-Query Attention (GQA) — Attention Mechanisms'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 299
total_tokens: 461
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:59:21-05:00'
sources: []
---

**Grouped‑Query Attention (GQA)** is a way for a language model to “look” at different parts of the input quickly, like a chef tasting several dishes at once instead of one by one.

*Imagine you’re a head chef with many plates on a long line. Each plate has a flavor profile (the *query*). Instead of sampling every single ingredient from each plate (which would be slow), you group similar plates together—say all spicy ones, all sweet ones, etc.*  
For each group you share a small set of tasting sticks (*key‑value pairs*) that represent the common ingredients. Every plate in the group is compared to these shared sticks at once. The model then decides how much weight (attention) each plate should give to each ingredient.

**Key terms**

- **Query, Key, Value** – vectors that encode “what I’m looking for,” “where it might be,” and “the content” respectively.
- **Attention score** – a number that tells the model how relevant a value is to a query.
- **Softmax** – turns raw scores into probabilities that sum to 1.

By grouping queries, GQA lets the model process many similar questions together, cutting computation while still letting each question focus on the parts of the text that matter most.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
