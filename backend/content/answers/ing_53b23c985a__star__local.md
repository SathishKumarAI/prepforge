---
qid: ing_53b23c985a__star__local
question: 'Explain: When to Choose Stateful Architecture — Stateful vs. Stateless
  Architecture'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 312
total_tokens: 551
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:15:28-05:00'
sources: []
---

**Situation:** At my last startup we were building a real‑time fraud detection service for credit card transactions. The incoming stream was ~10k events per second and the model had to produce a risk score within 50 ms.

**Task:** I had to decide whether to keep session state (e.g., user’s recent transaction history) in memory or rely on stateless inference so we could horizontally scale with Kubernetes.

**Action:** I benchmarked both designs. For the stateful version, we used Redis Streams to cache each card’s last 10 transactions and fed that into a LightGBM model. The stateless pipeline pulled raw data from Kafka and ran a pre‑trained neural net without any per‑user context. I added instrumentation to measure latency, throughput, and accuracy. We also simulated a 30 % traffic spike.

**Result:** The stateful approach achieved 92 % fraud detection recall versus 85 % for stateless, while keeping latency under 45 ms even during the spike. It required an extra 1.2 GB of RAM per pod and added complexity in cache invalidation, but the business value (≈$3M annual savings) justified it. I learned that stateful architecture is worth it when temporal patterns are critical and the performance hit can be absorbed by a small number of highly optimized nodes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
