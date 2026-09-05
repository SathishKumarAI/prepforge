---
qid: ing_cb67fbca33__star__local
question: 'Explain: Design — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 366
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:15:39-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup we were building a fraud‑detection model for credit‑card transactions that needed to be deployed in real time on the same infrastructure used for our recommendation engine. The latency budget was 50 ms per request and we had to keep false positives below 2 % while maintaining a true‑positive rate of 95 %.  

**Task** – My job was to design an end‑to‑end ML pipeline that could ingest millions of events per day, train weekly updates, serve predictions with sub‑50 ms latency, and provide explainability for compliance auditors.  

**Action** – I chose a hybrid architecture: a feature store in RedisCache for low‑latency lookups, a LightGBM model trained on Spark with hyperparameter tuning via Optuna, and served through a FastAPI endpoint behind an NGINX edge that cached the top 10 % of frequent users. To keep latency tight I converted the model to ONNX and used TensorRT inference on GPUs for batch scoring during nightly retraining. For explainability I integrated SHAP values into the API response so auditors could see feature importance per prediction.  

**Result** – The system processed 3 M transactions/day with an average latency of 32 ms, reduced false positives from 5 % to 1.8 %, and increased true‑positive rate to 96.4 %. The compliance team approved the model without additional audits, and I learned how to balance speed, accuracy, and transparency in a production ML system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
