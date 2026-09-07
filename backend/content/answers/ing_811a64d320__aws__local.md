---
qid: ing_811a64d320__aws__local
question: 'Explain: Delivery Failures — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 491
total_tokens: 722
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:16:49-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led the migration of a legacy event‑driven pipeline that used on‑prem Kafka to an Amazon‑managed architecture. The system suffered frequent *delivery failures*—up to **12 %** of messages were lost during high traffic spikes, hurting downstream ML training pipelines.

**Action**  
I redesigned the flow with *Amazon SNS → SQS → Lambda → DynamoDB*, adding a *dead‑letter queue (DLQ)* and exponential back‑off retries. I introduced *AWS Step Functions* to orchestrate idempotent message processing and used **CloudWatch metrics** to surface failure rates in real time. For durability, I enabled *SQS FIFO queues* with exactly‑once delivery semantics and leveraged **Amazon Kinesis Data Streams** for high‑throughput ingestion where latency was critical.

- **Scalability:** Auto‑scaling Lambda and SQS queue depth handle 10× traffic spikes without manual intervention.  
- **Availability:** Multi‑AZ SQS + SNS guarantees 99.999 % availability; DLQ ensures no data loss.  
- **Cost:** Switching from on‑prem to managed services cut ops costs by **$28k/month** while maintaining performance.

**Result**  
Delivery failures dropped from **12 % → <0.2 %**, and the ML training pipeline saw a **35 % reduction in stale data**. The new design also reduced mean time to recovery (MTTR) from 4 hrs to under 30 min, meeting our SLA.

---

### Leadership Principles Anchored
- **Customer Obsession:** Ensured reliable data for ML models that power user‑facing recommendations.  
- **Ownership & Dive Deep:** Took full responsibility for the end‑to‑end flow and dissected failure logs to pinpoint root causes.

### What a Bar‑Raiser Looks For
- **Quantified Impact:** Concrete metrics (delivery rate, cost savings).  
- **Depth:** Detailed trade‑offs between FIFO vs standard queues, Lambda concurrency limits.  
- **Learning from Failure:** Iterative improvements based on DLQ analytics and Step Functions retries.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
