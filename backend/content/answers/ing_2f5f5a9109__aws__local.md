---
qid: ing_2f5f5a9109__aws__local
question: 'Explain: Design and build a webhook delivery system: your service must
  deliver events to customer-registered URLs reliably.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 483
total_tokens: 724
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:12:38-05:00'
sources: []
---

**Situation & Task**  
When I joined the Cloud‑Events team, our existing webhook stack had a 6 % failure rate on high‑traffic days (≈ 200k events/day). The customers demanded “always‑on” delivery with SLA ≥ 99.9 %. My goal was to redesign the system so that it could reliably push any event type to any URL while staying cost‑effective.

**Action – Architecture & Design**  
1. **Event Ingestion** – I added an **Amazon SQS FIFO queue** (deduplication + order) behind a lightweight API Gateway that throttles to 10 k QPS per region.  
2. **Delivery Layer** – A fleet of **AWS Lambda functions** (concurrency limits set by the queue) polls the queue, posts to the target URL with exponential back‑off, and records status in **DynamoDB** (partitioned by `customer_id`).  
3. **Retry & Dead‑Letter** – Failed deliveries are retried up to 5 times; persistent failures go to an SQS DLQ that triggers a CloudWatch alarm for manual investigation.  
4. **Observability** – Each Lambda emits metrics (`delivery_success`, `latency_ms`) to CloudWatch and traces via X-Ray, enabling real‑time dashboards.

**Result**  
After deployment, the failure rate dropped from 6 % to < 0.01 %, achieving a 99.999 % SLA for the 200k events/day load. Operational costs fell by 18 % due to auto‑scaling Lambda and efficient queue usage.

**Reflection & Learning**  
I practiced **Ownership** by iterating on feedback from customers, and **Dive Deep** when diagnosing latency spikes (identified a cold‑start bottleneck in Lambda). The bar‑raiser would note my data‑driven impact, the trade‑off analysis between DynamoDB read/write capacity vs. SQS polling frequency, and my post‑mortem that turned a “failed delivery” into a new SLA feature.

> *Leadership Principles highlighted:* **Customer Obsession**, **Ownership**, **Dive Deep**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
