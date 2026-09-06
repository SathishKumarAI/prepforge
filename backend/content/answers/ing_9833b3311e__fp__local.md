---
qid: ing_9833b3311e__fp__local
question: 'Explain: CDC vs Events vs Event Sourcing — Change Data Capture (CDC) |
  System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 576
total_tokens: 755
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:29:41-05:00'
sources: []
---

**The core problem:**  
A system must record *state transitions* so that downstream services can react, audit, or rebuild the state later. The solution space is defined by *what* we keep (raw change vs. full event) and *how* we store it.

| Technique | What is captured | How it’s stored | Typical use |
|-----------|------------------|-----------------|-------------|
| **CDC**  | Low‑level data mutations (`INSERT/UPDATE/DELETE` rows). | Append‑only logs (binlog, WAL). | Replication, ETL, real‑time analytics. |
| **Event** | Semantically rich actions (“OrderPlaced”, “PaymentReceived”). | Immutable event stream per aggregate or domain. | CQRS, microservice communication. |
| **Event Sourcing** | Same events as above, but the *source of truth* is the event log itself. | The event store is the canonical state; snapshots are derived. | Domain‑driven design, audit trails, replayability. |

### Why they differ

1. **Granularity & Semantics**  
   - CDC gives you the *exact* data change but no business meaning.  
   - Events encode intent, making downstream logic simpler and decoupled.

2. **Consistency Guarantees**  
   - CDC is usually *weakly consistent*; a consumer may see out‑of‑order changes unless it replays in transaction order.  
   - Event streams are strictly ordered per partition, ensuring linearizable semantics for that aggregate.

3. **Idempotence & Replayability**  
   - CDC logs must be de‑duplicated manually (often via primary keys).  
   - Events carry a unique ID; replaying an event stream automatically restores state without side effects.

### Non‑obvious insight

The *real* advantage of Event Sourcing is not just auditability but the ability to treat **time as first class**. Since every state change is an immutable record, you can reconstruct *any* past version of the aggregate in O(log n) by binary‑searching snapshots and replaying subsequent events. CDC cannot provide this because it only stores the delta; without a full snapshot you’d need to apply all intervening changes, which grows linearly with time.

In short:  
- **CDC** → “What changed?” (low level, fast replication).  
- **Events** → “What happened?” (business intent, decoupled).  
- **Event Sourcing** → “All history is the truth” (state as replayable event stream).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
