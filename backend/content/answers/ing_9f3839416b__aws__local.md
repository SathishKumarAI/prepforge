---
qid: ing_9f3839416b__aws__local
question: 'Explain: Faster time to inbox — Resend \u00b7 Email for developers'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 502
total_tokens: 738
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:24:50-05:00'
sources: []
---

**Situation & Task**  
When we launched our “Resend Email” button for developers on the developer portal, the average time‑to‑inbox dropped from **8 minutes to 3 seconds**, yet users complained about a spike in duplicate deliveries and occasional failures during traffic surges. My goal was to build a highly available, cost‑effective system that guarantees *exactly‑once* delivery while keeping latency under 100 ms.

**Action (Design)**  
I architected an event‑driven pipeline:

| Component | AWS Service | Reasoning |
|-----------|-------------|-----------|
| **API Gateway + Lambda** | Serverless API | Zero‑provisioning, scales to 10k RPS. |
| **SQS FIFO** | Message queue | Guarantees order & deduplication (dedupe‑id = email+timestamp). |
| **Lambda Worker** | Email dispatcher | Stateless; can auto‑scale up to 200 workers. |
| **Amazon SES** | Email sending | Built‑in retries, high deliverability. |

The Lambda worker pulls a batch from SQS, constructs the raw MIME message and calls SES with `ConfigurationSet`. If SES returns a soft bounce or throttling error, the worker re‑queues the item with exponential back‑off. We added CloudWatch metrics (`RetryCount`, `SendLatency`) to trigger alerts.

**Result**  
- **Throughput:** 12 k emails/min (30 x current peak).  
- **Cost:** $0.00014 per email vs. $0.001 previously, a **86% reduction**.  
- **Reliability:** 99.999% success rate; duplicate sends dropped from 4% to <0.01%.  

**Leadership Principles Reflected**  
*Customer Obsession*: Reduced user wait time dramatically.  
*Ownership & Dive Deep*: Built end‑to‑end pipeline, tuned retries, and monitored metrics until SLA met.

**Bar‑raiser Takeaway**  
Listen for evidence of ownership (owning the full flow), depth (understanding SQS FIFO semantics), quantified impact (exact cost/latency numbers), and learning from failures (handling SES throttles).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
