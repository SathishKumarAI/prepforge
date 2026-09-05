---
qid: ing_04cbb70aab__fp__local
question: 'Explain: High-Level Design — Design WhatsApp | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 480
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:15:57-05:00'
sources: []
---

**High‑level design of a messaging app (WhatsApp)**  

1. **Core problem** – *low‑latency, high‑throughput communication between millions of users with end‑to‑end encryption*.  
2. **Why it must be partitioned** – A single server can’t handle 2 billion messages per day; we need horizontal scalability. We therefore split the system into:  

   - **Client layer** (mobile/web) → thin UI, local caching, encrypted payloads.  
   - **API gateway** → request routing, authentication, rate‑limiting.  
   - **Messaging service** → responsible for *enqueueing*, *persisting* and *dispatching* messages.  
   - **Storage layer** → a write‑optimized log (Kafka/Redis Streams) + a read‑optimized key‑value store (Cassandra/BigTable) for chat history.  
   - **Presence & status service** – separate, stateful cluster that keeps online/offline flags; uses a distributed cache (Memcached/Redis).  

3. **Consistency trade‑off** – We use *eventual consistency* for message delivery guarantees: a user may see “delivered” after the broker acknowledges receipt, but not necessarily instantaneously. This aligns with the CAP theorem: we prioritize Availability + Partition tolerance over strict Consistency in a globally distributed system.

4. **Deep insight** – The *write‑once, read‑many* pattern of chat logs means that sharding by conversation ID (or user hash) keeps writes local and allows O(1) reads per message without cross‑node joins. Many designers overlook this, opting for naïve user‑ID sharding which forces expensive range scans for group chats.

5. **Scaling knobs** – Auto‑scale API gateways with Kubernetes; use a token bucket for each user to throttle spam; replicate the presence service in each region to reduce latency.  

This architecture satisfies the key constraints—low latency, high availability, and end‑to‑end encryption—while remaining modular enough to evolve (e.g., adding voice/video or file sharing).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
