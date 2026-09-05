---
qid: ing_83e223c1f6__star__local
question: 'Explain: Functional Programming — Imperative vs Functional vs Object-oriented
  Programming'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 332
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:57:03-05:00'
sources: []
---

**Situation** – At my previous company we built a real‑time recommendation engine in Python. The codebase was a mix of pandas dataframes and imperative loops that had become hard to test and scale as the feature set grew from 3 to over 20 columns.

**Task** – I was asked to refactor the preprocessing pipeline so it could run on Spark, be easily unit‑tested, and support future model updates without rewriting entire scripts.

**Action** – I rewrote the core logic in a functional style using `map`, `filter`, and higher‑order functions instead of for‑loops. For example, I replaced an imperative loop that normalized each column with a single `df.apply(lambda col: (col - col.mean())/col.std(), axis=0)` pipeline. I also introduced immutable data structures (`frozenset` for feature flags) and pure functions so state changes were explicit. To keep the code readable I wrapped these functions in lightweight classes following the “data‑class + function” pattern, preserving an object‑oriented interface where needed.

**Result** – The new pipeline ran 4× faster on a 5‑node Spark cluster, test coverage jumped from 45% to 78%, and we cut feature rollout time by 30 %. I learned that mixing functional purity with minimal OO structure can give the best of both worlds in ML engineering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
