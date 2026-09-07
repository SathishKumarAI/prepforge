---
qid: ing_ef5a3f115d__aws__local
question: 'Explain: Company context — Figure Ai'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 569
total_tokens: 795
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:18:21-05:00'
sources: []
---

**Context & Problem**

At a mid‑size fintech (≈ 200 k users), we needed an *AI‑powered risk score* for every loan application in real time. The legacy rule engine was hard to maintain, lagged by ~2 s per request, and had a 12% false‑positive rate that hurt customer acquisition.

**Goal**

Build a scalable, low‑latency model serving pipeline that reduces latency to < 50 ms, cuts false positives by ≥ 30%, and allows continuous retraining with minimal downtime.

---

### Technical Solution

| Component | AWS Service(s) | Rationale |
|-----------|----------------|-----------|
| Data ingestion | **Kinesis Data Streams** + **Glue** | Handles 10k TPS and schema evolution. |
| Feature store | **SageMaker Feature Store** | Low‑latency, versioned features for inference. |
| Model training & registry | **SageMaker Studio / Pipelines** | CI/CD for ML, with automated hyperparameter tuning. |
| Real‑time inference | **SageMaker Endpoint (RealTimeInference)** behind **API Gateway + Lambda** | 50 ms SLA; auto‑scales by request volume. |
| Monitoring & retraining | **CloudWatch + SageMaker Model Monitor** | Detect drift, trigger retrain jobs automatically. |

*Scalability*: Auto‑scaling endpoints plus spot instances for training cut costs by ~35%.  
*Availability*: Multi‑AZ endpoints, 99.95 % SLA via warm containers.  
*Cost*: $0.025/GB‑hour for Kinesis + $0.20/hr per endpoint instance; total ops < $3k/month.

---

### Leadership Principles

- **Customer Obsession** – Reduced false positives by 32%, improving loan approval rates and customer trust.  
- **Ownership & Dive Deep** – Tracked every metric, iterated on feature importance until latency hit target.

### Result (STAR)

*Situation*: Legacy engine lagged 2 s per request.  
*Task*: Deliver sub‑50 ms inference with higher accuracy.  
*Action*: Deployed the above architecture; set up automated retraining.  
*Result*: Latency dropped to **42 ms**, false positives fell from **12% → 8.4%** (32% reduction). Monthly revenue impact: ~$1.2M incremental due to higher approvals.  

Bar‑raiser notes: Demonstrated ownership by owning the end‑to‑end pipeline, deep dive into feature engineering, quantified impact, and iterative learning from early latency spikes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
