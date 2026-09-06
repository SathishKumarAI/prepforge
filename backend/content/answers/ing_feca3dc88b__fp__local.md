---
qid: ing_feca3dc88b__fp__local
question: 'Explain: So there''s a Wave office hour earlier — Google I/O 2009 - Google
  Wave: Under the hood'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 433
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:01:36-05:00'
sources: []
---

**Why Google Wave is structured the way it is**

At its core, a *wave* is a *distributed data structure* that must support *real‑time collaboration* over an unreliable network. The fundamental problem is to reconcile **concurrent edits** from many clients with minimal latency while guaranteeing eventual consistency.

1. **Operational Transformation (OT)**  
   OT treats each edit as an operation that can be *transformed* against concurrent operations. This guarantees that all replicas converge, because the transformation rules preserve intent regardless of arrival order. It also keeps bandwidth low: only deltas are sent.

2. **Fine‑grained “blobs”**  
   Instead of sending a whole document, Wave splits it into *blobs* (e.g., text runs, attachments). Each blob is an independent OT stream, so edits to one part don’t block others. This mirrors the *decomposition principle* in distributed systems: keep units small enough for concurrency but large enough to be meaningful.

3. **Hierarchical context**  
   Blobs are organized into a tree (wave → wavelet → blob). Contextual information (e.g., permissions, history) travels with each node, enabling efficient conflict resolution and access control without global lookups.

4. **Probabilistic consistency guarantees**  
   Wave accepts that *strong* consistency is impossible under the CAP theorem in a highly available setting. Instead it offers *eventual* consistency backed by *conflict markers* that surface to users only when necessary, reducing cognitive load.

---

### Non‑obvious insight

Most people think OT is merely a trick for text editors. In Wave, OT’s power comes from **embedding context** into the transformation itself: each operation carries metadata (author, timestamp, context stack). This turns OT into a *semantic* reconciler rather than a purely syntactic one, allowing features like “merge conflict” resolution to be user‑friendly and localized—something that naive OT implementations miss.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
