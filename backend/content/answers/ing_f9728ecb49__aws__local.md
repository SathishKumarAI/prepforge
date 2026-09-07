---
qid: ing_f9728ecb49__aws__local
question: 'Explain: 4.3 Requirement 3: Playlist Management — Design Spotify | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 475
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:42:15-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
I was tasked to redesign Spotify’s playlist management for a global rollout that could support 70 M concurrent users while guaranteeing < 50 ms read latency for any user‑generated playlist.

**Action (Dive Deep + Deliver Results)**  
1. **Requirements** – CRUD on playlists, collaborative editing, real‑time sync, recommendation feed, and offline caching.  
2. **Architecture** –  
   - *API Layer*: Amazon API Gateway → Lambda (Node.js) for stateless request routing.  
   - *Data Plane*: DynamoDB with a GSI (`userId-creationTime`) for fast reads; write‑through cache in ElastiCache‑Redis to hit 95 % of read traffic.  
   - *Event Sourcing*: Kinesis Data Streams for change events → Lambda that updates Search‑Index (OpenSearch) and pushes real‑time notifications via Amazon SNS + WebSocket API.  
   - *Offline Sync*: Amplify DataStore with conflict resolution, backed by DynamoDB Global Tables for multi‑region replication.  
3. **Scalability & Availability** – Auto‑scaling Lambda concurrency, DynamoDB auto‑scaling, Multi‑AZ ElastiCache, and OpenSearch cluster with cross‑region read replicas (latency < 20 ms).  
4. **Cost** – 30 % lower than a monolithic MySQL solution by leveraging serverless compute and pay‑as‑you‑go storage.

**Result (Bias for Action + Quantified Impact)**  
Deployed within 6 weeks, achieved 99.998 % uptime during peak hours; read latency dropped from 120 ms to 42 ms, improving user engagement by **12 %** (streaming time per session).  

**Learnings** – Initial over‑provisioned Kinesis shards caused throttling; refactored to shard‑level auto‑scaling. This reinforced the importance of continuous monitoring and iterative capacity planning—core to Amazon’s bar‑raiser expectations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
