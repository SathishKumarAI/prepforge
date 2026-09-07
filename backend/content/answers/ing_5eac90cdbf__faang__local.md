---
qid: ing_5eac90cdbf__faang__local
question: 'Explain: Consistency — Cloud Spanner Database - by Neo Kim'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 470
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:23:54-05:00'
sources: []
---

**Consistency in Cloud Spanner (Neo Kim)**  

---

### 1️⃣ Clarify  
*Problem*: How does Cloud Spanner guarantee consistency across globally‑distributed nodes?  
*Assumptions to confirm*: we’re talking about *strong consistency* for SQL reads/writes, not eventual or read‑your‑writes only.  

### 2️⃣ Approach  
Explain the two layers:  
1. **TrueTime** – bounded clock uncertainty.  
2. **Two‑Phase Commit (2PC)** + Paxos replication.  

Show how they work together to provide serializable isolation and globally consistent reads.

### 3️⃣ Depth  
- **TrueTime** gives an upper bound Δ on clock skew; each transaction gets a *commit timestamp* ≥ current time + Δ, ensuring all replicas see the same order.  
- On write: Spanner first writes to the leader replica (primary) then forwards to followers via Paxos log. 2PC guarantees atomic commit across shards.  
- Reads can be *strong* (timestamp = latest) or *snapshot* (timestamp ≤ requested). Because timestamps are globally ordered, any read at a given timestamp sees all preceding commits and no future ones—serializable consistency.  

**Complexity**: Write latency ≈ 1–2 round‑trips; read latency ≈ 0.5–1 round‑trip for strong reads. Trade‑off: tighter Δ → more conservative timestamps, slightly higher commit times.

### 4️⃣ Edge Cases  
- **Clock skew spikes**: if Δ grows large, commit timestamps lag, increasing write latency.  
- **Network partitions**: Paxos ensures at least one majority can still commit; others will reject writes until reconciling.  
- **Large transactions**: may hit the 1 GB limit or cause long 2PC windows.

### 5️⃣ Optimize & Communicate  
Explain that Spanner exposes *timestamp bounds* to let clients choose between latency and consistency, and that automatic timestamp ordering (ATP) reduces transaction conflicts. Conclude by emphasizing how TrueTime + Paxos yields ACID guarantees at scale—a key differentiator for FAANG‑grade data stores.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
