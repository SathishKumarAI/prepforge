---
qid: ing_e1215e1991__star__local
question: 'Explain: Pull — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 369
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:59:02-05:00'
sources: []
---

**Situation:**  
At my previous company we were building a real‑time recommendation engine for an e‑commerce platform that needed to ingest clickstream data from millions of users and update personalized models every minute.

**Task:**  
I had to design the ingestion layer so it could handle bursty traffic, keep latency under 200 ms, and scale horizontally without dropping events.

**Action:**  
I evaluated a pull model (polling each source) versus a Pub/Sub pattern. With pull I’d have multiple workers pulling from a queue service like SQS; this added polling overhead and made it hard to back‑off during traffic spikes. Instead I chose a Kafka‑based Pub/Sub system: producers streamed events directly to topics, and consumers subscribed with auto‑commit offsets. I configured partitioning on user ID to guarantee order per user, set replication factor 3 for durability, and used consumer groups so new instances could be spun up in minutes. To keep latency low I tuned the fetch size to 1 MB and enabled batch compression (Snappy). For monitoring I added Prometheus metrics on lag and throughput.

**Result:**  
The ingestion pipeline handled a peak of 15 M events per hour with average end‑to‑end latency of 120 ms, reducing recommendation staleness by 40%. The system also supported zero‑downtime scaling; adding two more consumer nodes cut processing time from 3 s to 1.2 s per batch. I learned that Pub/Sub’s decoupling and partitioning are essential for high‑volume, low‑latency ML workloads, whereas pull models struggle with bursty traffic and scalability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
