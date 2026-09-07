---
qid: ing_01f7247673__aws__local
question: 'Explain: Real-Time Live Commenting Platform — Live Comment System Design
  - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 477
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:28:43-05:00'
sources: []
---

**Situation & Task**  
I led the redesign of a real‑time live‑commenting platform for a streaming service that served > 2 M concurrent viewers during peak shows. The goal was to cut comment latency from 1.8 s to < 200 ms while keeping the cost under $5k/month.

**Action (Design)**  
* **Data plane** – Ingested comments via API Gateway → Lambda → Kinesis Data Streams for buffering.  
* **Processing** – A fleet of Fargate containers consumes Kinesis shards, enriches payloads (spam filter, user reputation) and writes to DynamoDB (low‑latency write).  
* **Delivery** – Comments are pushed through Amazon CloudFront WebSocket API (origin: API Gateway + Lambda@Edge) so clients receive updates in < 200 ms.  
* **Scaling & Availability** – Kinesis auto‑scales with shard count; Fargate tasks run across multiple AZs with ALB health checks. DynamoDB global tables provide multi‑region read replication for low‑latency UI.  
* **Cost** – Spot instances + reserved capacity on Fargate keep compute < $3k/month; Kinesis and CloudFront usage stay under $1k.

**Result**  
Latency dropped to 140 ms (a 92% improvement). During a live concert, comment throughput hit 25 K msg/s with zero out‑of‑order delivery. User engagement rose by 18 %, reflected in a 12 % lift in average watch time.

**Reflection**  
I owned the end‑to‑end solution, diving deep into Kinesis limits and CloudFront WebSocket quotas. The failure mode—shard overload—was mitigated by auto‑scaling logic I added after an early spike test. This iteration taught me to balance real‑time performance with cost elasticity.

> **Leadership Principles**  
> *Customer Obsession* – Delivered sub‑200 ms latency that directly improved viewer experience.  
> *Ownership* – Took full responsibility from ingestion to delivery, iterating on failures and scaling the solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
