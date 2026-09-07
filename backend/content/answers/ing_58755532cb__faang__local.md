---
qid: ing_58755532cb__faang__local
question: 'Explain: So we want to be able to — Google I/O 2009 - Google Wave: Under
  the hood'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 417
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:09:13-05:00'
sources: []
---

**Clarify**  
The interview asks for a high‑level explanation of how *Google Wave* was engineered (from the 2009 Google I/O talk). Key points to confirm: we’re describing the client‑server architecture, real‑time collaboration model, and data synchronization strategy—not a line‑by‑line code walk.  

**Approach**  
1. **Client–Server Model** – Clients send *operations* (insert/delete/format) as lightweight messages.  
2. **Operational Transformation (OT)** – Server normalizes concurrent edits so all replicas converge to the same state.  
3. **Event Streaming & Pub/Sub** – Changes are broadcast in real time; a publish‑subscribe layer keeps clients updated with minimal latency.  
4. **Data Storage** – A versioned, immutable log stores every operation (for audit and rollback).  

**Depth**  
- *OT* guarantees consistency: each client’s local changes are transformed against remote operations before application. Complexity is O(n) per message but optimized via tree‑based diffs.  
- The server runs a **wavelet** partitioning scheme; each wavelet is an independent OT domain, reducing contention.  
- For offline support, the client buffers edits locally and replays them once reconnected, leveraging OT’s commutativity.  

**Edge Cases**  
- Simultaneous conflicting deletes: OT resolves deterministically using operation ordering.  
- Network partitions: eventual consistency achieved by replaying buffered ops on reconnection.  
- Large documents: chunked streaming prevents memory blow‑up.  

**Optimize & Communicate**  
Future improvements could replace OT with CRDTs for easier horizontal scaling and reduced server load. In an interview, I’d emphasize the trade‑off between latency (OT) and ease of deployment (CRDT). This concise, structured narrative demonstrates clear problem framing, technical depth, and awareness of real‑world constraints—key signals for a FAANG interviewer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
