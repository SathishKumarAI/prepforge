---
qid: ing_d7d98fb876__fp__local
question: 'Explain: Write Path — System Design Interview Cheat Sheet - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 530
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:39:19-05:00'
sources: []
---

### Why the **write path** matters

When a client issues `PUT/POST`, the *system* must guarantee that data is stored durably, remains consistent for subsequent reads, and recovers gracefully after failure. These requirements boil down to **durability + atomicity**—two pillars of ACID—and impose constraints on how we traverse the storage stack.

1. **Atomicity → Ordered log‑write**  
   Every write must be appended to a *write-ahead log* (WAL) before any in‑memory mutation. The WAL guarantees that, even if a crash occurs mid‑update, replaying the log restores the system to the last committed state. Without this order, partial writes could corrupt indexes or data blocks.

2. **Durability → Dual‑storage**  
   After the WAL flush, the updated data must be persisted in both *hot* (SSD/DRAM) and *cold* (HDD/object store) layers. The write path therefore consists of:
   - **Write to WAL** – guarantees recoverability.
   - **Update hot cache / memory‑resident index** – enables fast reads.
   - **Persist to cold storage** – ensures long‑term durability.

3. **Consistency → Replication & quorum**  
   To avoid stale reads, the write path must propagate changes to replicas before acknowledging success (or use a *read‑your‑writes* strategy). This introduces a *write‑ahead replication* step: each replica receives the WAL entry, applies it locally, and acknowledges back. Only after a quorum of acknowledgments does the client get “OK”.

### Non‑obvious insight

Most designers focus on read‑latency; the write path is often glossed over. Yet **the order of operations (WAL → cache → replica) is dictated by the *information‑flow principle***: any system that writes data must first make a durable, recoverable copy before exposing it to further state changes. Skipping or reordering these steps breaks the guarantee that “once written, always readable”, and leads to subtle bugs like lost updates or inconsistent indexes—exactly what production outages reveal.

---

**Key takeaway:**  
The write path is a *chain of durability guarantees*; its strict order (log → cache → replica) stems from fundamental consistency principles, not convenience. Designing it right prevents data loss, ensures recoverability, and keeps read‑side logic simple.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
