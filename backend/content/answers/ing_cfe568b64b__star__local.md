---
qid: ing_cfe568b64b__star__local
question: Should we choose Consistency or Availability for our service?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 328
total_tokens: 565
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:25:00-05:00'
sources: []
---

**Situation:**  
At my last role, I was leading the redesign of a real‑time inventory API for an e‑commerce platform that served millions of users during flash sales. Our database was sharded across three regions to reduce latency, but we noticed frequent “stale” product counts when customers added items simultaneously.

**Task:**  
I had to decide whether to prioritize strong consistency (ensuring every read reflected the latest write) or higher availability (allowing reads even if some shards were temporarily unreachable). The goal was to keep checkout throughput above 5,000 QPS while keeping cart abandonment below 2%.

**Action:**  
I mapped out the trade‑offs using a CAP diagram and ran simulations. I implemented a hybrid approach: writes went through a quorum of two replicas (ensuring consistency for critical inventory updates), while reads used a “read‑your‑own‑writes” cache with a 50 ms staleness window. We added a background reconcile job that re‑synchronised out‑of‑sync shards during low‑traffic periods.

**Result:**  
Post‑deployment, checkout latency dropped to 120 ms on average and inventory accuracy improved by 99.7%. User churn fell from 3% to 1.8%, and we maintained >99.9% uptime across regions. I learned that a nuanced, data‑driven compromise often beats an absolute choice of consistency or availability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
