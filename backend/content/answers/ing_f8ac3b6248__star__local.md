---
qid: ing_f8ac3b6248__star__local
question: 'Explain: Machine Learning — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 378
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:45:54-05:00'
sources: []
---

**Situation**  
During a FAANG‑style interview I was asked to design a real‑time fraud detection model for a payments platform that processes 10 M transactions per day. The client had a 0.5% false‑positive tolerance and needed predictions within 50 ms.

**Task**  
I had to build an end‑to‑end pipeline: ingest streaming data, engineer features on the fly, train a lightweight model, and deploy it with sub‑millisecond inference while keeping CPU usage under 30%.

**Action**  
1. **Feature engineering** – I used Kafka Streams to compute rolling counts of user transactions per minute and encoded categorical fields via target encoding.  
2. **Model selection** – After benchmarking XGBoost, LightGBM, and a shallow neural net, I chose CatBoost because it handled missing values natively and produced the best AUC‑ROC (0.982) with only 1 MB of model size.  
3. **Optimization** – I quantized the model to 8‑bit integers and compiled it with ONNX Runtime, reducing inference time from 120 ms to 35 ms on a single CPU core.  
4. **Deployment** – Wrapped the model in a gRPC microservice behind an Envoy proxy; used Prometheus for latency monitoring and set up automatic retraining every 24 h using Spark Structured Streaming.

**Result**  
The system achieved a false‑positive rate of 0.42% and maintained an average inference latency of 32 ms, meeting the SLA. Deployment cost dropped by 18% compared to the baseline. I learned that balancing model complexity with real‑time constraints often requires iterative profiling and careful choice of feature pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
