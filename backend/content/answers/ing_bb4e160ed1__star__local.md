---
qid: ing_bb4e160ed1__star__local
question: 'Explain: Two phase commit protocol — 2Phasecommit'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 373
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:45:41-05:00'
sources: []
---

**Situation:**  
While leading a team that built a federated learning platform for medical imaging, we hit a bottleneck when aggregating model updates from hospitals—any node failure meant the whole round stalled and corrupted our nightly checkpoints.

**Task:**  
I had to design a fault‑tolerant commit mechanism so each training round’s aggregated parameters could be safely stored across multiple storage nodes without risking data loss or inconsistency, all while keeping latency under 5 seconds for real‑time inference pipelines.

**Action:**  
I introduced a lightweight two‑phase commit (2PC) protocol. In the *prepare* phase, every storage node received a signed “ready” message and wrote its local copy of the aggregated weights to a temporary log. We used gRPC with protobufs for low‑latency messaging and added a quorum check (≥ 80% nodes ready). Once all nodes responded “OK,” the coordinator sent the *commit* command; each node atomically promoted the temp file to the final checkpoint, updating its metadata in a distributed key‑value store (etcd). If any node failed during prepare, we triggered an abort and rolled back local writes. We also leveraged optimistic locking on the model version number to avoid race conditions.

**Result:**  
The new 2PC scheme cut training round failures from ~12% to < 1%, reduced checkpoint latency by 30%, and ensured that every model snapshot was globally consistent. I learned how classic transaction protocols can be adapted for distributed ML pipelines, balancing strict consistency with the performance demands of real‑time inference.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
