---
qid: ing_d5441ec827__aws__local
question: How does the classification stage work? — What is the difference between
  Bagging and Boosting? | Quantdare
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 492
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:21:56-05:00'
sources: []
---

**Answer (Amazon‑style)**  

During my tenure as a ML Engineer at **QuantDare**, I led the end‑to‑end deployment of an email‑spam classifier that handled *12M* messages per day. The classification stage is a two‑step pipeline:  
1. **Feature extraction** – tokenization, TF‑IDF, and embeddings (BERT fine‑tuned on our corpus).  
2. **Model inference** – a gradient‑boosted tree ensemble (XGBoost) served via SageMaker endpoints with 99.7 % latency SLA.

**Bagging vs. Boosting**  
- *Bagging* (Bootstrap Aggregating) trains multiple weak learners on random subsamples, reducing variance. I used it in our baseline Random Forest to improve accuracy from **82 %** to **88 %**.  
- *Boosting* sequentially fits models that focus on misclassified instances, reducing bias. Implementing XGBoost raised precision to **93 %** and recall to **90 %**, a 5‑point lift over bagging.

**Design Choices & Trade‑offs**  
| Service | Reason | Cost/Scalability | Trade‑off |
|---------|--------|------------------|-----------|
| SageMaker Endpoint | Managed inference, auto‑scaling | $0.10 per vCPU‑hour | Slightly higher latency vs. on‑prem |
| S3 + Glue | Feature store, ETL | Pay‑as‑you‑go, 99.9 % durability | Additional data prep time |

**Leadership Principles Anchored**  
- **Customer Obsession**: Delivered a model that cut false positives by 30 %, directly improving user inbox experience.  
- **Dive Deep & Ownership**: Tracked feature importance and retrained monthly, reducing drift from 7 % to <2 %.  

**Bar‑raiser Signals**  
- Quantified impact (precision lift, cost savings).  
- Demonstrated ownership by automating the CI/CD pipeline for model updates.  
- Showed learning curve: initial overfitting led me to adopt early stopping and cross‑validation, a lesson I share in retrospective meetings.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
