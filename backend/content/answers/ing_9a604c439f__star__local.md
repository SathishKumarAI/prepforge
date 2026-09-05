---
qid: ing_9a604c439f__star__local
question: What data is collected, and how is it used?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 369
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:41:16-05:00'
sources: []
---

**Situation:**  
During my last role at a fintech startup, we were building a fraud‑detection model for credit card transactions. The company’s compliance team required that every transaction be flagged with a confidence score before it reached the risk desk.

**Task:**  
I had to design a pipeline that collected all relevant data, processed it in real time, and fed it into a predictive model while ensuring we met latency targets of under 200 ms per transaction.

**Action:**  
First, I mapped out the data sources: raw transaction logs (amount, timestamp, merchant ID), user profile attributes (age, location, device fingerprint), and external feeds (blacklist APIs, merchant risk scores). Using Kafka for ingestion, we streamed events into a Spark Structured Streaming job that performed feature engineering on‑the‑fly—calculating rolling averages, time‑since‑last‑purchase, and one‑hot encoding categorical fields. We then pushed the enriched batch to an MLflow model registry where a XGBoost classifier had been trained on historical fraud labels. The model’s output probability was appended to the transaction payload and routed back through Kafka to the risk desk.

**Result:**  
The end‑to‑end latency dropped from 350 ms to 180 ms, exceeding compliance requirements. Fraud detection accuracy improved by 12% (precision from 0.84 to 0.95) and we reduced false positives by 18%, freeing up analysts to focus on true threats. I learned how critical it is to treat data as a first‑class citizen—clean ingestion, real‑time feature generation, and model serving must all be tightly integrated for production ML success.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
