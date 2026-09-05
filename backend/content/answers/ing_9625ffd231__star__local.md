---
qid: ing_9625ffd231__star__local
question: 'Explain: Event-Driven Systems — System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 328
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:33:10-05:00'
sources: []
---

**Situation**  
During my last role at a fintech startup, we were launching a real‑time fraud detection service for credit card transactions. Our existing batch pipeline was too slow; by the time alerts reached merchants, the fraud had already occurred.

**Task**  
I needed to design an event‑driven architecture that could ingest millions of transaction events per second, process them through multiple ML models, and deliver instant decisions with <200 ms latency while maintaining fault tolerance.

**Action**  
I chose Kafka as the event bus for its durability and partitioning. I set up a producer that streamed raw transaction data to a “transactions” topic, then used Kafka Streams to enrich events (geolocation, device fingerprint). For ML inference I deployed TensorFlow Serving behind a gRPC endpoint; each stream task sent batches of 128 events to the model cluster, which returned risk scores. Results were published to a “fraud‑alerts” topic consumed by an alerting microservice that pushed WebSocket notifications to merchants. To ensure resilience, I implemented dead‑letter queues and automatic replay logic for failed messages.

**Result**  
Latency dropped from 3 s to under 150 ms, allowing us to block fraudulent charges before settlement in 96% of cases. The system handled peak loads of 2 M events per hour without outages. I learned that coupling Kafka with stateless inference services and proper back‑pressure handling is key for scalable event‑driven ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
