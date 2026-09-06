---
qid: ing_7b0df57b36__fp__local
question: 'Explain: Caution — Example: Deploying Cassandra with a StatefulSet | Kubernetes'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 343
total_tokens: 519
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:26:23-05:00'
sources: []
---

**Why a StatefulSet is the wrong choice for Cassandra on K8s**

Cassandra’s core problem is *data persistence with strong consistency*.  
A pod in a StatefulSet gets a stable UID and network identity, but Kubernetes **does not guarantee that the node will always be scheduled to the same physical host or storage class**. If a replica dies, a new pod may land on a different machine and bind to a different persistent‑volume claim (PVC). The data on that PVC is unrelated; Cassandra will then attempt to join the ring with an inconsistent token range, leading to split‑brain, data loss, or cluster failure.

From an optimization perspective, Kubernetes’ node‑affinity and anti‑affinity rules are *heuristic* – they only try to spread pods for high availability. They cannot enforce the *exact* placement Cassandra needs: each replica must stay on the same host until it is intentionally drained. The deep principle here is that **stateful workloads require deterministic, physical locality guarantees**; Kubernetes’ abstractions (dynamic provisioning, self‑healing) interfere with that.

**Non‑obvious insight:** Even if you use `volumeClaimTemplates` to create PVCs, the underlying storage class may provision different disks each time. Cassandra’s anti‑entropy mechanisms will then see “new” data and trigger unnecessary repair traffic, consuming bandwidth and CPU for nothing. A proper deployment uses *hostPath* or a dedicated storage cluster (e.g., Ceph) with explicit node mapping, not the generic StatefulSet machinery.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
