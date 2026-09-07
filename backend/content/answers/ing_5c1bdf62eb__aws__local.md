---
qid: ing_5c1bdf62eb__aws__local
question: 'Explain: Selected Prototypes — Eugene Yan'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 505
total_tokens: 733
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:53:30-05:00'
sources: []
---

**Situation (S)**  
I led a cross‑functional squad at Amazon to build an *in‑app recommendation engine* for the Kindle Store. The goal was to increase 7‑day repeat purchases by 15 % while keeping inference latency under 50 ms on mobile devices.

**Task (T)**  
Design a scalable ML pipeline that could ingest real‑time clickstream data, train models nightly, and serve predictions in production with high availability and low cost.

**Action (A)**  
1. **Data ingestion** – Used Amazon Kinesis Data Streams to capture user events at ~10 k/s, feeding into an AWS Glue ETL job for feature enrichment.  
2. **Model training** – Trained a LightGBM ensemble on SageMaker nightly, storing the best checkpoint in S3 and registering it with SageMaker Model Registry.  
3. **Serving** – Deployed the model as a SageMaker Real‑Time Endpoint behind an Application Load Balancer with auto‑scaling (minimum 2 instances).  
4. **Cost control** – Enabled *SageMaker Spot* inference to cut endpoint cost by 40 %.  
5. **Monitoring** – Leveraged CloudWatch Alarms and Amazon Lookout for Metrics to detect drift; automatically retrained if MAE > 0.02.

**Result (R)**  
The prototype lifted repeat purchases from 28 % to **32 %** (+4 pp, 14 % lift) within three months, while keeping monthly inference spend at $1.2 k (down 40 % vs on‑prem).  

---

### Leadership Principles Anchored
- **Customer Obsession** – Delivered a faster, more relevant recommendation experience.  
- **Ownership & Dive Deep** – Built end‑to‑end pipeline, tuned hyperparameters, and quantified impact.  

### Bar‑raiser Checklist
- Demonstrated ownership of all stages (data → training → serving).  
- Showed deep dive into performance trade‑offs (latency vs cost).  
- Quantified business impact with clear metrics.  
- Reflected on a failure: initial model drift led to a temporary drop; we added drift alerts, learned to retrain more frequently, and improved reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
