---
qid: ing_01f7247673__faang__local
question: 'Explain: Real-Time Live Commenting Platform — Live Comment System Design
  - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 528
total_tokens: 767
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:48:44-05:00'
sources: []
---

**Real‑Time Live Commenting Platform – System Design**

### 1️⃣ Clarify  
We need a scalable service that ingests, stores, and broadcasts comments to thousands of concurrent viewers in real time (≤ 200 ms latency). Assumptions:  
- One comment per user per stream; high write traffic.  
- Users can join/leave streams arbitrarily.  
- Comments are displayed globally with minimal ordering guarantees.

### 2️⃣ Approach  
1. **API Gateway → Load Balancer → Stateless App Servers** for HTTP ingestion.  
2. **Message Broker (Kafka / Pulsar)** to buffer writes, enable replay, and provide back‑pressure handling.  
3. **Real‑time Push Layer** – WebSocket/Server‑Sent Events servers subscribed to Kafka topics per stream.  
4. **Distributed Cache (Redis) + Append‑Only Log (Cassandra/ScyllaDB)** for persistence; cache holds the last N comments for quick replay on reconnect.  
5. **CDN / Edge Functions** for serving static assets and initial handshake.

### 3️⃣ Depth  
- **Write Path:** Client → API → Kafka topic `stream‑<id>` (partitioned by stream).  
- **Read/Push Path:** WebSocket server consumes from the same topic, broadcasts to all session sockets.  
- **Latency Target:** ≤ 200 ms – achieved via in‑memory queues and minimal serialization.  
- **Scalability:** Horizontal scaling of app servers; Kafka partitions per stream allow sharding.  
- **Fault Tolerance:** Replicated Kafka brokers; stateless WebSocket nodes; persistent log ensures no data loss.

### 4️⃣ Edge Cases  
- **Burst traffic** when a popular stream starts: Kafka’s back‑pressure + auto‑scaling of consumers.  
- **User churn**: clean session termination to avoid orphan sockets.  
- **Out‑of‑order comments**: include timestamps; client can reorder if needed.

### 5️⃣ Optimize & Communicate  
Future improvements: implement per‑user rate limiting, content moderation pipeline (ML filter), and a CDN‑based read‑only replica for latency‑sensitive viewers. I’d explain trade‑offs between consistency (strict ordering) vs. throughput, and how Kafka’s log semantics simplify replay for late joiners. This structure shows clear problem understanding, systematic solution, technical depth, edge‑case awareness, and forward‑thinking optimization—key signals for FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
