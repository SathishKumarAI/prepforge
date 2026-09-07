---
qid: ing_159b209be8__faang__local
question: 'Explain: Take-home project — Sierra Agent Engineer Interview Guide | Sample
  Questions (2026) - Exponent'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 608
total_tokens: 852
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:33:34-05:00'
sources: []
---

**Take‑home Project for a Sierra Agent Engineer – 2026 Sample Q&A**

| # | Sample Question | What it tests |
|---|-----------------|---------------|
| 1 | *“Design an ML pipeline that predicts agent performance from call logs.”* | End‑to‑end pipeline design, feature engineering, model choice, deployment. |
| 2 | *“Explain how you’d handle class imbalance when forecasting churn.”* | Imbalance techniques (SMOTE, focal loss), evaluation metrics (AUC‑PR). |
| 3 | *“Propose a data‑driven strategy to reduce call handling time.”* | Feature selection, regression/ordinal models, A/B test plan. |
| 4 | *“Describe your approach to model monitoring in production.”* | Drift detection, alerting, rollback procedures. |
| 5 | *“Write code that preprocesses a noisy transcribed speech dataset.”* | Text cleaning, tokenization, handling OOV tokens. |

---

### Structured Answer (≈200 words)

**Clarify**  
The interviewer wants to see how you translate raw call‑center data into actionable ML solutions: from data ingestion → feature extraction → model training → deployment & monitoring. Confirm assumptions: labeled data available, real‑time inference required, SLA on latency < 100 ms.

**Approach**  
1. **Data pipeline:** Ingest logs via Kafka → clean in Spark → store in Delta Lake.  
2. **Feature engineering:** Extract call duration, sentiment scores (BERT), agent ID embeddings, time‑of‑day buckets.  
3. **Model selection:** Gradient‑boosted trees for tabular data; fine‑tune a lightweight Transformer for text features.  
4. **Evaluation:** Use ROC‑AUC + F1 for imbalance; perform cross‑validation with stratified folds.  
5. **Deployment:** Containerize with Docker, serve via FastAPI behind an Envoy gateway, autoscale on CPU usage.  
6. **Monitoring:** Track input distribution (drift), prediction confidence, latency; alert if drift > 10 %.  

**Depth**  
- Complexity: Training O(NlogN) for XGBoost; inference latency <50 ms.  
- Trade‑offs: Simpler linear models reduce latency but lower accuracy; Transformers add latency but capture context.

**Edge Cases**  
- Missing timestamps → impute with median.  
- New agent IDs → use “unknown” embedding.  
- Sudden surge in call volume → trigger auto‑scale.

**Optimize & Communicate**  
Explain that caching recent embeddings and using ONNX runtime will shave 20 % latency. Conclude by emphasizing end‑to‑end observability: data quality dashboards + model health metrics, ensuring the system remains robust as agent workloads evolve.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
