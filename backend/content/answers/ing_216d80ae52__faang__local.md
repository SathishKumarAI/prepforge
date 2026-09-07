---
qid: ing_216d80ae52__faang__local
question: 'Explain: The Offline Message Flow — Design WhatsApp | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 655
total_tokens: 896
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:02:37-05:00'
sources: []
---

**1️⃣ Clarify**

We’re asked to design the *offline‑message* flow for WhatsApp – i.e., how a message that cannot be delivered immediately (recipient offline, network down) is stored and later forwarded when conditions allow.  
Assumptions to confirm:  

- Messages are user‑to‑user, end‑to‑end encrypted.  
- We want eventual consistency, minimal latency for online users, and high throughput.  
- Storage must survive node failures; replication is required.  
- Message size ≤ 16 KB (typical).  

**2️⃣ Approach**

1. **Ingress** – client → edge server → regional data center.  
2. **Routing** – a lightweight “router” service decides the recipient’s current device or offline status via presence cache.  
3. **Offline queue** – if no active device, persist the message in a sharded, replicated store (e.g., Kafka topic + RocksDB).  
4. **Delivery loop** – background workers poll the queue per user; when the recipient comes online, they pull from their queue or receive push notifications to fetch.  
5. **Acknowledgement & cleanup** – once delivered and acknowledged, delete or TTL‑expire the entry.  

**3️⃣ Depth**

- *Data model*: `user_id → [message_id, payload_hash, timestamp]`. Store payload separately in a blob store (S3‑compatible) for large media.  
- *Sharding*: hash on recipient ID to distribute load; each shard runs its own Kafka partition + RocksDB instance.  
- *Replication*: 3‑node Raft cluster per shard ensures durability; leader handles writes, followers serve reads.  
- *Complexity*: Write O(1) (append to log), read O(log N) for pulling a batch. Throughput scales with number of shards.  

**4️⃣ Edge Cases**

- **Duplicate delivery** – idempotent message IDs prevent re‑send on retries.  
- **User deletes chat** while messages are queued – background job scans and purges.  
- **Large media offline** – send only a placeholder; actual file fetched later via separate channel.  
- **Network partitions** – local replicas serve reads, writes go to leader once healed.  

**5️⃣ Optimize & Communicate**

- Use *push* notifications (FCM/APNs) to wake the device, then pull the queued messages in bulk to reduce round‑trips.  
- Compress payloads on the fly; cache recent messages for quick replay if user reconnects within a short window.  
- Monitor queue depth per shard; auto‑scale workers when latency exceeds SLA.  

**Narrative**: I’d start by sketching the high‑level flow, then drill into sharding and replication to guarantee durability. Next, discuss idempotency and cleanup to avoid data bloat. Finally, quantify performance (O(1) writes, O(log N) reads) and outline monitoring for edge cases. This structure demonstrates clear thinking, depth in system design, and a focus on scalability—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
