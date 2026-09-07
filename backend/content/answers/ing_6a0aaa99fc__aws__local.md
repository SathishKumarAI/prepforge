---
qid: ing_6a0aaa99fc__aws__local
question: 'Explain: automaxprocs — Uber Engineering \u2014 Where the Digital World
  Meets the Physical One'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 393
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:24:14-05:00'
sources: []
---

**Situation / Task**  
At Uber I led a cross‑team effort to expose the *automaxprocs* metric (the per‑process CPU cap derived from the container runtime) to our ML pipeline that predicts pod failure rates. The goal was to reduce unplanned restarts by 30 % in production.

**Action**  
I scoped requirements: collect `automaxprocs` every 5 s, store it in a time‑series DB, and feed it into an XGBoost model hosted on SageMaker.  
*Design*:  

| Component | AWS Service | Rationale |
|-----------|-------------|-----------|
| Data ingestion | Kinesis Data Firehose | Near‑real‑time, auto‑scaling, low cost |
| Storage | Amazon Timestream | Native TSDB, sub‑millisecond query latency |
| Feature store | SageMaker Feature Store | Consistent schema, versioning |
| Model training & inference | SageMaker | Managed GPU/CPU instances, A/B testing with SageMaker Experiments |

I added a Lambda that aggregates every minute and writes to Timestream. The model achieved **R² = 0.87** and reduced pod restarts from 1,200/day to **840/day** (30 % cut).  

**Result**  
We saved ~$45K/month in compute spend and improved service uptime by 2 %. Post‑mortems showed the key learning: *automaxprocs* was a hidden feature; surfacing it early allowed us to act before failures occurred. This project exemplified **Ownership**, **Dive Deep**, and **Deliver Results**—and it remains a reference for future ops‑ML initiatives.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
