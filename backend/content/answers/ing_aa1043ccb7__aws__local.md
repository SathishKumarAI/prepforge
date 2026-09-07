---
qid: ing_aa1043ccb7__aws__local
question: 'Explain: to list some sort of functional requirements'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 467
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:50:48-05:00'
sources: []
---

**Situation & Task**  
In my last role I led a project to build an on‑premises fraud detection engine for a payment gateway that processed **$3 B/yr** in transactions. The functional requirements were: (1) ingest real‑time transaction streams, (2) score each event within 50 ms, (3) provide a daily model retrain pipeline, and (4) expose an API for risk scores to downstream services.

**Action**  
I applied **Customer Obsession** by interviewing merchants to surface pain points—latency and false positives were top concerns. I then used **Dive Deep** to design the architecture:

| Requirement | AWS Service | Rationale |
|-------------|-------------|-----------|
| Stream ingestion | Amazon Kinesis Data Streams | 1 M records/s, low latency |
| Real‑time scoring | Amazon SageMaker Edge Manager + Lambda | 50 ms inference on edge nodes |
| Model retraining | SageMaker Pipelines + Glue ETL | Automated nightly job, CI/CD for models |
| API exposure | API Gateway + Lambda | Serverless, auto‑scales to 10k RPS |

I introduced a **Feature Store** (S3 + DynamoDB) to keep training data consistent. The pipeline cost was capped at **$1.2 M/yr**, 30% below the legacy on‑prem spend.

**Result**  
After launch, merchants reported a **35 % drop in false positives** and transaction latency improved from **120 ms to 48 ms**. Our fraud detection accuracy increased by **12 pp** (from 94.1 % to 106.3 %) as measured against a hold‑out test set, cutting chargeback losses by **$450K/yr**.

**Learning & Bar‑raiser Insight**  
I owned the entire stack, iterating on data quality and model drift monitoring—key for sustaining impact. I documented failure modes (e.g., model concept drift) and built automated alerts, demonstrating ownership and continuous improvement expected of a bar‑raiser.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
