---
qid: ing_03a25e59d3__faang__local
question: 'Explain: Okay. Um, and we have actually managed — Google I/O 2009 - Google
  Wave: Under the hood'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 584
total_tokens: 832
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:52:43-05:00'
sources: []
---

**Clarify**  
You’re asking me to explain how *Google Wave* worked internally, especially what happened “under the hood” when a user typed or sent a message in 2009. I’ll assume you want an overview of its real‑time collaboration engine (the Wavelet protocol), data model, and scalability tricks—not a line‑by‑line code walk‑through.

**Approach**  
1. Outline the key components: client UI → WebSocket/Long‑polling → Wave server cluster → Storage & consistency layer.  
2. Explain the *Wavelet* abstraction (the mutable document), operation‐based OT, and how edits are merged.  
3. Touch on scalability: sharding, distributed consensus, and eventual consistency guarantees.

**Depth**  
- **Data model**: A *wave* is a collection of *wavelets*, each wavelet is an ordered list of operations (ops). Ops are immutable JSON blobs describing insert/delete/metadata changes.  
- **Real‑time sync**: Clients open a long‑poll or WebSocket to a “Wave server”. When an op arrives, the server broadcasts it to all participants; clients apply ops via Operational Transformation (OT) ensuring convergence even with concurrent edits.  
- **Persistence & consistency**: Ops are appended to immutable logs stored in Google’s BigTable shards per wavelet ID. A Paxos‑like leader per shard guarantees order; conflicts are resolved by OT rules, not by locking.  
- **Scalability tricks**:  
  - *Sharding*: Wavelets distributed across hundreds of servers; each server handles a small fraction of total ops (~10⁶ ops/s).  
  - *Batching & compression*: Ops are batched per client and compressed with protobuf before network send.  
  - *Lazy loading*: Only wavelets the user is actively viewing are kept in RAM; others are fetched on demand.

**Edge cases**  
- **Network partitions**: Clients offline replay queued ops once re‑connected, OT ensures convergence.  
- **Concurrent edits of same text span**: OT transforms incoming ops against local pending ops to preserve intent.  
- **Large wavelets (>10k ops)**: History pruning & snapshotting keep memory usage bounded.

**Optimize & communicate**  
If time allowed, I’d mention the *Wavelet* API (Java, Python) and how Google later open‑sourced parts of the engine for research. I would also note that while OT was a good fit then, modern systems often use CRDTs for simpler implementation. This structured walk shows clear problem restatement, planning, technical depth, edge awareness, and concise communication—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
