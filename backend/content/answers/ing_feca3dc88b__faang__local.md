---
qid: ing_feca3dc88b__faang__local
question: 'Explain: So there''s a Wave office hour earlier — Google I/O 2009 - Google
  Wave: Under the hood'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 481
total_tokens: 727
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:32:28-05:00'
sources: []
---

**Clarify**  
You want a concise technical overview of how *Google Wave* was built—its core architecture, protocols, and key design choices. We’ll assume you’re familiar with distributed systems and real‑time collaboration basics.

**Approach**  
1. Outline the high‑level stack (client, server, sync layer).  
2. Dive into the data model: atomic operations on a *Wavelet*.  
3. Explain how Google used OT/CRDT for conflict resolution.  
4. Touch on scalability: sharding, caching, and fault tolerance.

**Depth**  
- **Client‑Server**: Each browser runs a lightweight JavaScript engine that renders waves locally. The server exposes a RESTful API plus a binary *XMPP*‑based stream for real‑time ops.  
- **Wavelet Model**: A wave is partitioned into wavelets (subdocuments). Every op is an atomic delta (`AddBlip`, `EditBlip`) with a unique `opId` and causal vector clock.  
- **Conflict Resolution**: Google opted for *Operational Transformation* (OT) over CRDTs; ops are transformed against concurrent ones using the *transform matrix* to guarantee convergence.  
- **Scalability**: Wavelets are sharded across *Wave Zones*. Each zone runs a stateless HTTP gateway + a stateful *Wave Store* (Bigtable‑backed). Caching layers (Memcached) reduce read latency; eventual consistency is accepted for non‑critical metadata.

**Edge Cases**  
- Network partitions → ops queued locally and replayed once connectivity returns.  
- Large blobs (images) are stored in GCS, referenced by wavelets to avoid duplication.  
- Authentication tokens can expire mid‑session—handled via silent refresh.

**Optimize & Communicate**  
Future work could swap OT for CRDTs to simplify server logic and improve offline merge quality. When presenting, highlight the trade‑off: OT gives strong consistency with complex transforms; CRDT offers simpler merges at potential cost of larger data footprints. This narrative shows clear problem framing, architectural depth, and thoughtful edge‑case handling—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
