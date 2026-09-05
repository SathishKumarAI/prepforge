---
qid: ing_9a1d625cbf__star__local
question: 'Explain: Real-time Processing and Responsiveness — Event-Driven Architecture
  (EDA): A Complete Introduction'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 312
total_tokens: 557
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:41:01-05:00'
sources: []
---

**Situation** – At my previous company we launched a fraud‑detection service for credit card transactions. The system had to flag suspicious activity within milliseconds, otherwise merchants would lose revenue and customers would see failed payments.

**Task** – I was responsible for redesigning the pipeline so that every transaction could be processed in real time, with sub‑100 ms latency, while still allowing batch analytics downstream.

**Action** – I moved from a monolithic REST API to an event‑driven architecture using Apache Kafka as the backbone. Each transaction was published as a JSON event; a set of microservices subscribed via Kafka Streams. One stream executed a lightweight rule engine (Apache Flink) that applied statistical models and sent alerts to a Redis cache for instant look‑ups. For heavy ML inference I used an async HTTP/2 service backed by TensorFlow Serving, triggered only when the rule engine flagged a “high risk” flag. We also implemented back‑pressure handling with Kafka’s consumer lag metrics and auto‑scaling on Kubernetes.

**Result** – Latency dropped from ~350 ms to 75 ms on average, reducing false positives by 18% and increasing successful transaction volume by 12%. I learned that combining stream processing for quick rules with async model inference yields the best trade‑off between speed and accuracy in real‑time EDA.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
