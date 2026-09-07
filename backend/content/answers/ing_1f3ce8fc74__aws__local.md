---
qid: ing_1f3ce8fc74__aws__local
question: 'Explain: Use a Dead Letter Queue — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 445
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:37:50-05:00'
sources: []
---

**Situation & Task**  
At my last role I was asked to build a webhook‑delivery service that pushed event payloads to external partners. The partners’ endpoints were unreliable, and we needed to guarantee at least *once* delivery without blocking the main processing pipeline.

**Action – Design**  

1. **Event ingestion** – Lambda (or ECS Fargate) receives the event, validates it, and writes a record to an Amazon SQS standard queue (`WebhookTasks`).  
2. **Worker pool** – A fleet of EC2 instances behind an Auto Scaling Group poll `WebhookTasks`. Each worker pulls one message, sends the HTTP POST, and on success deletes the message.  
3. **Dead‑Letter Queue (DLQ)** – Configure a second SQS queue (`WebhookDLQ`) as the DLQ for `WebhookTasks` with a redrive policy of *maxReceiveCount=5*.  
4. **Retry logic** – If a webhook fails (network error, 5xx), the worker simply returns the message to the queue; after 5 failed attempts it lands in `WebhookDLQ`.  
5. **Monitoring & alerting** – CloudWatch metrics on DLQ depth trigger an SNS alarm that opens a ticket for manual investigation.

**Result**  
After deployment we saw *0%* critical‑failure rate for successful partners and only *1.2%* of messages hitting the DLQ, down from *8%* before redesign. Costs dropped 30 % by eliminating idle Lambda invocations, and latency improved from 4 s to 1.5 s on average.

**Leadership Principles**  
- **Ownership** – I took full responsibility for reliability and cost, iterating until SLA met.  
- **Dive Deep** – Analyzed CloudWatch traces, identified the redrive threshold as the bottleneck, and tuned it.  

**Bar‑raiser Takeaway**  
Showed measurable impact, a clear trade‑off (retry count vs. DLQ size), and learned that a simple SQS + DLQ pattern can replace complex retry frameworks with less operational overhead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
