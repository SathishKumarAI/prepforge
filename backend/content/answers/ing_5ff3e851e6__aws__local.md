---
qid: ing_5ff3e851e6__aws__local
question: 'Explain: Advantages and Disadvantages of Redundancy'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 443
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:02:56-05:00'
sources: []
---

**Situation & Task**  
At my last role I led the rollout of a new AI‑powered recommendation engine for an e‑commerce platform that served 5 M daily users. The business required *99.999% availability* to avoid revenue loss, so we had to decide how much redundancy was necessary.

**Action (Design)**  
I mapped the system into three tiers:  
1️⃣ **Model inference layer** – Lambda + SageMaker endpoint with an Auto Scaling group behind a Network Load Balancer.  
2️⃣ **Feature store** – DynamoDB with global tables and cross‑region replicas.  
3️⃣ **Data ingestion** – Kinesis Data Streams with mirrored shards in another AZ.

I implemented *dual‑AZ* and *cross‑region* replication (redundancy) for each tier, using AWS services that automatically fail over when an endpoint fails.

**Result (Metrics)**  
- **Availability** rose from 99.92% to 99.999% during a simulated AZ outage, keeping the recommendation engine online.  
- **Cost impact**: 18 % increase in spend, but revenue loss avoided was estimated at $2.5M per month—> ROI >10×.  
- **Latency** increased by only 12 ms on average due to cross‑region hops, still within the acceptable SLA of 200 ms.

**Reflection (Learning)**  
I discovered that *excessive* redundancy can inflate costs without proportional benefit; we trimmed unused replica shards after monitoring proved a single AZ was sufficient for non‑critical data.  

---

### Key Takeaways
- **Advantages**: higher availability, faster failover, fault isolation.  
- **Disadvantages**: increased cost, added operational complexity, potential latency spikes.

**Leadership Principles** – *Ownership* (I owned the trade‑off analysis), *Dive Deep* (probed metrics to justify redundancy levels).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
