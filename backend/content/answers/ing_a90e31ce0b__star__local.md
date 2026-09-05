---
qid: ing_a90e31ce0b__star__local
question: 'Explain: Intra-Service Messaging — System Design Resources'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 362
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:10:55-05:00'
sources: []
---

**Situation** – At my last company we were rolling out a recommendation engine that had to push personalized product suggestions to dozens of micro‑services in real time. The existing REST polling approach was causing a 40 % increase in latency and spiking the database load by 3× during peak hours.

**Task** – I was tasked with designing an intra‑service messaging layer that could deliver updates within milliseconds, keep each service isolated, and scale to handle over 10k messages per second without dropping any critical events.

**Action** – I chose Kafka as the backbone because of its durability and partitioning. Each micro‑service subscribed to a topic specific to its domain (e.g., “user‑profile‑updates”). To reduce overhead, I implemented schema registry with Avro so all services shared a strict contract. For fault tolerance, I set up a mirrored cluster in a secondary AZ and used consumer groups for load balancing. I also added an in‑memory cache per service that listened to the topic and refreshed only changed keys, cutting CPU usage by 25 %. Finally, I introduced a health‑check endpoint that exposed lag metrics; we could auto‑scale Kafka brokers when lag exceeded 200 ms.

**Result** – The new messaging layer cut inter‑service latency from 120 ms to under 20 ms, and the overall system throughput doubled. We reduced database load by 70 % during peak periods, keeping SLA compliance above 99.9 %. I learned that choosing the right event bus, enforcing strict schemas, and monitoring lag are critical for a robust intra‑service communication fabric.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
