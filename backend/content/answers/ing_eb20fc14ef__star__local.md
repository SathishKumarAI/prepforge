---
qid: ing_eb20fc14ef__star__local
question: 'Explain: Cardinality Examples'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 340
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:18:33-05:00'
sources: []
---

**Situation** – In my last role I was tasked with building a recommendation engine for an e‑commerce platform that had over 1 million users and 500,000 products. The click‑through rate (CTR) on the current model lagged behind industry benchmarks by roughly 15%.

**Task** – My goal was to redesign the feature engineering pipeline so that we could better capture user–item interactions, especially for sparse “cold‑start” cases where either the user or product had few historical signals.

**Action** – I started by mapping out the cardinality of each dimension: user IDs (1 M), product IDs (500 K), and categorical attributes like brand and category. To avoid exploding memory usage, I applied hashing tricks to compress high‑cardinality IDs into 16‑bit buckets, then used embedding layers in a neural network to learn dense representations. For items with fewer than five interactions, I leveraged side information (price, brand) and performed feature crossing via feature hashing. Throughout, I monitored GPU memory and training time, trading off slightly higher model complexity for a manageable 2 GB RAM footprint.

**Result** – The new model achieved a 23% lift in CTR and reduced the cold‑start failure rate by 40%. It also cut inference latency from 120 ms to 80 ms per request. I learned that carefully managing cardinality—through hashing, embeddings, and feature crossing—is key to scaling ML pipelines while keeping resource usage under control.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
