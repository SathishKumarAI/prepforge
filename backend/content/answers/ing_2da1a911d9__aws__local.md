---
qid: ing_2da1a911d9__aws__local
question: 'Explain: Candidate — Leaderboard System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 481
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:08:26-05:00'
sources: []
---

**Situation & Task**  
While leading the ML Ops team at my last company, we had to build a real‑time leaderboard for a global e‑sports platform that served 4 M concurrent users during peak tournaments. The goal was to deliver sub‑200 ms latency and 99.9% availability while keeping costs under $15k/month.

**Action (Design)**  
I architected an event‑driven pipeline using **Amazon Kinesis Data Streams** for ingest, **AWS Lambda** for transformation, and a **Redis‑compatible ElastiCache** cluster as the in‑memory store for ranking state. For persistence I used **DynamoDB Global Tables** to sync leaderboards across regions with eventual consistency. A **CloudFront CDN** cached static leaderboard pages; API Gateway routed read requests to a **Lambda@Edge** function that fetched from Redis, guaranteeing low latency.

Key trade‑offs:  
- *Scalability*: Kinesis shards auto‑scaled to 10k events/sec; ElastiCache handled 1M ops/sec with 3‑node cluster.  
- *Availability*: Multi‑AZ deployments and DynamoDB replicas ensured 99.95% uptime.  
- *Cost*: Spot instances for Lambda reserved concurrency kept monthly spend $12k, below target.

**Result**  
During the championship season we saw a 35 % reduction in page load time (from 350 ms to 220 ms) and a 40 % drop in backend errors. The system handled a peak of 6 M concurrent users without throttling, meeting our SLA.

---

### Leadership Principles Highlighted  
- **Customer Obsession** – We measured real‑world latency and error rates from the user perspective.  
- **Ownership & Dive Deep** – I led cross‑functional squads, debugged production spikes, and iterated on shard sizing until performance met metrics.  

Bar‑raisers look for ownership (I drove all components), depth (detailed trade‑off analysis), quantified impact (latency & error reductions), and lessons learned (shard auto‑scaling tuned post‑launch).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
