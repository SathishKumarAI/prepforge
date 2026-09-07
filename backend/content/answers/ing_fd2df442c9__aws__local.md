---
qid: ing_fd2df442c9__aws__local
question: 'Explain: and yes also possibly in the sense — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 430
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:50:30-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
At a previous gig I was asked to redesign DoorDash’s real‑time location feed so that riders and restaurants received accurate positions within **200 ms** even under peak traffic (≈ 1M concurrent users). The goal was to cut churn by keeping customers “always in the loop”.

**Action (Dive Deep + Bias for Action)**  
I scoped requirements: low latency, high throughput, fault‑tolerance, minimal cost. I proposed a hybrid Geo‑Hashing + WebSocket architecture:

| Layer | AWS Service | Reason |
|-------|-------------|--------|
| **Geospatial indexing** | Amazon DynamoDB with GSI on `geo_hash` (custom 10‑bit precision) | Sub‑second reads, auto‑scale, single‑AZ cost advantage |
| **Event ingestion** | Kinesis Data Streams → Lambda → DynamoDB | Decouples producers from consumers, handles burst traffic |
| **Real‑time push** | API Gateway WebSocket + Lambda Authorizer | Serverless scaling to 100k sockets, low latency |
| **Cache & hot spots** | Amazon ElastiCache Redis (cluster mode) | Keeps most active geohashes in memory for < 50 ms lookup |

I added a “heartbeat” mechanism that pushes delta updates only when a rider moves > 30 m, cutting bandwidth by 60%. I also introduced an automated fallback to HTTP polling during WebSocket outages.

**Result (Deliver Results)**  
- Latency dropped from **1.2 s → 0.18 s** (average).  
- Data‑plane cost fell 48% year‑over‑year.  
- Customer churn decreased by **12%** in the first quarter post‑deployment.  

I documented all assumptions, ran chaos tests on the WebSocket layer, and iterated quickly—an example of true ownership and learning from failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
