---
qid: ing_d7e32e225c__aws__local
question: 'Explain: See also — Pattern: Event sourcing'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 512
total_tokens: 741
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:27:45-05:00'
sources: []
---

**Behavioral (STAR – Customer Obsession & Ownership)**  
*Situation*: At my previous role I led a recommendation engine for an e‑commerce platform that was experiencing stale models and slow rollback after model drift.  
*Task*: Build a system where every training data point, label change, or hyper‑parameter tweak could be replayed to regenerate any past model version without re‑ingesting raw logs.  
*Action*: I introduced **Event Sourcing**—each data ingestion, annotation, or model update became an immutable event stored in Amazon DynamoDB Streams. A Lambda stream consumer appended events to an Amazon Kinesis Data Firehose that landed in an S3 “event lake.” Using AWS Glue we cataloged the lake; a SageMaker Pipelines job replayed events on demand via an EMR cluster.  
*Result*: We cut model rollback time from 48 hrs to <10 min, increased model accuracy by 12 % (AUC 0.83→0.95), and reduced storage costs by 30 % because we stored only deltas instead of full datasets.  

**Technical Design & Trade‑offs**  
| Component | AWS Service | Reasoning |
|-----------|-------------|-----------|
| Immutable event store | DynamoDB + Streams | Low latency, ACID guarantees |
| Event ingestion pipeline | Kinesis Data Firehose → S3 | Scalable, cost‑effective for large volumes |
| Replay engine | SageMaker Pipelines on EMR | Parallel processing, easy to scale |
| Metadata catalog | Glue Data Catalog | Enables Athena queries & ML metadata search |

*Scalability*: DynamoDB handles 10⁶ writes/sec; Firehose scales automatically.  
*Availability*: Multi‑AZ DynamoDB + S3 provides 99.999 % durability.  
*Cost*: Event lake uses infrequent S3 storage classes (Glacier Deep Archive) after 30 days, keeping costs low while preserving auditability.

**Bar‑raiser cues**: I showcased full ownership of the end‑to‑end pipeline, dove deep into trade‑offs between event granularity and replay latency, quantified business impact, and iterated on failures—e.g., switching from EMR to SageMaker Processing when cost per training epoch exceeded $0.02.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
