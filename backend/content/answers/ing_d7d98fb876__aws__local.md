---
qid: ing_d7d98fb876__aws__local
question: 'Explain: Write Path — System Design Interview Cheat Sheet - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 433
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:27:35-05:00'
sources: []
---

**Situation / Task**  
When I joined a startup building an ML‑pipeline, the team could not keep up with real‑time data ingestion and model training. The product owner demanded a *write path* that accepted millions of events per day, persisted them durably, and triggered downstream jobs without manual intervention.

**Action (Design)**  
1. **Ingestion Layer** – Amazon Kinesis Data Streams for low‑latency buffering; shard count tuned to 5 M events/sec (≈3 GB/day).  
2. **Durable Store** – AWS Glue Catalog + Amazon S3 (partitioned by day) as the “data lake.” Glue jobs run on-demand, auto‑scaling via AWS Batch.  
3. **Orchestration** – Amazon EventBridge to emit a *DataReady* event when each partition lands in S3; triggers an AWS Step Functions workflow that starts an Amazon SageMaker training job (managed spot instances).  
4. **Observability** – CloudWatch metrics + X-Ray tracing across Kinesis, Glue, and Step Functions; alerts on >10 % latency spike.

**Result**  
- Reduced ingestion latency from 30 min to <5 s per event.  
- Trained models every 12 h instead of weekly, boosting feature freshness by 70%.  
- Cost‑effective: $0.02 per 1 M events, total monthly spend dropped 35% vs. on‑prem solution.

**Reflection (Bar‑raiser)**  
I owned the end‑to‑end flow, dove deep into shard sizing and batch job tuning, quantified impact in latency & cost, and learned that early integration of EventBridge eliminates manual triggers—an iterated failure turned best practice.  

> **Leadership Principles:** *Ownership*, *Dive Deep*, *Deliver Results*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
