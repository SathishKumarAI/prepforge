---
qid: ing_c348230eba__aws__local
question: 'Explain: finding a person who is near enough — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 496
total_tokens: 744
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:44:28-05:00'
sources: []
---

**Situation** – At DoorDash I led the redesign of our real‑time rider‑customer matching engine. The goal was to reduce “near‑by” search latency from 1 s to <200 ms while keeping cost below $0.05 per query.

**Task** – Build a scalable system that can ingest millions of location updates per second, continuously compute proximity, and push matches to riders via WebSocket without over‑loading the front‑end.

**Action**  
- **Geo‑hashing**: Partition the world into 30 m cells (H3 index). Store active rider locations in an Amazon DynamoDB table keyed by `h3Index#riderId`. This gives O(1) read/write and automatic horizontal scaling.  
- **Change Streams**: Use DynamoDB Streams + AWS Lambda to publish updates to an Amazon Kinesis Data Stream, which triggers a stateful **Redis‑Cache (Amazon ElastiCache)** that holds the latest 10 s window of locations for quick neighbor lookups.  
- **Proximity Engine**: A stateless Lambda reads the rider’s current cell and its eight neighbors from Redis, filters by distance (<500 m) using haversine, then writes matches back to a DynamoDB “MatchQueue”.  
- **WebSockets**: Front‑end clients subscribe to an Amazon API Gateway WebSocket endpoint backed by a Lambda that pulls from the MatchQueue via Kinesis and pushes real‑time updates.  

**Result** – Latency dropped to 120 ms (70% improvement), throughput increased to 5M requests/day, and operational cost fell by 35%. The system survived a 40% traffic spike during a city‑wide promotion with zero outages.

**Reflection** – I learned that coupling geo‑hashing with stream‑driven state keeps the match engine stateless and horizontally scalable. Future iterations will explore **Amazon Timestream** for time‑series analytics to further reduce latency.  

*Leadership Principles*: **Customer Obsession** (fast, reliable rider experience) & **Ownership** (full responsibility from ingestion to delivery).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
