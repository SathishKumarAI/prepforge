---
qid: ing_c4b5441f11__aws__local
question: Why Use Message Queues? — Message Queues | System Design
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 474
total_tokens: 707
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:47:43-05:00'
sources: []
---

**Why I use message queues in ML pipelines**

**Situation (S)** – In my last role at a fintech firm we built an end‑to‑end fraud‑detection pipeline. The ingestion layer received ~2 M events per day, but the model training service could only consume ~200 k events/hour without throttling. **Task (T)** – I had to decouple ingestion from training so that spikes in data volume didn’t kill latency or cost.

**Action (A)** – I introduced an Amazon SQS FIFO queue as a buffer and rewrote the training launcher to poll the queue with long‑polling. The queue stores messages durably, guarantees order for each customer ID, and scales automatically up to 120 000 messages per second. I added a small Lambda that triggers every 5 min, pulls up to 10 k records, writes them to an S3 data lake (using S3 Event Notifications), and kicks off an Amazon SageMaker training job.

- **AWS services**: SQS FIFO, Lambda, S3, SageMaker.  
- **Scalability**: Queue size grows with traffic; Lambda scales out automatically.  
- **Availability**: SQS is 99.9 % SLA; data in S3 is multi‑AZ.  
- **Cost**: ~$0.40 per million requests + storage cost, far cheaper than running a constantly busy training cluster.

**Result (R)** – Training jobs now start within 2 min of ingestion, reducing model drift by 35 %. The system handled peak traffic without over‑provisioning, saving ~30 % on compute costs.  

**Leadership Principles:**  
- **Ownership** – I took end‑to‑end responsibility for the pipeline’s reliability.  
- **Dive Deep & Deliver Results** – By instrumenting queue metrics and Lambda logs, I identified bottlenecks and iterated until latency hit sub‑5‑min targets.

A bar‑raiser would hear: a clear problem statement, measurable impact, deep technical justification, and evidence of learning from an initial spike that could have crippled the service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
