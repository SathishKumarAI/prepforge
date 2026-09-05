---
qid: ing_bb8d4c2362__star__local
question: 'Explain: Common Patterns to Know — Whiteboard Exercises'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 451
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:46:25-05:00'
sources: []
---

**Situation**  
During my interview for a senior ML engineer role at a fintech startup, the hiring team asked me to design an end‑to‑end fraud detection model on a whiteboard within 20 minutes. They had a dataset of 5 M transaction records and wanted a scalable solution that could be deployed in real time.

**Task**  
I needed to outline the entire pipeline: data ingestion, feature engineering, model training, evaluation, and deployment, while also addressing latency constraints and explainability requirements for regulators.

**Action**  
1. **Data Ingestion** – I sketched Kafka streams feeding into a Spark Structured Streaming job, emphasizing low‑latency batch windows of 5 s.  
2. **Feature Engineering** – I highlighted two key patterns: *rolling window aggregates* (e.g., mean transaction amount per user over the last hour) and *entity embeddings* for categorical fields like merchant ID, using a lookup table in Redis to keep inference time minimal.  
3. **Model Training** – I proposed a gradient‑boosted tree ensemble (XGBoost) trained offline on Spark MLlib, with hyperparameter tuning via Optuna. For real‑time scoring, I planned to convert the model into ONNX and serve it through an AIOps platform like TFX Pipelines.  
4. **Evaluation & Explainability** – I noted using SHAP values plotted per transaction type to satisfy compliance, and a sliding window AUC metric to monitor drift.  
5. **Deployment & Monitoring** – Finally, I outlined a Kubernetes deployment with Prometheus metrics for latency and a feedback loop that pushes flagged anomalies back into the training set.

**Result**  
The interviewers were impressed; I was offered the role on the spot. The solution later reduced false positives by 23 % in production and cut inference latency from 200 ms to under 50 ms after moving to ONNX. I learned that framing whiteboard problems around real‑world patterns—streaming ingestion, rolling aggregates, model conversion, and compliance checks—turns abstract concepts into tangible, interview‑winning stories.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
