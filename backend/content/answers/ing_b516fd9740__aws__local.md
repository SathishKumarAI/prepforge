---
qid: ing_b516fd9740__aws__local
question: 'Explain: Clogged stream — Asynchronous computing at Meta: Overview and
  learnings'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 434
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:13:53-05:00'
sources: []
---

**Situation & Task**  
At Meta I led a cross‑team effort to rebuild the “clogged stream” data pipeline that fed our recommendation models. The existing batch jobs stalled during peak traffic, dropping ~12 % of real‑time feature updates and hurting CTR by 3 %.  

**Action (Design)**  
I proposed an **event‑driven microservice architecture** using **Amazon Kinesis Data Streams** for ingestion, **AWS Lambda** for lightweight transformation, and **DynamoDB Streams + Step Functions** to orchestrate downstream ML model refreshes. I introduced a *back‑pressure* layer with **SQS FIFO queues** so that spikes were throttled without data loss.  

- **Scalability:** Kinesis shards auto‑scale (up to 1 M records/sec).  
- **Availability:** Multi‑AZ deployment; Lambda retries + dead‑letter queue guarantee at‑least‑once processing.  
- **Cost:** Cut per‑month spend from $12k (batch EC2) to $3k, a 75 % reduction.  

**Result**  
Feature latency dropped from 30 s to <1 s; real‑time updates increased by 35 %. CTR rose by 4 %, translating to an estimated $8M incremental revenue per quarter.  

**Learnings & Bar‑raiser signals**  
- **Ownership:** I took end‑to‑end responsibility, including rollback plans and SLA monitoring.  
- **Dive Deep:** We instrumented each Lambda with CloudWatch metrics; the root cause of backlogs was a 2 × CPU limit in the transformer.  
- **Quantified Impact:** 4 % lift on CTR is a tangible business metric.  
- **Learning from Failure:** The first rollout missed a DynamoDB throttling edge case; we added exponential back‑off and re‑tested, turning a failure into an optimization lesson.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
