---
qid: ing_1ea62fb526__aws__local
question: 'Explain: Core Orchestration — Framework Selection Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 496
total_tokens: 725
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:36:43-05:00'
sources: []
---

**Situation / Task**  
At my last role I led a cross‑functional AI platform that had to ingest millions of sensor records per day, run inference pipelines and expose results through an API. The team needed a single orchestration framework that could scale from batch jobs to real‑time streaming while keeping costs under $5 M/yr.

**Action (Design)**  
I built a **Framework Selection Guide** anchored in the *Customer Obsession* and *Ownership* principles:

| Use‑case | Recommended Framework | Key AWS Services | Why |
|----------|----------------------|------------------|-----|
| Batch training & hyper‑parameter tuning | **AWS Step Functions + SageMaker Pipelines** | `StepFunctions`, `SageMaker`, `ECR` | Declarative state machine, built‑in retry/parallelism, pay‑per‑run cost control |
| Real‑time inference (latency < 200 ms) | **Amazon Kinesis Data Streams + Lambda + SageMaker Endpoint** | `Kinesis`, `Lambda`, `SageMaker Runtime` | Serverless scaling, auto‑provisioned shards, minimal operational overhead |
| Streaming feature store | **AWS Glue ETL + DynamoDB + Redshift Spectrum** | `Glue`, `DynamoDB`, `Redshift` | Incremental ETL, low‑latency key/value access, analytical querying |

I performed a *dive deep* cost/benefit analysis:  
- Step Functions saved ~30 % vs. custom orchestrator by eliminating idle EC2 hours.  
- Lambda + Kinesis cut inference latency 3× while keeping spend < $1.5 M/yr.

**Result**  
The platform processed 10 M records/day with a 99.9 % SLA, delivering insights to customers within 180 ms. The cost was 25 % below the initial budget and we reduced engineering hours by 40 %.  

**Bar‑raiser note** – I highlighted ownership (clear framework choice), quantified impact (latency & cost metrics), and learned from a failed pilot that used Airflow—its scheduler overhead made it unsuitable for real‑time use.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
