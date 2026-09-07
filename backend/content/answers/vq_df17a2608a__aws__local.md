---
qid: vq_df17a2608a__aws__local
question: reflects. An example is, what will the temperature be tomorrow?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 450
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:18:57-05:00'
sources: []
---

**Situation & Task**  
At my last role I was asked by the product team to build a “weather‑prediction microservice” that could answer questions such as *“What will the temperature be tomorrow?”* in real time for our global users. The goal was to deliver an accurate, low‑latency API with 99.9 % uptime while keeping cost under $5k/month.

**Action (Technical Design)**  
I scoped the problem: ingest ~200 GB/day of historical weather data from NOAA, enrich it with satellite imagery, and train a time‑series model.  
- **Data pipeline:** S3 → Glue ETL → Athena for ad‑hoc analytics.  
- **Model training:** SageMaker Pipelines with an XGBoost estimator; hyper‑parameter tuning on spot instances to cut training cost 35 %.  
- **Serving:** SageMaker Endpoint (Multi‑model) behind API Gateway, auto‑scaling to 10 RPS, using Lambda for request routing.  
- **Observability:** CloudWatch metrics + Evidently experiments to A/B test new models.  

I added a caching layer (DynamoDB TTL) to serve the most recent forecast with <5 ms latency.

**Result**  
Within two months, the service achieved 92 % MAE‑improvement over the baseline NOAA model and handled 10k concurrent users with 99.95 % availability. Monthly spend stayed at $4.2k.  

**Leadership Principles**  
- **Customer Obsession:** Built a low‑latency API that met user expectations for instant answers.  
- **Ownership & Dive Deep:** Took full ownership of the data pipeline, model lifecycle, and cost optimization; iterated on performance metrics until the SLA was met.

**Bar‑raiser takeaways** – clear ownership, quantified impact (MAE, uptime, cost), deep technical dive, and learning loop from early A/B tests.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
