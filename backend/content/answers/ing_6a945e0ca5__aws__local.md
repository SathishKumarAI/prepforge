---
qid: ing_6a945e0ca5__aws__local
question: 'Explain: Fault Tolerance — What is Distributed Caching? - by Ashish Pratap
  Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 424
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:25:28-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led a micro‑service that served real‑time product recommendations. The service hit > 30 k RPS and needed < 200 ms latency, but our in‑memory cache was a single Redis node—single point of failure and hot‑spot.

**Action (Design)**  
I architected a *distributed cache* with **Amazon ElastiCache for Redis** in a two‑AZ cluster, enabled automatic failover and cross‑region read replicas. I added a **cache‑aside pattern**: the service first queries Redis; on miss it falls back to DynamoDB and writes the result back to Redis. To keep data fresh I used *Redis Streams* for change‑data capture from DynamoDB Streams, pushing updates to all cache nodes.

I introduced **AWS CloudWatch Alarms** on eviction rates (> 5 % evictions triggered auto‑scaling of node capacity). Cost was kept under control by choosing the “burstable” node type and using **Reserved Instances** for steady traffic. Availability was 99.99 % (two AZs) and I ran chaos‑engineering tests with *Chaos Monkey* to confirm resilience.

**Result**  
Latency dropped from 1.4 s to **< 200 ms**, throughput doubled, and cache hit rate improved from 60 % to **92 %**—reducing DynamoDB read capacity units by 40 %. The system survived two spontaneous node failures without service interruption.

---

### Leadership Principles  
- **Customer Obsession** – Deliver instant responses for users.  
- **Ownership & Dive Deep** – Built and tested the fault‑tolerant cache end‑to‑end, quantified impact, and learned from failure scenarios.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
