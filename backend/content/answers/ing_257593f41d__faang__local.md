---
qid: ing_257593f41d__faang__local
question: 'Explain: Realtime infrastructure for multiplayer apps and agents'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 538
total_tokens: 771
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:10:53-05:00'
sources: []
---

**Realtime Infrastructure for Multiplayer Apps & Agents**  
*FAANG‑style interview response – ~200 words*

---

### 1️⃣ Clarify  
We’re building a low‑latency system that lets many clients (players or autonomous agents) exchange state in real time, while keeping data consistent and scalable.  
Assumptions to confirm:  

- Target latency ≤ 50 ms end‑to‑end.  
- Peak concurrency ≈ 10⁶ simultaneous connections.  
- State changes are event‑driven; conflict resolution is required (e.g., CRDTs).  
- Network conditions vary (mobile, Wi‑Fi, 5G).  

---

### 2️⃣ Approach  
1. **Transport Layer** – UDP + QUIC for low RTT, fallback to WebSocket for browsers.  
2. **Message Bus** – Publish/Subscribe via a distributed log (Kafka or Pulsar) with per‑session partitions.  
3. **State Store** – In‑memory KV (Redis Cluster) + CRDTs for conflict resolution; persistence to RocksDB for durability.  
4. **Scaling** – Shard by session ID, auto‑scale workers via Kubernetes Horizontal Pod Autoscaler.  
5. **Reliability** – Heartbeat & acked packets; sequence numbers per client; server‑driven “state snapshots” every 100 ms.

---

### 3️⃣ Depth  
- **Latency**: UDP + QUIC reduces handshake overhead to < 10 ms.  
- **Consistency**: CRDTs let clients converge without central locking.  
- **Throughput**: Kafka partitions per shard → millions of events/s with ~1‑2 ms latency.  
- **Complexity**: O(1) message routing; O(log N) for sharded state lookup.

---

### 4️⃣ Edge Cases  
- Packet loss → retransmit only critical updates.  
- Server failure → graceful failover via leader election (Raft).  
- State divergence → periodic “full sync” to reset drift.  

---

### 5️⃣ Optimize & Communicate  
- **Compression**: Protobuf + delta encoding cuts bandwidth by ~70 %.  
- **Profiling**: Use latency histograms in Prometheus; adjust partition count dynamically.  
- **Narration**: I’d walk interviewers through a single update path, highlighting trade‑offs (e.g., UDP’s speed vs reliability) and how each component addresses them.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
