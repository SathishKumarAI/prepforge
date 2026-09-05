---
qid: ing_0b66153031__star__local
question: 'Explain: Integration of heterogeneous systems — Event-Driven Architecture'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 360
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:51:45-05:00'
sources: []
---

**Situation** – At a fintech startup I was tasked to merge our legacy credit‑score engine (Java Spring) with a new recommendation model written in Python on TensorFlow. The two systems communicated via different protocols: the old one exposed SOAP services, while the ML service used REST over HTTP/2. Our quarterly report deadline loomed and any downtime would cost us $50k per day.

**Task** – Build an event‑driven integration layer that could ingest user transaction streams from the legacy system, trigger model inference in real time, and return enriched scores without breaking existing APIs or affecting latency targets (< 200 ms).

**Action** – I introduced Apache Kafka as a central bus. The Java service published “transaction” events to a topic; a Python consumer subscribed using confluent‑kafka, performed batch preprocessing, ran the TensorFlow model, and produced “score” events. A lightweight Go microservice listened for score events and exposed them via a backward‑compatible REST endpoint that the legacy UI could call. I added schema registry for Avro to enforce contract stability and used circuit breakers (Hystrix) to isolate failures.

**Result** – The new pipeline processed 10,000 transactions per second with an end‑to‑end latency of 150 ms, a 25% reduction over the previous manual batch job. We met the quarterly deadline, avoided the $50k daily penalty, and learned that event‑driven design scales better than tight coupling in heterogeneous environments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
