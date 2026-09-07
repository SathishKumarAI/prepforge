---
qid: ing_860cdd0fc4__faang__local
question: 'Explain: Persistent shared data — Liveblocks | Realtime infrastructure
  for multiplayer apps and agents'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 494
total_tokens: 734
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:56:02-05:00'
sources: []
---

**Clarify**  
You’re asking how *Liveblocks* keeps a single source of truth (the “persistent shared data”) across many clients so that every player sees the same state in real‑time. I’ll assume we need to: 1) persist updates reliably, 2) propagate them instantly to all participants, and 3) avoid conflicts or stale reads.

**Approach**  
1. **Event‑driven update model** – each client emits an event (e.g., “move”, “chat”) that Liveblocks pushes to a broker.  
2. **CRDT/OT conflict resolution** – the broker applies an algorithm guaranteeing convergence regardless of arrival order.  
3. **Delta replication + snapshotting** – only changes (“deltas”) are streamed; periodic full snapshots keep new clients in sync and recover from missed events.  
4. **Edge‑caching & sharding** – data is partitioned by room ID, stored on fast KV stores (Redis/MemoryStore) with write‑through to durable storage (S3/PostgreSQL).  

**Depth**  
- **Consistency model:** *Eventual* for low latency, backed by CRDTs that ensure deterministic merge.  
- **Latency:** < 50 ms average due to in‑memory pub/sub; higher tier clients get 10–20 ms via WebSocket multiplexing.  
- **Fault tolerance:** Multi‑region replication of the broker; state is persisted every few seconds so a node failure rolls back to last snapshot.  
- **Scalability:** Horizontal scaling by sharding rooms; each shard runs its own broker instance, ensuring linear throughput.

**Edge Cases**  
- Network partitions → clients receive “offline” flag and replay queued events on reconnection.  
- Large state objects (e.g., maps) → chunked delta streams to avoid 2 MB payloads.  
- Malicious actors → rate‑limiting per client, signature verification of event payloads.

**Optimize & Communicate**  
I’d first prototype with Redis Streams for low latency, then benchmark against a Kafka cluster if message throughput spikes (>10k events/s). Throughout the interview I’ll narrate: “We start simple, validate our consistency guarantees, and only add complexity when metrics dictate.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
