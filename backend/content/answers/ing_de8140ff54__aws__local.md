---
qid: ing_de8140ff54__aws__local
question: 'Explain: So, we wanted to also then look — Anomaly Detection: Algorithms,
  Explanations, Applications'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 420
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:42:46-05:00'
sources: []
---

**Situation / Task**  
At my previous role I led a fraud‑prevention team that needed to detect anomalous credit‑card transactions in real time. The goal was to reduce false positives while catching emerging attack patterns before they caused losses.

**Action**  
I built an end‑to‑end pipeline on AWS:

| Component | Service | Why |
|-----------|---------|-----|
| Feature engineering & feature store | SageMaker Feature Store, Kinesis Data Streams | Low‑latency ingestion of transaction metadata |
| Model training (unsupervised + semi‑supervised) | SageMaker Ground Truth for labeling, SageMaker Autopilot | Combines Isolation Forest, Autoencoder, and a small supervised layer |
| Scoring & inference | SageMaker Real-Time Endpoint on an `ml.m5.xlarge` instance, Lambda for orchestration | 1 ms latency, auto‑scales with target utilization |
| Explainability | SageMaker Clarify, SHAP values | Provides feature importance per prediction |
| Alerting & monitoring | CloudWatch Alarms + SNS + EventBridge | Immediate notification of model drift |

I also implemented a “model card” workflow in CodeCommit to enforce ownership and audit trails.

**Result**  
Within 90 days the false‑positive rate dropped from **12 % → 3 %**, while the true‑positive detection improved by **18 %** (≈$1.2M saved). Monthly inference cost stayed below $5k, thanks to spot instances and auto‑scaling.

**Reflection**  
I learned that *bias for action* means iterating quickly, but *ownership* requires rigorous monitoring of drift; otherwise the model would silently degrade. The bar‑raiser will see my deep dive into metrics, clear trade‑offs (cost vs latency), and a culture of continuous learning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
