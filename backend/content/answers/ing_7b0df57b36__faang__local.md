---
qid: ing_7b0df57b36__faang__local
question: 'Explain: Caution — Example: Deploying Cassandra with a StatefulSet | Kubernetes'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 523
total_tokens: 762
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:30:19-05:00'
sources: []
---

**Clarify**  
We’re asked why deploying **Cassandra** on Kubernetes using a `StatefulSet` requires caution. Key assumptions: the cluster runs on public cloud or bare‑metal, we need persistent data, and we’ll use default Helm charts.

**Approach**  
1. Identify Cassandra’s requirements (stable network IDs, persistent storage, controlled rolling upgrades).  
2. Map those to Kubernetes primitives (`StatefulSet`, `PVCs`, headless services).  
3. Highlight pitfalls: storage latency, pod eviction, upgrade strategy, and cluster size constraints.

**Depth**  
- **Stable identities** – a `StatefulSet` gives each node a DNS name (`cassandra‑0.cassandra.default.svc`). Cassandra relies on consistent hostnames for gossip; any change breaks the ring.  
- **Persistent storage** – PVCs must be *ReadWriteOnce* and use fast disks (e.g., SSD). Using local volumes or slow block storage can throttle I/O, leading to timeouts.  
- **Rolling upgrades** – Cassandra requires a *rolling restart* with a *downtime‑free* strategy (`maxUnavailable=0`). Kubernetes may evict pods during node maintenance; setting `podDisruptionBudget` is essential.  
- **Cluster size limits** – Cassandra tolerates up to 200 nodes, but each pod consumes ~1 GB RAM + disk. Over‑provisioning leads to OOM kills.  

**Edge Cases**  
- Pod eviction on node pressure → data loss if not backed by SSD.  
- PVC reclamation after a crash → stale volumes may corrupt the cluster.  
- Helm defaults (`replicaCount=3`) might be too low for production; mis‑configuring `storageClass` can lead to shared disks and write contention.

**Optimize & Communicate**  
Recommend:  
1. Use a dedicated `StorageClass` with SSDs, set `volumeBindingMode=WaitForFirstConsumer`.  
2. Define a strict `PodDisruptionBudget (maxUnavailable=0)`.  
3. Implement health checks (`cassandra-ready`, `cassandra-gossip`) and a pre‑stop hook to drain the node.  
4. Document upgrade steps: stop, upgrade image, restart one pod at a time, verify ring before proceeding.

By articulating constraints, mapping them to Kubernetes features, and outlining safeguards, we demonstrate clear reasoning—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
