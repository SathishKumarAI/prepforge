---
qid: ing_c88dae7f05__aws__local
question: 'Explain: multi region replication so when that stream'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 414
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:55:23-05:00'
sources: []
---

**Situation & Task**  
I led a fraud‑detection pipeline that ingested > 5 M events/sec from global payment terminals. When one region’s Kinesis stream hiccupped, downstream models stalled and the SLA (99.9 % latency) slipped to 1.2 s. I had to design a resilient, low‑cost multi‑region replication that kept model inference < 200 ms.

**Action**  
* **Ownership & Customer Obsession** – I mapped the entire data flow: Kinesis → Lambda → SageMaker Endpoint → DynamoDB.  
* **Dive Deep & Bias for Action** – Implemented cross‑region Kinesis “Firehose” delivery to a secondary region’s stream, using *AWS Global Accelerator* for low‑latency routing.  
* Added a **S3 event trigger** that copies raw events to a shared S3 bucket (bucket replication + lifecycle).  
* Deployed a **Lambda@Edge** cache layer that serves stale predictions with a 5 s grace period while the primary region recovers.  
* Cost‑optimized by using *Provisioned Concurrency* only on the inference Lambda, scaling it down during off‑peak hours.

**Result**  
After deployment:  
* Region‑failover time dropped from **>30 min** to **<2 min** (95 % reduction).  
* SLA restored to **99.97 %** with <200 ms latency.  
* Annual cost remained within 3 % of the baseline by leveraging spot instances for data prep.  

**Learnings** – Continuous monitoring and automated rollback scripts are essential; a single point of failure can cascade into customer impact, so “own” every hop in the pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
