---
qid: ing_38942bf46c__think__local
question: 'Explain: Trigger-Based CDC — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 459
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:39:27-05:00'
sources: []
---

**Metacognitive Road‑Map for Explaining “Trigger‑Based CDC”**

1. **Clarify the scope & assumptions**  
   - Confirm the audience’s familiarity with relational DB concepts (triggers, WAL).  
   - Assume a typical RDBMS (e.g., PostgreSQL, MySQL) and that “CDC” refers to capturing row changes for downstream analytics or replication.  

2. **Choose a mental model**  
   - Think of CDC as an *event‑driven pipeline*: database → trigger → log table → consumer.  
   - Use the classic “producer‑consumer” diagram: triggers act as lightweight producers that append change records to a dedicated capture table.

3. **Step‑by‑step reasoning**  
   1. Define which DML operations (INSERT/UPDATE/DELETE) must be tracked.  
   2. For each, create an AFTER trigger that writes the before/after snapshot (or delta) into a CDC table.  
   3. Ensure the capture table is schema‑agnostic (generic columns: `id`, `op_type`, `timestamp`, `payload`).  
   4. Discuss idempotence and ordering guarantees (transaction commit vs. trigger firing).  
   5. Explain how downstream consumers poll or stream this table, then delete/mark processed rows to avoid reprocessing.

4. **Common pitfalls to flag**  
   - Over‑bloating the CDC table if triggers log excessive columns.  
   - Trigger latency affecting write throughput.  
   - Transaction rollback: triggers fire only after commit; mis‑understanding can lead to “ghost” events.  
   - Missing conflict resolution for concurrent updates.

5. **Sanity‑check & verbalise**  
   - Re‑state the flow in plain language: “When a row changes, the trigger writes an event record that other services read.”  
   - Verify that all edge cases (deletes, batch inserts) are covered.  
   - Use analogies (e.g., a “logbook” for every change) to help non‑technical stakeholders grasp the concept.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
