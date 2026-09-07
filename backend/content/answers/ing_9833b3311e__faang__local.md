---
qid: ing_9833b3311e__faang__local
question: 'Explain: CDC vs Events vs Event Sourcing — Change Data Capture (CDC) |
  System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 528
total_tokens: 770
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:38:44-05:00'
sources: []
---

**Clarify**  
You want the difference between **Change Data Capture (CDC)**, a generic **Events** stream, and **Event‑Sourcing** in a data‑system context.  
Assumptions: *“Events”* refers to any change notification (e.g., Kafka), not necessarily persisted as domain state. CDC is an operational technique; Event‑Sourcing is a persistence pattern.

---

**Approach**  
1. Define each term.  
2. Map their purposes and data flows.  
3. Highlight the trade‑offs in consistency, durability, and use cases.

---

**Depth**

| Concept | Core idea | Typical flow | Use‑case focus |
|---------|-----------|--------------|----------------|
| **CDC** | Capture DB row changes (INSERT/UPDATE/DELETE) via binlog or change stream. | Source → CDC engine → downstream (Kafka, data lake). | Replication, ETL, real‑time analytics. |
| **Events** | Arbitrary change messages emitted by any service. | Service emits → Event bus → Consumers. | Decoupled microservices, audit logs, UI updates. |
| **Event Sourcing** | Persist *every* domain event; derive current state by replaying events. | Domain → Event store (append‑only) → Query via snapshot or replay. | Complex business logic requiring full history, compliance, time‑travel queries. |

- **CDC** is operational: it mirrors existing schema, offers low latency but no semantics beyond “row changed.”  
- **Events** carry domain meaning; they may be idempotent and enriched with metadata.  
- **Event Sourcing** stores the *business* events as first class citizens, enabling rebuilds and auditability at cost of replay complexity (O(n) or via snapshots).

---

**Edge Cases**

- CDC fails on schema evolution without adapters.  
- Event storms can overwhelm consumers; need back‑pressure.  
- Event‑Sourced systems struggle with large event logs; snapshotting mitigates but adds maintenance.

---

**Optimize & Communicate**  

*Optimization:* Use compact binary formats (Avro/Protobuf) for events, compress CDC streams, and shard event stores.  
*Narrative:* “We treat CDC as the plumbing that keeps our data lake fresh, generic events as the semantic layer that drives business logic, and Event‑Sourcing as a durable ledger when every change must be auditable.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
