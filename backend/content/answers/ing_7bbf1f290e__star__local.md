---
qid: ing_7bbf1f290e__star__local
question: 'Explain: Let''s run our program alright, this method'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 346
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:41:28-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup we were building a fraud‑detection model that needed to run every minute on streaming transaction data. The existing batch pipeline took hours, so by the time results reached analysts they were already outdated.

**Task** – I had to refactor the inference workflow into a real‑time service: ingest transactions, score them with our XGBoost model, and push alerts to Kafka within seconds, all while keeping latency under 200 ms and accuracy above 95 % F1.

**Action** – First, I wrapped the trained model in a FastAPI endpoint and deployed it on a Kubernetes pod with GPU autoscaling. I used Ray Serve for request batching, limiting batch size to 32 so we hit GPU throughput without exceeding latency. For data ingestion I set up a Kafka consumer that pulled events from the transaction stream, pre‑processed them (imputed missing values, encoded categorical features), and forwarded them to the model endpoint via gRPC. To monitor drift I added a Prometheus exporter that logged prediction confidence and sent alerts if mean confidence dropped below 0.75.

**Result** – The new pipeline cut inference time from 3 minutes to 150 ms on average, reducing analyst response time by 90 %. Accuracy stayed at 96 % F1, and we saw a 30 % drop in false positives after deploying the system. I learned that micro‑optimizing batch size and using lightweight gRPC can make GPU inference viable for high‑frequency streams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
