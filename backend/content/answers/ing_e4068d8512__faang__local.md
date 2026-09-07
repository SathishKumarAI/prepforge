---
qid: ing_e4068d8512__faang__local
question: 'Explain: You know, people in a company throwing — Google I/O 2009 - Google
  Wave: Under the hood'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 546
total_tokens: 793
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:29:11-05:00'
sources: []
---

**Clarify**  
The interviewer wants an overview of *Google Wave* (the 2009 prototype) and how its architecture enabled real‑time collaboration. I’ll assume the audience knows basic web tech but not Wave’s internals, so I’ll focus on the data model, synchronization protocol, and scaling strategy.

---

**Approach**  
1. Outline the problem: many users editing a shared document simultaneously without conflicts.  
2. Break down the solution into three layers: (a) data representation – *operation‑based CRDTs*, (b) communication – *Google’s XMPP‑like “Wavelet” protocol*, (c) deployment – *distributed Google Cloud infrastructure*.  
3. Highlight key trade‑offs: eventual consistency vs. strong consistency, latency vs. bandwidth.

---

**Depth**  

1. **Model** – A Wave is a tree of *wavelets* (shards). Each element in a wavelet is an *Operation* (insert/delete) that carries a unique ID and causal timestamp. Using CRDTs guarantees convergence: operations are commutative, so any order yields the same state.

2. **Sync** – Clients publish ops to a *Wave Service* over WebSocket‑like `wsp` connections. The service runs a *Conflict‑free Replicated Data Type* engine that applies ops locally and pushes them to peers. Google’s “Operation Replay” protocol ensures no lost updates; each op is idempotent.

3. **Scale** – Wavelets are sharded across data centers; the Wave Service uses *consistent hashing* to route ops. A lightweight *presence server* tracks active users, while a *replay log* (similar to Google’s BigTable) stores all ops for durability and auditability.

---

**Edge Cases**  

- **Network partitions**: CRDTs avoid divergence but may cause temporary UI inconsistencies; we use optimistic UI updates with conflict markers.  
- **Large documents**: Chunking wavelets mitigates memory blowup; clients request only visible slices.  
- **Security**: Every op is signed; access control lists per wavelet enforce permissions.

---

**Optimize & Communicate**  

To reduce bandwidth, ops are compressed (delta encoding) and batched. For latency, a local “shadow” model lets users edit offline, queuing ops for later sync. I’d explain how these choices trade off consistency guarantees against responsiveness, which is the core design tension in real‑time collaboration systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
