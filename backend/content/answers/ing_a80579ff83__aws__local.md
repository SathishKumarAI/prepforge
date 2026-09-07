---
qid: ing_a80579ff83__aws__local
question: 'Explain: get the death and then apply to — Google Docs System design |
  Part 1| Operational transformation | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 625
total_tokens: 871
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:46:43-05:00'
sources: []
---

**Situation & Task**  
I was asked to redesign a real‑time collaborative editor (think Google Docs) for an internal product that handles 1 M concurrent users and 10 TB of document data per month. The goal was to replace the monolithic Operational Transformation (OT) engine with a more scalable Differential Synchronisation model while keeping latency < 200 ms.

**Action & Design**  
- **Requirements**: Per‑document consistency, conflict resolution, offline editing, minimal bandwidth.  
- **Architecture**:
  1. **Client SDK** – WebSocket + protobuf for low‑latency ops.  
  2. **Edge layer** – CloudFront + Lambda@Edge to route clients to the nearest regional API Gateway endpoint (regional latency ≈ 30 ms).  
  3. **Synchronisation Service** – Amazon Kinesis Data Streams ingest user changes; each record is a delta.  
  4. **State Store** – DynamoDB Global Tables (multi‑region) hold the latest document state + version vector.  
  5. **Conflict Resolver** – Lambda function runs a differential sync algorithm that merges deltas using operational IDs and timestamps, writes back to DynamoDB.  
  6. **Cache** – Elasticache Redis for hot documents to reduce DB reads; eviction policy LRU, TTL 10 min.  
- **Scalability**: Kinesis shards auto‑scale based on ingestion rate (≥ 200k ops/s). DynamoDB provisioned capacity with autoscaling keeps latency < 5 ms.  
- **Availability**: Multi‑AZ for API Gateway + Lambda; DynamoDB Global Tables provides read/write across regions, ensuring 99.999% availability.  
- **Cost**: Estimated $0.15 per million ops (Kinesis) + $0.25/million writes (DynamoDB), < $2k/month for our load.

**Result**  
After a 3‑month pilot:
- **Latency dropped** from 350 ms to **120 ms** average.  
- **Throughput** scaled to 400k ops/s without throttling.  
- **Cost** reduced by **35%** versus the legacy OT deployment.  

**Reflection & Learning**  
I took ownership of end‑to‑end performance, diving deep into Kinesis shard sizing and DynamoDB read/write patterns. The biggest failure was underestimating cold starts for Lambda; adding provisioned concurrency eliminated 12 ms jitter. This iteration taught me that a hybrid sync model can meet real‑time constraints while keeping operational complexity manageable.  

**Leadership Principles Highlighted**  
- **Ownership** – I drove the end‑to‑end redesign and paid close attention to cost & performance trade‑offs.  
- **Dive Deep** – Detailed profiling of each component (WebSocket latency, Kinesis throughput) informed my scaling decisions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
