---
qid: ing_04cbb70aab__faang__local
question: 'Explain: High-Level Design — Design WhatsApp | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 557
total_tokens: 797
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:55:50-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked to sketch a high‑level design for WhatsApp – a real‑time, end‑to‑end encrypted messaging app that supports billions of users, group chats, media, and status updates.  
Assumptions: *Global scale*, *low latency*, *high availability*, *data consistency* (messages delivered in order), *privacy* (no server‑side decryption).  

**2️⃣ Approach**  
1. **Client → Edge** – CDN edge nodes for static assets.  
2. **Messaging Backbone** – a globally distributed message broker (Kafka + Pulsar) with per‑user partitions.  
3. **Presence & Metadata Service** – gRPC microservice holding online status, last seen, group membership.  
4. **Storage** –  
   * Short‑term: Redis for in‑flight messages and read receipts.  
   * Long‑term: Sharded NoSQL (Cassandra) for message history + Blob store (S3) for media.  
5. **End‑to‑end encryption** – client generates key pairs; only the intended recipient can decrypt.  

**3️⃣ Depth**  
- **Message flow**: Client → Edge → Message broker → Recipient’s edge → Client.  
- **Reliability**: Broker guarantees at least once delivery; client dedupes via message IDs.  
- **Scaling**: Partition by user ID; each partition handled by a set of brokers; use consistent hashing for rebalancing.  
- **Group chats**: Store group membership in a separate service; broker publishes to all members’ partitions.  
- **Media**: Upload to CDN edge, store URL + hash in message record; clients fetch via signed URLs.  

**4️⃣ Edge Cases**  
- *Offline users*: Broker buffers up to a retention window; client syncs on reconnect.  
- *Shard failures*: Replication factor > 3 ensures data safety.  
- *Large group (>10k)*: Use push‑to‑pull with batched notifications to avoid broker overload.  

**5️⃣ Optimize & Communicate**  
- **Latency**: Place edge nodes near users; use HTTP/2 multiplexing for control traffic.  
- **Cost**: Store media in tiered storage (hot S3 for 30 days, cold Glacier thereafter).  
- **Security**: Rotate keys periodically; audit logs stored immutable.  

*In a real interview I’d sketch this on the board, quantify latency targets (~200 ms per message), and discuss trade‑offs between consistency vs. availability for group updates.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
