---
qid: ing_93cd948877__aws__local
question: 'Explain: Scale Estimation — Design Notification Service | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 425
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:00:04-05:00'
sources: []
---

**Situation & Task**  
At my previous role I was asked to redesign the company’s push‑notification engine that served 15 M daily active users (DAU). The legacy system had a single Lambda tier that throttled at ~5k req/s, causing 30 % delivery delay during peak hours. My goal: scale it to 200 k req/s with <50 ms latency while keeping cost under $10K/month.

**Action & Design**  
I split the flow into *ingestion* and *delivery*.  

1. **Ingestion** – API Gateway → Amazon SQS (deduplication, FIFO) → AWS Step Functions orchestrating micro‑services.  
2. **Delivery** – Each message triggers an EC2 Auto Scaling group behind a Network Load Balancer; workers pull from SQS and push via Firebase/APNs.  
3. **Observability** – CloudWatch metrics + X-Ray traces to auto‑scale on 95th percentile latency.  

I performed a capacity estimate: each Lambda handled ~200 req/s, so to reach 200 k we need 1,000 Lambdas → $5K/month. Switching to EC2 with spot instances cut cost to ~$3K, while SQS offered unlimited throughput and durability.

**Result**  
Post‑deployment:  
- Peak throughput ↑ from 5k to 220k req/s (44×).  
- Delivery latency dropped to 35 ms avg (vs 120 ms).  
- Cost fell to $7.8K/month, a 34 % savings.  

**Reflection**  
I owned the end‑to‑end pipeline, dove deep into SQS limits and EC2 spot pricing, and iterated on auto‑scaling thresholds after observing real traffic patterns—an embodiment of *Ownership*, *Dive Deep*, and *Deliver Results*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
