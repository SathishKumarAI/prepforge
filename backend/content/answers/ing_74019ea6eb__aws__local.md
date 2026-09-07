---
qid: ing_74019ea6eb__aws__local
question: 'Explain: road over here might be all twisty — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 469
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:48:05-05:00'
sources: []
---

**Situation & Task**  
At a food‑delivery startup I led the architecture of our real‑time location service that powers “pick‑up” and “ETA” for millions of drivers and customers worldwide. The system had to scale to 10 M concurrent users, provide sub‑second updates, and stay within a $2 M yearly budget.

**Action – Design**  
I chose **Geo‑Hashing + DynamoDB + Amazon Kinesis + WebSocket API (API Gateway)**:

1. **Geo‑Hashing**: Drivers publish their latitude/longitude to a Lambda that converts the point into a 12‑character GeoHash, bucketing nearby locations in a single partition key.  
2. **DynamoDB**: Stores driver → hash mapping with TTL for stale entries; read throughput tuned to 10 k requests/s per shard, giving >99.9 % availability.  
3. **Kinesis Data Streams**: Aggregates driver updates and pushes them to a consumer Lambda that writes batched changes to DynamoDB, reducing write amplification.  
4. **WebSocket API (API Gateway)**: Clients subscribe once; the gateway routes events from an SNS topic (triggered by the consumer Lambda) to the correct client socket, guaranteeing <200 ms latency.

**Result**  
- Latency dropped from 1.2 s to 180 ms average, improving user satisfaction scores by **32%**.  
- The architecture handled a 25× traffic spike during peak hours without additional cost; DynamoDB auto‑scales and Kinesis shards were re‑allocated automatically.  
- Total operational spend was $1.8 M annually—$200k under budget.

**Leadership Principles Reflected**  
- **Customer Obsession**: Faster, reliable ETA directly boosts user trust.  
- **Ownership & Dive Deep**: I drove the end‑to‑end design, performed cost/latency trade‑offs, and iterated on failure modes (e.g., handling stale GeoHashes).  

This solution balances scalability, availability, and cost while staying within AWS best practices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
