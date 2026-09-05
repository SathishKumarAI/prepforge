---
qid: ing_289ef28937__star__local
question: 'Explain: Week 7-8: Dynamic Programming & Optimization'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 332
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:49:36-05:00'
sources: []
---

**Situation** – In my second semester project I was tasked with building a real‑time recommendation engine for an e‑commerce site. The dataset had over 500,000 user–item interactions and we needed to compute personalized item scores within 100 ms per request.

**Task** – My goal was to design a lightweight algorithm that could learn optimal weights for each feature (price, rating, recency) while minimizing latency and memory usage.

**Action** – I applied dynamic programming to pre‑compute the best weight combinations for every user segment. First, I discretized continuous features into 10 bins and built a DP table where `dp[i][j]` stored the minimal loss after considering the first `i` features with `j` active weights. By iterating over feature subsets, I avoided redundant calculations that would have exploded combinatorially. I then used L1 regularization in the cost function to enforce sparsity, which allowed us to prune the table aggressively. Finally, I serialized the DP results into a hash map and accessed them via a fast lookup during inference.

**Result** – The engine’s response time dropped from 450 ms to 75 ms, and recommendation accuracy (measured by NDCG@10) improved by 12 %. I learned that carefully structuring state in DP can turn an otherwise NP‑hard optimization into a practical solution for production ML systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
