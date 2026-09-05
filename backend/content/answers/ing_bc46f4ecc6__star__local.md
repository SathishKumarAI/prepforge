---
qid: ing_bc46f4ecc6__star__local
question: 'Explain: Fan-Out and Filtering — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 333
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:47:40-05:00'
sources: []
---

**Situation** – At my previous company we built a real‑time analytics platform for IoT devices. Every sensor sent JSON payloads to a Kafka cluster, but downstream services only cared about specific event types (e.g., temperature spikes or motion alerts). The raw fan‑out was flooding the network and consuming 70 % of our outbound bandwidth.

**Task** – I had to design a scalable Pub/Sub layer that could filter events at publish time, reduce unnecessary traffic, and still allow any new consumer to subscribe without code changes.

**Action** – I introduced a lightweight “topic router” microservice. When producers sent messages, the router inspected the event header (using a simple schema registry) and routed each message to one of three Kafka topics: *temp‑alerts*, *motion‑alerts*, or *generic*. I added a Bloom filter per topic to quickly drop duplicates before writing to disk. For backward compatibility, the router also emitted a legacy “all‑events” topic for any consumers that needed raw data. The system used Avro schemas and a small Rust service for high throughput, keeping latency under 5 ms.

**Result** – Fan‑out dropped from 10 GB/day to 2 GB/day (80 % savings). Consumer services now only read relevant topics, cutting their processing load by 60 %. The design also made it trivial to add new event types in the future. I learned that early filtering at publish time can dramatically improve system efficiency without sacrificing flexibility.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
