---
qid: ing_620ae955b5__star__local
question: 'Explain: Core Concepts — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 340
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:44:13-05:00'
sources: []
---

**Situation:**  
At my previous company we built a real‑time fraud detection pipeline for credit card transactions. The data stream hit our services at ~20k events per second, and any delay in flagging a fraudulent transaction could cost us millions.

**Task:**  
I was tasked with designing the ingestion layer that would reliably distribute incoming transaction records to downstream microservices (anomaly scoring, enrichment, alerting) while keeping latency under 200 ms and scaling to peak traffic spikes.

**Action:**  
I chose a Pub/Sub architecture using Apache Kafka. I defined partitions based on merchant ID so related transactions stayed together, reducing shuffle overhead for the enrichment service. To guarantee ordering per user, I set a key‑based partitioning strategy. I also implemented a dead‑letter topic with a retry policy that capped at three attempts before routing to an investigation queue. On the consumer side, each microservice used consumer groups to achieve horizontal scaling and auto‑commit offsets only after successful processing. We added a lightweight health‑check endpoint on every broker and configured Kafka’s exactly‑once semantics to avoid duplicate alerts.

**Result:**  
The system handled 35k events/s during peak holidays with an average end‑to‑end latency of 180 ms, a 40% reduction in false negatives compared to the legacy batch model. The Pub/Sub design also cut operational overhead by 25%, as we no longer needed manual load balancers or message queues for each service. I learned that thoughtful partitioning and strict offset management are key to marrying throughput with consistency in event‑driven ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
