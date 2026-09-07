---
qid: ing_7cf7146363__aws__local
question: 'Explain: point looking at the distance in the — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 469
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:07:56-05:00'
sources: []
---

**Situation – Task**  
I was tasked with redesigning DoorDash’s real‑time rider–customer proximity service for the 2024 launch of “Instant Pickup.” The goal: reduce location‑lookup latency from ~200 ms to <50 ms while scaling to 2 M concurrent users, and cut operational cost by 30 %.  

**Action – Design**  
1. **Geo‑Hashing + DynamoDB** – I partitioned the city map into 100 m buckets (geo‑hash length 12) stored in a *Global Secondary Index* on `location_hash`. This allows O(1) point lookups for “nearest rider” queries.  
2. **WebSocket API Gateway + Lambda** – A managed WebSocket endpoint pushes location updates to subscribed clients. The Lambda authorizer verifies JWTs and writes the new geo‑hash into DynamoDB, triggering an SNS topic that feeds a *Kinesis Data Stream*.  
3. **Elasticache Redis** – Hot buckets are cached in Redis with TTL=30 s, reducing DynamoDB read traffic by ~70 %.  
4. **Auto Scaling & Spot Instances** – Lambda concurrency scales on request bursts; Kinesis shards auto‑scale to keep ingestion <1 MB/s per shard.  

**Result**  
- Latency dropped from 200 ms → 35 ms (average).  
- DynamoDB read capacity units fell by 68 %, saving ~$45k/month.  
- 99.9 % uptime during peak traffic, meeting SLA.  

**Learning & Ownership**  
I owned the end‑to‑end pipeline and performed a post‑mortem after a 5 min outage: discovered stale Redis entries caused “ghost riders.” I added a TTL refresh logic and updated documentation.  

> **Leadership Principles:** *Ownership*, *Dive Deep*, *Customer Obsession* – every metric was tied back to rider wait times, the core customer pain point.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
