---
qid: ing_fa6389c8fc__aws__local
question: 'Explain: Consumer Groups and Shared Subscriptions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 477
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:44:36-05:00'
sources: []
---

**Situation & Task**  
When I joined the data‑platform team, our ML model training pipeline was bottlenecked by a single Spark job that pulled all raw events from Kafka every day. The latency hit production inference (≈ 8 min per batch) and we risked missing time‑sensitive features.

**Action**  
I introduced **consumer groups** to parallelize the ingestion, letting each group read a distinct partition slice. For downstream “shared subscription” use‑cases (e.g., anomaly detection and feature store), I set up a *fan‑out* architecture: every event is published once but consumed by two independent consumer groups—one feeding the real‑time detector, another populating the feature table.  
- **AWS services**: Amazon MSK for Kafka, AWS Lambda for lightweight consumers, S3 + Athena for batch storage, and Kinesis Data Analytics for stream‑to‑table transforms.  
- I added **offset checkpointing** in DynamoDB to guarantee at‑least‑once delivery while preventing duplicate processing.  
- To keep costs low, I leveraged **on‑demand MSK brokers** during peak hours and reserved instances otherwise, achieving a 35 % reduction in broker spend.

**Result**  
Latency dropped from 8 min to < 2 min per batch (×4 speedup). Model training now receives fresh data with < 5 s delay, improving inference accuracy by 12 %. The architecture supports elastic scaling—partition count can grow linearly without code changes.  

**Leadership Principles**  
- **Customer Obsession**: Faster insights for downstream ML services.  
- **Ownership & Dive Deep**: I dissected the pipeline, identified partition skew, and engineered a fault‑tolerant fan‑out system that scales with data volume.

**Bar‑raiser notes**  
I demonstrated ownership by redesigning end‑to‑end flow, quantified impact (latency & cost), and learned from earlier attempts where naive scaling caused duplicate records.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
