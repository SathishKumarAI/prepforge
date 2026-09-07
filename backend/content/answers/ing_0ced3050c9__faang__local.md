---
qid: ing_0ced3050c9__faang__local
question: 'Explain: Uh, when you want to append a — Google I/O 2009 - Google Wave:
  Under the hood'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 512
total_tokens: 759
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:13:59-05:00'
sources: []
---

**Clarify**  
The interviewer wants an overview of *Google Wave* (the 2009 collaboration platform) and how it works internally—particularly its real‑time sync, data model, and server architecture. I’ll assume they’re interested in the core concepts rather than a full implementation.

---

### Approach
1. **Data Model** – Explain the immutable “wavelet” structure.
2. **Concurrency Control** – Describe Operational Transformation (OT) as the engine that resolves conflicts.
3. **Transport & Sync** – Outline how clients push and pull changes over WebSocket/long‑polling.
4. **Scalability** – Touch on sharding, replication, and caching.

---

### Depth

| Layer | Key Idea | Implementation Detail |
|-------|----------|----------------------|
| **Wavelet (Document)** | Immutable, versioned JSON blob | Each change creates a new wavelet revision; only diffs are stored. |
| **Operational Transformation** | Transform concurrent ops into consistent state | `transform(opA, opB)` ensures that applying A then B yields same result as B then A. Handles insert/delete/text/metadata ops. |
| **Client‑Server Protocol** | Push‑pull over HTTP/WebSocket | Clients send a *client‑op* bundle; server assigns a sequence number and broadcasts to peers via *server‑ops*. Uses “ack” semantics for reliability. |
| **Consistency Guarantees** | Eventual consistency with strong ordering | All clients receive ops in the same order; OT guarantees convergence. |
| **Scalability** | Shard per domain, cache recent wavelets | Each shard hosts a subset of users; replication keeps reads fast; a CDN caches static assets. |

---

### Edge Cases
- **Concurrent inserts at same position** – OT resolves by ordering ops via timestamps/sequence numbers.  
- **Network partitions** – Clients queue ops locally and reconcile on reconnect.  
- **Large wavelets** – Lazy loading of older revisions to avoid memory blowup.

---

### Optimize & Communicate

*Improvements*: Use a CRDT (Conflict‑free Replicated Data Type) for easier scaling; compress diffs with delta‑encoding.  
*Communication*: Emphasize that the beauty of Wave is *real‑time, conflict‑free collaboration* achieved by OT and immutable revisions—an elegant blend of distributed systems theory and practical engineering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
