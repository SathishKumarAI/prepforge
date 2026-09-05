---
qid: ing_93fd5b7947__star__local
question: 'Explain: these many bytes which means this is — Expert gets Interviewed!
  @gkcs does IRCTC System Design!! It\u2019s a hard question \ud83e\udd2f\ud83e\udd2f'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 276
output_tokens: 385
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:28:56-05:00'
sources: []
---

**Situation** – At my last role, we were tasked with revamping the IRCTC ticket‑booking platform to reduce cart abandonment by 15 % during peak holiday seasons. The existing recommendation engine was rule‑based and only served static suggestions.

**Task** – I had to design a scalable machine‑learning pipeline that could ingest millions of booking logs per day, generate real‑time personalized seat and route recommendations, and hit an inference latency target of under 200 ms for every user request.

**Action** – First, I set up a Kafka stream to collect clickstream events in near real time. Using Spark Structured Streaming, I engineered features on the fly (e.g., recent search history, seat preference, price sensitivity). For modeling, I trained an XGBoost model offline on a 30‑day window and deployed it via TensorFlow Serving behind a Kubernetes autoscaler. To keep inference fast, I quantized the model to int8 and used NVIDIA Triton Inference Server, which reduced latency by ~60 % while preserving 0.98 AUC. I also added an online A/B test harness in Go that routed 10 % of traffic to the new system.

**Result** – Within two months of rollout, cart abandonment dropped from 22 % to 14 %, exceeding our target by 8 %. The system processed over 5 M requests per hour with average latency 140 ms. I learned that marrying streaming data pipelines with model quantization can deliver both scalability and speed in a production ML service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
