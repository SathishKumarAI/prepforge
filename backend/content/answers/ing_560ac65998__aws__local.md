---
qid: ing_560ac65998__aws__local
question: 'Explain: Key Characteristics: — Batch vs Stream Processing - What''s the
  Difference?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 405
total_tokens: 640
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:40:37-05:00'
sources: []
---

**Situation & Task**  
In my last role I led the migration of a fraud‑detection pipeline from an on‑prem batch system to a real‑time architecture that needed to flag suspicious transactions within seconds while still keeping historical data for deep learning model training.

**Action**  
I first *dive deep* into the existing ETL: 24 h nightly jobs processed ~1 TB of logs, but latency was 23 h. I redesigned it using **Amazon Kinesis Data Streams** for ingestion, **Lambda** + **Glue** for lightweight stream‑to‑batch transformations, and **S3** as a durable landing zone. For batch analytics, I kept **EMR** (Spark) to run nightly re‑training jobs on the same S3 data. The split allowed near‑real‑time alerts via **SNS** while keeping cost‑effective batch processing for model updates.

**Result**  
Latency dropped from 23 h to <5 s for alerting, increasing fraud recovery by 18% in Q1. Batch re‑training time fell from 4 h to 45 min, cutting compute costs by 30%. The system now scales to 10⁶ events/sec with an SLO of 99.9% availability.

**Leadership Principles**  
- **Customer Obsession**: Faster alerts directly protect customers’ funds.  
- **Ownership & Bias for Action**: I owned the end‑to‑end redesign and launched it in under two sprints, iterating on failure modes (e.g., backpressure handling).  

The bar‑raiser will see my ownership, deep technical dive, quantified impact, and lessons learned from the initial latency failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
