---
qid: ing_d85595b165__aws__local
question: 'Explain: Database sharding for data distribution and availability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 342
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:28:30-05:00'
sources: []
---

**Situation / Task**  
At my previous role I led a team that built a recommendation engine serving 10 M active users. Our single‑node database hit write saturation during flash sales and we lost availability for 12 % of the traffic.

**Action**  
I proposed **horizontal sharding** on the user ID to distribute writes across three Aurora MySQL replicas, each handling ~3 M users. We added a deterministic hash function (Cassandra‑style) so that read/write latency stayed < 20 ms. To keep *availability* we enabled cross‑region read replicas and set up an automated failover with Route 53 health checks. For *cost*, we used Aurora Serverless v2 for the shards to scale CPU down during off‑peak hours, saving ~30 % annually.

**Result**  
Post‑migration, write throughput increased from 1 kWPS to 8 kWPS, and our SLA improved from 90 % to >99.9 %. During a subsequent sale the system handled a 4× traffic spike without outages, and the average latency dropped from 350 ms to 45 ms.

**Reflection (Bar‑raiser focus)**  
I owned the architecture redesign, dove deep into sharding granularity, quantified impact with real metrics, and learned that cross‑region replicas can double write cost if not throttled—so we later added per‑shard rate limiting. This aligns with **Ownership**, **Dive Deep**, and **Deliver Results**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
