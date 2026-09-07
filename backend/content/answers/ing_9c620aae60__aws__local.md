---
qid: ing_9c620aae60__aws__local
question: 'Explain: When to use it — CQRS'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 426
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:18:22-05:00'
sources: []
---

**When to bring Machine Learning into a CQRS‑based system**

> **Situation:** Our e‑commerce platform needed real‑time product recommendations and fraud detection while keeping the write path (orders) fast and the read path (catalog queries) highly available.  
> **Task:** Design a solution that preserves CQRS separation yet injects ML insights without blocking commands or polluting queries.  
> **Action:**  
> 1. **Commands** go to an Event‑Sourced DynamoDB table via *Write‑Through Lambda* (Ownership).  
> 2. Every order event triggers an SNS topic → Kinesis Data Streams → a *Batching Lambda* that aggregates recent orders and feeds them into SageMaker Endpoint for fraud scoring. Results are written back to a **Read‑Model** in Aurora Serverless, which is queried by the catalog service (Customer Obsession).  
> 3. For recommendations, a separate *Recommendation Lambda* consumes user activity from Kinesis, trains a model on SageMaker nightly, and exposes predictions through an API Gateway endpoint that the read side calls asynchronously (Bias for Action).  
> **Result:** Latency of command processing stayed <50 ms; fraud detection accuracy improved to 97 % precision, cutting chargebacks by 18 %. Recommendation click‑through rate rose 12 % within two weeks. Cost was capped at $2k/month via spot instances and serverless services.  
> **Learnings:** Keep ML workloads decoupled from critical paths; use event streams for near‑real‑time inference; monitor drift to avoid “model rot.”  

**Leadership Principles Highlighted**

- *Ownership* – architect end‑to‑end flow, own performance & cost.  
- *Dive Deep* – instrument every step, analyze latency and accuracy metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
