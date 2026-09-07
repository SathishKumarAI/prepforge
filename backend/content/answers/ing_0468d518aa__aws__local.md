---
qid: ing_0468d518aa__aws__local
question: 'Explain: Capacity Planning — Live Comment System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 620
total_tokens: 852
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:34:48-05:00'
sources: []
---

**Situation & Task (S)**  
In my last role I was asked to build a *live comment system* for a global video‑streaming platform that needed to support 10 M concurrent viewers and 5 k comments per second during peak launches. The goal was to keep latency < 200 ms, cost ≤ $0.50/day, and ensure eventual consistency across regions.

**Action (A)**  
1. **Requirements & Trade‑offs** – I clarified that writes could be idempotent, reads were read‑heavy (100× writes), and we needed real‑time ordering per video.  
2. **Design** –  
   * **Front‑end**: API Gateway + Lambda for throttling; Edge caching with CloudFront to reduce latency.  
   * **Write Path**: DynamoDB Global Tables (partitioned by `video_id`) for low‑latency writes and cross‑region replication. Each comment gets a monotonically increasing `seq_num` generated via an atomic counter in an SQS FIFO queue, ensuring order without a single point of contention.  
   * **Read Path**: Read‑replica Aurora Serverless PostgreSQL for complex queries (e.g., user mentions). A Kinesis Data Stream captures every write and feeds a Lambda that updates the read replica asynchronously.  
   * **Scaling** – Auto‑scaling on DynamoDB throughput, Aurora Serverless scaling based on CPU usage, and SQS visibility timeout tuned to 30 s to prevent duplicate processing.  
3. **Cost & Availability** – Using AWS Managed services removed ops overhead; multi‑AZ deployment gave 99.999% availability. Estimated cost: $0.38/day (DynamoDB + Aurora + Lambda + Kinesis).  

**Result (R)**  
During the launch, we handled 7 k comments/s with < 150 ms average latency, a 30 % reduction over the previous monolithic system. The system sustained 25× traffic spikes without degradation and cost remained under budget. Post‑mortem revealed that using SQS FIFO for sequencing eliminated race conditions; if we had used DynamoDB alone, we'd have faced write contention at peak.

---

### Leadership Principles Highlighted  
- **Ownership** – I drove the end‑to‑end solution, from requirement gathering to post‑launch analysis.  
- **Dive Deep** – Selected data structures (FIFO queue + atomic counters), tuned timeouts, and performed cost/latency trade‑offs based on real metrics.  

### What a Bar‑raiser Looks For  
1. **Quantified Impact** – 30 % latency improvement, $0.38/day vs $0.50 target.  
2. **Depth & Technical Rigor** – Clear justification of service choices and scaling logic.  
3. **Learning from Failure** – Acknowledged potential race conditions and mitigated them proactively.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
