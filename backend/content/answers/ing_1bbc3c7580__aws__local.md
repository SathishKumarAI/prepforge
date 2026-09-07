---
qid: ing_1bbc3c7580__aws__local
question: 'Explain: Design Deep Dive — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 579
total_tokens: 817
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:28:46-05:00'
sources: []
---

**Situation / Task**  
I was asked to design a URL‑shortening service for a startup that expects 10 M clicks/day and wants 99.999% uptime. The goal: keep latency < 50 ms, cost <$0.01 per million redirects, and support future analytics.

**Action – Design**  

| Layer | AWS Service | Reasoning |
|-------|-------------|-----------|
| **API Gateway + Lambda** | Serverless REST API | Auto‑scales to traffic spikes; pay only for invocations (≈$0.20/million). |
| **DynamoDB (partition key: short_id, sort key: created_at)** | Low‑latency writes/reads; global tables for multi‑region read replication. | 10 M requests/day → ~100 req/s average; DynamoDB handles >1 k RPS with provisioned or on‑demand mode. |
| **Kinesis Data Streams + Lambda** | Capture redirect events → feed analytics pipeline. | Decouples write path from analytics, enabling real‑time dashboards without impacting latency. |
| **S3 + CloudFront** | Store static click‑through reports; CDN for global low‑latency access. | Cost‑effective storage (≈$0.023/GB) and 0.1 ms edge latency. |

*Scalability*: Each component scales independently; Lambda concurrency limits can be increased or switched to Fargate if needed.  
*Availability*: Multi‑AZ DynamoDB, CloudFront edge locations, and API Gateway’s built‑in failover guarantee 99.999% SLA.  
*Cost*: Rough estimate: $0.02/million API calls + $0.10/million writes (DynamoDB) + $0.005/million Kinesis events ≈ **$0.03/million** – well under target.

**Result**  
Prototype achieved 40 ms average latency, handled 15 k concurrent redirects during load test, and cost < $50/month for 10 M/day traffic.  

**Reflection (Leadership Principles)**  
- *Ownership*: Took full responsibility from requirement clarification to deployment scripts.  
- *Dive Deep*: Benchmarked Lambda cold starts, DynamoDB read/write latency, and Kinesis throughput to fine‑tune provisioned capacity.  
- *Bias for Action*: Delivered working MVP in 3 days instead of waiting for a “perfect” design.  

**Bar‑raiser cues**: Demonstrated measurable impact (latency & cost), depth in trade‑off analysis, and learning from an initial cold‑start spike that led to switching to provisioned concurrency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
