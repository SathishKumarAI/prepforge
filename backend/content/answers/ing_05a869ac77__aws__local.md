---
qid: ing_05a869ac77__aws__local
question: 'Explain: 2028 — Implementation Timeline | EU Artificial Intelligence Act'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 658
total_tokens: 891
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:38:26-05:00'
sources: []
---

**S – Situation (Customer Obsession)**  
In 2025 I led a cross‑functional team at **AWS Germany** to help a large EU fintech client adopt ML for credit scoring while staying compliant with the forthcoming EU AI Act of 2028. The client’s customers expected instant, fair decisions, but regulators demanded full transparency and auditability.

**T – Task (Ownership)**  
My goal: design an end‑to‑end pipeline that would be fully compliant by Q4 2028, achieve ≥95 % accuracy, and keep latency <50 ms for real‑time inference.

**A – Action (Dive Deep & Bias for Action)**  

| Component | AWS Service | Design Choice | Scalability/Availability | Cost Trade‑off |
|-----------|-------------|---------------|--------------------------|----------------|
| Data ingestion | **S3 + Glue** | Partitioned by region, lifecycle to Glacier | Auto‑scaling, S3 durability 99.999999999% | Low – pay per GB |
| Feature store | **FeatureStore (Athena & DynamoDB)** | Real‑time cache + batch layer | DynamoDB Global Tables for multi‑AZ | Medium – capacity units |
| Model training | **SageMaker** with **PCA/Spark EMR** | Auto‑ML + hyperparameter tuning | Spot instances + managed spot fleets | Low–medium (spot savings) |
| Model governance | **Sagemaker Model Monitor + Evidently** | Continuous drift detection, explainability via SHAP | Serverless; scales with traffic | Medium – per inference |
| Inference | **Lambda + API Gateway + CloudFront** | Edge caching for latency <50 ms | Global edge locations, auto‑scaling | Low – request‑based |

I drafted a **three‑phase rollout**:  
1. **2025–2026** – Build baseline pipeline, implement data protection (GDPR) and explainability modules.  
2. **2027** – Conduct internal compliance audit, integrate Evidently for model monitoring, set up governance board.  
3. **Q4 2028** – Final external audit, certify under the EU AI Act, and launch in production.

**R – Result (Deliver Results)**  

- Achieved **97 % accuracy** on post‑deployment tests versus a 90 % baseline.  
- Maintained <45 ms latency for 99.9 % of requests.  
- Reduced audit time from 3 months to 2 weeks, saving €400k in compliance costs.

**Learning & Bar‑raiser cues**

- **Ownership:** I owned the entire compliance timeline and drove cross‑team alignment.  
- **Dive Deep:** Detailed cost/latency trade‑offs were quantified and iterated with stakeholders.  
- **Quantified Impact:** Metrics on accuracy, latency, and cost savings demonstrate real value.  
- **Learning from Failure:** Early prototype exposed a drift issue; we pivoted to Evidently, preventing a potential regulatory penalty.

This experience showcases how I blend technical rigor with Amazon’s Leadership Principles to deliver customer‑centric, compliant ML solutions at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
