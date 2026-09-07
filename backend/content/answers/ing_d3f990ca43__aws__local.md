---
qid: ing_d3f990ca43__aws__local
question: 'Explain: Um yeah, so we kind of were — Building Software Systems At Google
  and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 391
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:19:51-05:00'
sources: []
---

**Context (S)**  
I was a senior ML engineer on the *Google Search Personalization* team, tasked with moving a monolithic recommendation pipeline to a micro‑service architecture that could scale from millions of users to a global audience.

**Action (A)**  
1. **Own the end‑to‑end data flow** – I wrote a DAG in Airflow that extracted user signals from BigQuery, trained a LightGBM model on SageMaker, and pushed predictions into Cloud Pub/Sub.  
2. **Dive Deep into latency** – instrumented every stage with OpenTelemetry; discovered that the inference container was hitting 200 ms tail latency due to cold starts. I introduced *pre‑warming* via scheduled Lambda invocations (AWS) and switched from SageMaker endpoints to a lightweight TensorFlow Serving on ECS Fargate, cutting cold start time by **70%**.  
3. **Bias for Action & Invent & Simplify** – replaced the 10 GB feature store with DynamoDB Streams + Kinesis Data Analytics, eliminating a costly nightly ETL job and reducing cost from $12k/month to **$4k/month**.

**Result (R)**  
- Latency dropped from **350 ms** to **90 ms**, improving click‑through rate by **3.2%** (≈ 1.5M additional conversions per month).  
- Operational overhead decreased by **40%**, freeing the team to focus on higher‑value experiments.

---

### Amazon Leadership Principles Highlighted
- **Ownership** – Took full responsibility for the pipeline’s reliability and cost.  
- **Dive Deep** – Performed granular telemetry analysis to uncover bottlenecks.  

*Bar‑raiser cues:* ownership of metrics, depth of investigation, tangible ROI, and iterative learning from each deployment cycle.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
