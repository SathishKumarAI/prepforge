---
qid: ing_1b807ff9e9__think__local
question: 'Explain: Audit and Compliance — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 416
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T04:31:37-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- *Audience*: engineers who know ML but not database internals.  
- *Goal*: explain why CDC matters for audit/compliance in an ML pipeline, not just data ingestion.  
- Assume a relational DB + streaming layer (Kafka/Kinesis) and a downstream ML service that needs immutable lineage.

**2️⃣ Adopt a mental model**  
Use the **“Data Lineage” diagram**:  
`Source → CDC → Stream → Feature Store → Model ↔ Audit Log`.  
Treat CDC as a bridge that guarantees every change is captured, timestamped, and version‑controlled.

**3️⃣ Step‑by‑step reasoning**  
1. Identify compliance needs (e.g., GDPR “right to audit”, financial regulations).  
2. Map data flows that must be auditable: raw inputs, transformed features, model outputs.  
3. Show how CDC records each DML event with metadata (user, timestamp, before/after state).  
4. Explain integration: CDC → message queue → feature store; each record gets a monotonically increasing key for versioning.  
5. Highlight the audit log: append‑only storage, cryptographic hash chaining, and access controls.  
6. Connect to ML: model training logs the exact feature snapshot used, enabling reproducibility.

**4️⃣ Common traps**  
- *Assuming CDC is “just” a backup*: it’s real‑time lineage, not redundancy.  
- *Ignoring latency*: high‑frequency changes can overwhelm streams if not throttled.  
- *Overlooking data privacy*: raw values in audit logs must be masked or encrypted.

**5️⃣ Sanity‑check & communicate**  
- Verify that every data change ends up in a tamper‑evident log.  
- Explain benefits: rollback, fraud detection, regulatory reporting.  
- End with a concise diagram and a quick “why it matters” bullet list for stakeholders.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
