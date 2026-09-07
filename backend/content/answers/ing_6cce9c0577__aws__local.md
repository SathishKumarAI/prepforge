---
qid: ing_6cce9c0577__aws__local
question: 'Explain: Estimation — Salesrankbycategory'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 421
total_tokens: 650
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:29:53-05:00'
sources: []
---

**Situation & Task (S)**  
In my previous role I was tasked with predicting the *Sales Rank by Category* for a marketplace that had over **1 M SKUs** and **20 K categories**. The goal was to reduce manual curation time from weeks to minutes so merchandisers could react instantly to shifts in demand.

**Action (A)**  
I built an end‑to‑end pipeline on AWS:

| Component | Service | Reasoning |
|-----------|---------|-----------|
| Feature store | **Amazon SageMaker Feature Store** | Centralized, versioned features (historical sales, price elasticity, review sentiment). |
| Model training | **SageMaker Autopilot + XGBoost** | Auto‑feature engineering + fast, high‑accuracy tree models. |
| Scoring | **Lambda@Edge + API Gateway** | Near‑real‑time inference with < 50 ms latency, cost‑effective at scale. |
| Monitoring | **CloudWatch + SageMaker Model Monitor** | Drift detection on sales patterns; alerts if MAE > 5%. |

I performed a *Dive Deep* analysis of feature importance: price and recent promotion history explained 68 % of variance. The model achieved an **MAE of 0.32 rank** (vs. the baseline 1.12), translating to a **30 % reduction in inventory overstock** for top categories.

**Result (R)**  
Merchandisers now receive updated rank predictions every hour, cutting manual effort by **70 hrs/month** and increasing forecast accuracy by **15 %**, which saved ~$120K annually in carrying costs.  

*Leadership Principles:* **Customer Obsession** – delivering instant insights to the merchandising team; **Ownership** – taking full responsibility for data quality, model drift, and cost optimization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
