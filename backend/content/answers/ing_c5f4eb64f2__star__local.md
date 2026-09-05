---
qid: ing_c5f4eb64f2__star__local
question: 'Explain: Stage 3: Add Caching (100K-500K users) — Scalability | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 432
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:06:03-05:00'
sources: []
---

**Situation**  
I was leading the deployment of a recommendation engine for an e‑commerce platform that had just hit 350 k active users. The model served personalized product scores in real time, but during peak traffic we observed query latencies spiking to 1.2 s and the inference cluster throttling at 90 % CPU.

**Task**  
Reduce per‑request latency below 300 ms while keeping the cost of scaling compute under $10K/month, and ensure that cache staleness never exceeded 30 seconds for any user’s profile.

**Action**  
I introduced a two‑tier caching layer. First, I built a Redis cluster (sharded across three nodes) to store pre‑computed feature vectors keyed by `user_id:timestamp`. Each request first hit Redis; on miss we fetched from the PostgreSQL feature table and populated Redis with an LRU eviction policy. Second, I added a CDN edge cache for static model artifacts using Cloudflare Workers, so that inference code didn’t need to be pulled from S3 on every call. I instrumented Prometheus alerts to trigger automatic cache refreshes when a user’s activity log updated, keeping staleness within the target window. Finally, I used a canary rollout to compare latency and cost against the baseline.

**Result**  
Latency dropped from 1.2 s to 250 ms on average during peak hours, reducing CPU usage by 60 % and cutting inference‑cluster costs to $7K/month. The cache hit rate reached 92 %, and we maintained a staleness bound of 18 seconds. I learned that careful eviction policies combined with edge caching can turn a compute‑bound ML service into a near‑real‑time experience for hundreds of thousands of users.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
