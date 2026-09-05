---
qid: ing_fa35079b07__star__local
question: 'Explain: You may also like — What Is Cardinality in a Database? - SolarWinds
  Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 309
total_tokens: 555
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:49:00-05:00'
sources: []
---

**Situation:** While building a recommendation engine for an e‑commerce platform, our training data had a “product_category” field with over 12,000 distinct values—much higher than the typical 100–200 we’d seen in other projects.

**Task:** I needed to reduce feature dimensionality without losing predictive power so that our gradient‑boosted tree model would train within the allotted two‑hour window and stay under the memory budget.

**Action:** First, I calculated cardinality per column using a Spark DataFrame `describe()` and identified high‑cardinality columns. For “product_category,” I applied frequency encoding: replaced each category with its occurrence count normalized by total rows. Then I added an interaction feature that combined the encoded value with the user’s purchase history length, capturing both popularity and recency. To keep the model interpretable, I limited transformations to 50 features and used `xgboost`’s built‑in handling of sparse data.

**Result:** Training time dropped from 3.5 hours to 1.2 hours, memory usage fell by 35%, and accuracy (AUC) improved from 0.72 to 0.78. I learned that understanding cardinality lets you choose the right encoding strategy—frequency or target encoding—to balance speed, resource constraints, and predictive performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
