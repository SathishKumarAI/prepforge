---
qid: ing_f1e0dc3d4e__faang__local
question: 'Explain: Examples — CAP Theorem | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 503
total_tokens: 736
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:01:56-05:00'
sources: []
---

**Clarify**  
The question asks for concrete examples that illustrate the *CAP theorem* in real‑world system design—i.e., how consistency, availability, and partition tolerance trade‑offs manifest when building distributed services.

**Approach**  
1. Identify a familiar product (e.g., social‑media feed).  
2. Map each CAP dimension to observable behaviors: data freshness, latency, and fault handling.  
3. Walk through two concrete designs that prioritize different pairs of properties.  

**Depth**  
- **C + A design (CP in practice)** – *Event‑driven microservice with a single leader.*  
  - *Consistency*: All writes go to the leader; followers replay logs, guaranteeing strong consistency.  
  - *Availability*: During a network partition, followers refuse reads/writes until reconnection—system is unavailable but data remains correct.  
  - *Partition Tolerance*: Achieved by using consensus (Raft/Etcd).  
- **C + P design (CP‑like)** – *Distributed cache with synchronous replication.*  
  - *Consistency*: Cache updates propagate to all replicas before acknowledging the client.  
  - *Availability*: If a node fails, others still serve stale data—availability preserved at cost of potential inconsistency during partitions.  

- **A + P design (AP)** – *Eventual‑consistency key‑value store (e.g., DynamoDB).*  
  - *Availability*: Each partition can answer queries locally; writes are accepted even when some nodes are down.  
  - *Partition Tolerance*: System continues functioning despite network splits.  
  - *Consistency*: Reads may return stale values until anti‑entropy processes reconcile divergences.

**Edge Cases**  
- Partition duration > recovery time → CP systems become unavailable longer than AP.  
- Heavy write load on leader → CP becomes a bottleneck; AP scales better but sacrifices immediate correctness.

**Optimize & Communicate**  
Explain that choosing the right pair depends on business constraints: e.g., banking requires CP (consistency first), while social feeds tolerate eventual consistency for higher availability. Highlight how monitoring metrics (latency, read/write success rates) guide tuning of replication factors and quorum sizes. This structured narrative demonstrates clear reasoning, technical depth, and practical awareness—key signals for a FAANG interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
