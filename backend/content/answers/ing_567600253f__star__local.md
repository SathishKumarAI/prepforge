---
qid: ing_567600253f__star__local
question: 'Explain: Core APIs in Kafka — Coreapis'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 356
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:20:57-05:00'
sources: []
---

**Situation:**  
At a fintech startup we were migrating our real‑time fraud detection pipeline from batch jobs to streaming. The existing system had a 30 minute latency, but the new architecture required sub‑second processing of every transaction.

**Task:**  
I needed to design a Kafka‑based ingestion layer that could reliably capture millions of events per day, provide low‑latency consumption for the ML model, and allow easy replay for debugging and re‑training.

**Action:**  
I leveraged Kafka’s three core APIs: **Producer**, **Consumer**, and **Streams**.  
- With the Producer API I built a lightweight Java client that serialized transaction payloads with Avro, used idempotent writes, and applied batch compression to reduce network overhead.  
- The Consumer API was configured with manual offset commits and the `enable.auto.commit=false` flag so our ML inference service could guarantee at‑least‑once semantics while replaying specific partitions for retraining.  
- Finally, I wrapped the ingestion in a Kafka Streams application that performed on‑the‑fly enrichment (joining with static customer profiles) and windowed aggregation to compute rolling risk scores before forwarding them to a downstream model endpoint.

**Result:**  
Latency dropped from 30 minutes to under 200 ms per event. Throughput hit 1.2 M records/second, and the system could replay any day's traffic in less than 5 minutes for debugging. I learned that choosing the right API layer—Producer for ingestion, Consumer for downstream processing, Streams for stateful transformations—is key to balancing performance, reliability, and maintainability in production ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
