---
qid: ing_a870948eea__aws__local
question: 'Explain: Comparative eval cadence — Customer Distillation Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 421
total_tokens: 650
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:47:49-05:00'
sources: []
---

**Situation & Task**  
At my previous company we launched a *Customer‑Distillation* pipeline that extracted intent from chat logs for an AI product. The team needed a **comparative evaluation cadence** to surface insights, validate model shifts and keep the feature shipper happy.

**Action**  
I owned the cadence design:  
1. **Data Ingestion** – Kinesis Data Streams fed raw messages into Lambda, which batched 10 k records every minute into S3 (object lifecycle → Glacier).  
2. **Feature Store** – SageMaker Feature Store held user‑level embeddings; we refreshed it nightly using a Glue job that compared current vs baseline vectors via cosine similarity.  
3. **Evaluation Engine** – A Step Functions workflow triggered on a schedule, running an Athena query that produced a 10‑point *distillation score* (precision, recall, drift). Results were visualized in QuickSight dashboards; any score drop > 5% sent a Slack alert.  

I set the cadence to **daily for production data** and **weekly for model retraining**. The pipeline cut evaluation time from 2 days to < 4 hours and reduced false‑positive alerts by 37%.

**Result**  
Customer churn dropped from 8.5% → 6.3% within three months, a 26% relative improvement. The team now deploys new models with confidence, and the pipeline scales horizontally across regions with cost ≈$120/month.

**Leadership Principles**  
- **Ownership** – I drove the full life‑cycle from ingestion to alerting.  
- **Dive Deep** – Built custom similarity metrics; iterated on thresholds based on real user data.  

*Bar‑raiser takeaway*: Showed ownership, deep metric analysis, and quantified business impact while learning from an initial over‑aggressive alert threshold that was fine‑tuned.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
