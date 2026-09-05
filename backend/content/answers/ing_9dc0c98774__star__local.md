---
qid: ing_9dc0c98774__star__local
question: 'Explain: Event Notification — What do you mean by \u201cEvent-Driven\u201d?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 322
total_tokens: 569
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:47:43-05:00'
sources: []
---

**Situation** – In my last role I was tasked with building a real‑time fraud detection pipeline for a fintech client that processed over 1 million transactions per day. The existing batch system missed many high‑risk cases because it only ran every hour.

**Task** – I needed to design an event‑driven architecture so that each transaction could trigger downstream ML models immediately, and alerts would be sent to compliance teams within seconds.

**Action** – I set up a Kafka topic for incoming transactions, then wrote a lightweight consumer in Python that streamed raw data into a TensorFlow model hosted on GCP AI Platform. The inference result was published back to another Kafka topic; from there an AWS Lambda function triggered SNS notifications and updated a Redis cache used by the dashboard. I also added a retry policy and dead‑letter queue for failed messages, and instrumented everything with Prometheus metrics.

**Result** – The new pipeline processed 95 % of transactions in under 300 ms, reducing false negatives by 40 %. Compliance alerts were generated 90 % faster than before. I learned how to balance latency, fault tolerance, and observability when wiring ML models into an event‑driven system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
