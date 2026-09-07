---
qid: ing_454d8ba657__aws__local
question: 'Explain: Redirection Service — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 457
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:02:28-05:00'
sources: []
---

**Situation & Task**  
While leading a small data‑science team at my previous role, we were asked to build an internal “Redirection Service” that would shorten URLs for our marketing campaigns. The goal was to handle **10 M redirects/day**, keep latency < 50 ms, and allow real‑time analytics without over‑spending on infrastructure.

**Action – Design & AWS stack**  
I architected a *stateless* API using **API Gateway + Lambda** (Python) for the short‑URL creation endpoint.  
- **Storage:** DynamoDB with a composite key (`short_id → original_url`) and TTL of 90 days; provisioned on-demand to auto‑scale.  
- **Redirection path:** CloudFront edge functions resolve `short_id` by invoking a Lambda@Edge that queries DynamoDB, returning a 302 redirect.  
- **Analytics:** Each hit writes an event to Kinesis Data Streams → Lambda → Redshift Spectrum for real‑time reporting (≈5 k events/sec).  
I added **WAF** for bot protection and set up CloudWatch alarms to auto‑scale the Lambda concurrency.

**Result**  
The system served 12 M redirects in the first month with <45 ms average latency, costing <$1.50/day vs $10/day on a traditional EC2 solution. We achieved 99.999% availability through multi‑AZ DynamoDB and CloudFront caching.

**Reflection & Learning**  
I owned the end‑to‑end pipeline, diving deep into cost per request and latency trade‑offs (e.g., Lambda cold starts). When an early test hit a 500 error due to a mis‑typed partition key, I quickly added idempotency checks and updated the failure‑handling logic—turning a potential blocker into a learning loop.  

*Leadership Principles:* **Ownership** – drove delivery from concept to production; **Dive Deep** – tuned performance & cost by inspecting metrics at every layer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
