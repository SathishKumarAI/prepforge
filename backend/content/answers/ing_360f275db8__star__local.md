---
qid: ing_360f275db8__star__local
question: 'Explain: Pub-Sub — Grokking System Design Interview: Patterns & Mock Interviews'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 362
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:16:25-05:00'
sources: []
---

**Situation**  
I was building a real‑time recommendation engine for an e‑commerce platform that needed to ingest user clickstreams, update personalized models, and push new recommendations within seconds. The existing batch pipeline caused latency of 15 minutes, so we had to design a streaming architecture.

**Task**  
Create a scalable, fault‑tolerant system that could handle 50k events per second, keep model inference latency under 200 ms, and allow independent microservices (click ingestion, feature extraction, model scoring, UI push) to evolve without tight coupling.

**Action**  
I implemented a Kafka‑based Pub‑Sub pattern. Click data was published to the “events” topic; a consumer group of feature workers subscribed, enriched each event with user profile features from Redis, and produced to a “features” topic. A second group of model scorers consumed these enriched messages, queried an ML model served via TensorFlow Serving, and emitted predictions to a “predictions” topic. The UI service subscribed to this final topic and pushed updates to users over WebSocket. I added idempotent keys, replay capabilities, and Kafka’s built‑in replication for durability. Monitoring with Prometheus tracked lag; we auto‑scales consumer instances based on queue depth.

**Result**  
Latency dropped from 15 minutes to <200 ms per recommendation, throughput increased to 70k events/sec, and the system handled a traffic spike during a flash sale without downtime. I learned that decoupling via Pub‑Sub not only improves latency but also gives each component its own scaling window and resilience strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
