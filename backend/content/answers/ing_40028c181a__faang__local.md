---
qid: ing_40028c181a__faang__local
question: 'Explain: When the message is sent — Design WhatsApp | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 460
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:12:48-05:00'
sources: []
---

**Clarify**  
We need a scalable, low‑latency “send‑message” flow for a global messaging app (WhatsApp).  
Assumptions:  
* Users are globally distributed; data residency matters.  
* Messages may be text, media, or group chats.  
* Delivery guarantees: at least once, with ordering per conversation.  
* Offline users must receive messages later.  

**Approach**  
1. **Client → Edge API** (regional load balancer).  
2. **API → Queue** (Kafka/​Pulsar) for durability and back‑pressure.  
3. **Worker Service** pulls the queue, writes to a *conversations* table (Cassandra/Bigtable) and to a *user inbox* per device.  
4. **Push Notification / WebSocket** to online devices; otherwise enqueue a push token in FCM/APNs.  

**Depth**  
* **Data model:** `Conversation(id, participants[], last_seq)`; `Message(id, conv_id, seq, payload, timestamp)`.  
* **Ordering:** use per‑conversation sequence numbers; workers enforce monotonic writes.  
* **Scalability:** sharding by conversation id; hot partitions handled by replica set.  
* **Latency:** API < 50 ms for acknowledgment; delivery via push ~200 ms.  
* **Consistency:** eventual consistency on inboxes; strong consistency on conversation state using Paxos/RAFT if needed.  

**Edge Cases**  
* Duplicate sends → idempotent queue consumer.  
* Network partitions → messages sit in queue, retried.  
* Media size > 2 GB → chunked upload to CDN + message with URL.  

**Optimize & Communicate**  
Explain trade‑offs: using Kafka gives durability but adds latency; alternative is direct gRPC to a stateless service for instant reply at cost of reliability. Highlight monitoring (latency, queue depth) and autoscaling triggers. End by summarizing that the design balances speed, reliability, and global scale while meeting WhatsApp’s user expectations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
