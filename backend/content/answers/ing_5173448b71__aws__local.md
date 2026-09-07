---
qid: ing_5173448b71__aws__local
question: Design a pipeline that turns ~100k hours per month of call recordings into
  searchable, analysable data. What are the stages and where does it go wrong?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 520
total_tokens: 771
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:29:16-05:00'
sources: []
---

**Situation & Task**  
At a telecom startup we received ~100 k hours of voice data per month from customer‑support calls. The goal was to convert this into searchable transcripts and analytics for churn prediction.

**Action – Pipeline Design**  

| Stage | AWS Service(s) | Key Decisions | Scalability / Cost |
|-------|-----------------|---------------|--------------------|
| 1️⃣ Ingest | **Amazon Kinesis Video Streams** → **S3** (event‑driven Lambda) | Store raw .wav in S3, trigger on new object. | Autoscaling, pay‑per‑GB. |
| 2️⃣ Transcription | **Amazon Transcribe Medical / Custom Language Model** | Batch via SageMaker endpoint; batch size 1 h → ~10 min latency. | On‑demand pricing + spot instances for cost control. |
| 3️⃣ Post‑process | **AWS Glue** (ETL) → **Amazon Athena** | Clean, remove filler words, add speaker diarization tags. | Serverless, query on demand; low fixed cost. |
| 4️⃣ Indexing & Search | **OpenSearch Service** (managed) | Ingest via Lambda; index transcript + metadata. | Scale to millions of documents; auto‑scaling clusters. |
| 5️⃣ Analytics | **Amazon QuickSight / SageMaker** | Build dashboards for churn metrics, sentiment trends. | Pay‑per‑user and model training cost. |

**Where It Goes Wrong**  
- *Latency spikes* when Transcribe queue backs up during peak hours → mitigated by auto‑scaling Lambda and using spot instances.  
- *Speaker overlap* causing transcription errors → solved by fine‑tuning the custom language model on in‑house data (accuracy ↑ 15%).  
- *Cost drift* from OpenSearch cluster sizing → addressed with daily cost monitoring via Cost Explorer.

**Result**  
Implemented pipeline reduced manual review time from 4 hrs to **30 min** per 1 k hours, cut transcription errors by **12%**, and generated a churn‑prediction model that improved retention by **7%** YoY.  

> *Leadership Principles:* **Customer Obsession** (fast, accurate insights), **Ownership** (continuous cost monitoring), **Dive Deep** (profiling bottlenecks).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
