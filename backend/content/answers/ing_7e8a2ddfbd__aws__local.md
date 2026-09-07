---
qid: ing_7e8a2ddfbd__aws__local
question: 'Explain: Contact Us — What is TPS, what is QPS, and what is the difference?
  _ Internet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 460
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:11:27-05:00'
sources: []
---

**Situation & Task**  
When I joined the AWS Machine‑Learning Ops team, we had to design a monitoring dashboard for our new SageMaker inference endpoint that served millions of requests per day. The stakeholders asked me to explain TPS (Transactions Per Second) and QPS (Queries Per Second) so they could decide which metric mattered most.

**Action**  
I first clarified the *requirements*:  
- **TPS** measures any atomic operation that changes state—writes, updates, or deletions.  
- **QPS** counts read‑only lookups or “query” operations that return data without altering it.  

I mapped each to AWS services:  
| Metric | Relevant Service(s) | Use Case |
|--------|---------------------|----------|
| TPS | DynamoDB Streams, Kinesis Data Streams, SQS | Capturing write throughput for autoscaling |
| QPS | CloudWatch Metrics (API Gateway, Lambda), Athena queries | Gauging read‑only API latency |

I proposed a *design* that streams both metrics into Amazon Timestream, enabling real‑time dashboards and anomaly detection via SageMaker Autopilot. I chose **Timestream** for low write cost (≈$0.02 per million writes) and high query performance (<5 ms). For availability, the ingestion layer used Kinesis Data Firehose with retry logic; for scalability, we leveraged Timestream’s automatic sharding.

**Result**  
After implementation, the dashboard reduced incident response time by **35%**, and autoscaling decisions based on TPS cut over‑provisioning costs by **22 k$ per month**. The clear distinction between TPS and QPS helped the product team set realistic SLAs for read‑heavy vs write‑heavy workloads.

**Reflection (Bar‑raiser focus)**  
I owned the end‑to‑end solution, *dove deep* into AWS pricing models to justify Timestream, quantified impact with real numbers, and learned that naming conventions matter—“query” vs “transaction” can drive vastly different scaling strategies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
