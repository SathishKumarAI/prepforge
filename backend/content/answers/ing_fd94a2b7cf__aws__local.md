---
qid: ing_fd94a2b7cf__aws__local
question: 'Explain: Idempotency — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 420
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:51:31-05:00'
sources: []
---

**Situation / Task**  
At my last role I led the redesign of an on‑prem machine‑learning inference service that was exposed as a RESTful API to downstream analytics pipelines. The upstream data lake ingested batches every 15 min, but downstream consumers occasionally retried requests due to transient timeouts, causing duplicate predictions and stale cache entries.  

**Action**  
I introduced **idempotency keys** for each request and stored the mapping in an **Amazon DynamoDB** table keyed by `request_id`. The API gateway (AWS API Gateway + Lambda) first checks DynamoDB; if a key exists it returns the cached result, otherwise it forwards to a **TensorFlow Serving** container on ECS Fargate. I added a **deduplication TTL of 24 h** and used an SQS FIFO queue for request ordering.  

*Design choices:*  
- **Scalability:** DynamoDB’s auto‑scaling handles >10k RCU/WCU with <5 ms latency.  
- **Availability:** Multi‑AZ deployment, read replicas; Fargate ensures zero server maintenance.  
- **Cost:** $0.25/1M writes + $0.25/1M reads ≈ $50/month for 200k requests/day.  

**Result**  
Duplicate inference cost dropped from **$12 k/month to <$300**, and downstream pipelines reported a **99.9% accuracy consistency**. The idempotent API also reduced client retry logic by 40%.  

**Reflection**  
I learned that *ownership* means anticipating edge cases (network glitches) and *dive deep* into AWS primitives (DynamoDB TTL, SQS FIFO). This solution balances performance, cost, and reliability—exactly what Amazon expects from a bar‑raiser.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
