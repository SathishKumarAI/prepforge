---
qid: ing_b385d2f980__aws__local
question: 'Explain: Intelligence at every point in the patient journey.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 550
total_tokens: 780
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:10:49-05:00'
sources: []
---

**Situation & Task**  
I led a cross‑functional team that built an end‑to‑end AI platform for a large health insurer. The goal was to embed predictive intelligence at every touchpoint of the patient journey—initial claim, care coordination, readmission risk, and post‑discharge follow‑up—to reduce adverse events by 15% within 12 months.

**Action**  
1. **Data Lake & Governance** – Deployed Amazon S3 with Lake Formation to ingest structured claims, EHR notes, wearables, and social determinants data (≈200 TB). Used Glue for cataloging and Athena for ad‑hoc analytics.  
2. **Feature Store** – Built a central feature store in DynamoDB + SageMaker Feature Store, caching real‑time vitals and static demographics with low‑latency reads (<5 ms).  
3. **Model Pipelines** – Leveraged SageMaker Pipelines to train XGBoost and PyTorch models for risk scoring (AUC 0.87) and reinforcement learning for care pathway optimization. Models auto‑retrained nightly using new data.  
4. **Inference & Edge** – Deployed models on SageMaker Endpoint with Lambda edge functions in Amazon CloudFront, enabling real‑time scoring within 200 ms for clinicians’ portals and patient apps.  
5. **Observability** – Integrated CloudWatch metrics + X-Ray traces to monitor latency, drift, and error rates; set up automated rollback if accuracy fell below 0.80.

**Result**  
- Reduced readmission rate from 12% to 9.8% (‑2.2 pp), saving $3.1M in avoided costs within 10 months.  
- Improved claim adjudication speed by 35%, cutting average processing time from 4.5 days to 2.9 days.  
- Scaled to support 2.5× patient volume with <0.8% service‑level degradation, keeping monthly AWS spend under $450K.

**Leadership Principles Highlighted**  
- **Customer Obsession**: Built models that directly improve patient outcomes and reduce financial burden.  
- **Ownership**: Took end‑to‑end responsibility for data quality, model performance, and operational reliability.  

**Bar‑raiser Takeaways**  
- Demonstrated *deep dive* into data pipelines, feature engineering, and latency optimization.  
- Quantified impact with real metrics tied to business goals.  
- Showed learning loop: automated retraining & drift detection mitigated performance decay.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
