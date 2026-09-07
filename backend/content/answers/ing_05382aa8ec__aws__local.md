---
qid: ing_05382aa8ec__aws__local
question: 'Explain: But when you do a split at — Anomaly Detection: Algorithms, Explanations,
  Applications'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 488
total_tokens: 729
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:37:36-05:00'
sources: []
---

**Situation / Task**  
I was hired by a fintech startup to build an end‑to‑end anomaly‑detection pipeline that flags fraudulent credit‑card transactions in real time. The goal: reduce false positives while catching 95 % of frauds, and deliver results within 200 ms per transaction.

**Action (Technical Design)**  
1. **Data Split & Feature Engineering** – I split the historic logs into *train* (70 %), *validation* (15 %) and *test* (15 %) using a time‑based split to avoid look‑ahead bias.  
2. **Modeling** – Built an ensemble of Isolation Forest, Autoencoder (PyTorch) and Gradient‑Boosted Trees (XGBoost). Trained on Amazon SageMaker with GPU instances; used hyperparameter tuning via SageMaker Experiments.  
3. **Deployment** – Deployed the best model as a real‑time inference endpoint in SageMaker Hosting Services (1 ml.m5.large). Wrapped it in an API Gateway + Lambda that injects contextual metadata before forwarding to the endpoint.  
4. **Monitoring & Feedback Loop** – Logged predictions to Amazon Kinesis Data Streams; used Athena to aggregate drift metrics and trigger retraining jobs automatically via Step Functions.

**Result**  
- Fraud detection rate increased from 82 % to **95 %**, while false positives dropped by **38 %** (from 12 % to 7 %).  
- Latency stayed under **180 ms** on average.  
- Cost per inference was $0.0005, a 25 % reduction over the legacy batch‑processing system.

**Leadership Principles Highlighted**  
- **Ownership** – Took end‑to‑end responsibility, from data ingestion to production monitoring.  
- **Dive Deep** – Performed rigorous statistical validation and continuous drift analysis.  

**Bar‑raiser Insight**  
They’ll look for: clear ownership narrative, deep technical justification (time‑based split, ensemble choice), quantifiable impact (metrics), and a learning loop that turns failures into improvements.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
