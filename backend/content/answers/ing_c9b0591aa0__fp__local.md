---
qid: ing_c9b0591aa0__fp__local
question: 'Explain: Architecture — Ceph Documentation — Architecture \u2014 Ceph Documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 401
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:09:31-05:00'
sources: []
---

**Ceph’s Distributed Architecture – A First‑Principles View**

At its core, Ceph solves *scalable, fault‑tolerant storage* by **decentralizing all metadata and data placement decisions**.  
1. **CRUSH (Controlled Replication Under Scalable Hashing)**: Instead of a central namespace, each client computes where objects live using the same deterministic hash function. This eliminates bottlenecks and guarantees *O(log N)* lookups. The design follows the principle that *local computation beats global coordination* in large clusters.  
2. **Monitors (MONs)**: A small quorum of MON nodes maintains cluster state (placement maps, health). They are intentionally few to keep consensus cheap while still providing a single source of truth for the CRUSH map. The choice mirrors Raft/ Paxos: *few replicas, high availability*.  
3. **OSDs (Object Storage Daemons)**: Each physical disk runs an OSD that stores data and serves I/O. OSDs are stateless with respect to placement; they only store blobs identified by object IDs. This separation lets Ceph scale linearly—adding disks adds capacity without rebalancing metadata.  
4. **RADOS Gateway (RGW) / RBD**: Optional layers expose block, object or S3‑compatible APIs on top of the same CRUSH‑managed pool.

*Non‑obvious insight*: Because CRUSH is *deterministic*, a client can recover from any node failure without contacting MONs for each request. This lazy metadata lookup turns what would be a network hop into a local hash computation, dramatically reducing latency in write‑heavy workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
