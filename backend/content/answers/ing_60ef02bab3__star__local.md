---
qid: ing_60ef02bab3__star__local
question: 'Explain: Sort Search Results — Searchquery'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 327
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:41:58-05:00'
sources: []
---

**Situation**  
At a fintech startup, our product‑search feature was returning results in the order they appeared in the database. Users complained that relevant loan offers were buried behind older listings, and we saw a 12 % drop in click‑through rate over two weeks.

**Task**  
I had to build an ML‑based ranking model that could reorder search results by relevance while keeping latency under 200 ms for mobile users.

**Action**  
First I extracted query logs (≈2M queries/day) and labeled a training set using clicks as implicit feedback. I engineered features such as TF‑IDF of the loan description, user profile similarity, and real‑time price–risk score from our risk engine. Using XGBoost with early stopping on a 70/15/15 split, I trained a pairwise ranking model (LambdaRank). To meet latency, I distilled the boosted trees into a lightweight neural network (3 hidden layers, 128 units) and deployed it via TensorFlow Lite on edge servers. I also added a cache layer for top‑10 results per query to reduce computation.

**Result**  
After rollout, click‑through rate rose by 18 % and conversion increased 9 %. The ranking latency stayed below 150 ms for 95 % of requests. I learned that combining domain signals with implicit feedback in a pairwise framework can deliver both relevance gains and performance at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
