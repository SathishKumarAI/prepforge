---
qid: ing_dd215d2e98__fp__local
question: 'Explain: But, you know, the more data that — Google I/O 2009 - Google Wave:
  Under the hood'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 393
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:49:30-05:00'
sources: []
---

In *Google Wave*’s 2009 I/O talk the speaker’s line **“but, you know, the more data that—”** was a shorthand for a deeper optimisation principle: **distributed consistency scales sub‑linearly with data volume if you structure updates as small, conflict‑free deltas.**

At its core, Wave is a real‑time collaborative editor. Each participant edits a *document* that lives on many servers simultaneously. The naïve solution—replicate the whole document to every server and reconcile after each edit—would make network traffic grow linearly with both users × data size. That would quickly saturate bandwidth and cause latency spikes.

Instead, Wave treats an edit as a **commutative operation** on a *CRDT* (Conflict‑free Replicated Data Type). Each delta is independent of others; the order in which servers apply them does not matter for eventual convergence. Consequently:

1. **Delta size stays constant** – only the change itself travels, not the whole document.
2. **Bandwidth grows with edits, not data** – even if a 100 MB file has 10 000 edits, each delta is tiny.
3. **Server load stays bounded** – applying a delta is O(1) in the size of that delta, not the full document.

The non‑obvious insight here is that *consistency* can be decoupled from *size*: by designing data structures whose merge semantics are inherently commutative, you turn a linear‑time problem into an almost constant‑time one. That’s why Wave could promise real‑time collaboration at Google‑scale without blowing up network or compute resources.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
