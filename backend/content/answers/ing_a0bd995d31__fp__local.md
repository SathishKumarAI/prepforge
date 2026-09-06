---
qid: ing_a0bd995d31__fp__local
question: 'Explain: What CDC Captures — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 303
total_tokens: 479
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:47:36-05:00'
sources: []
---

**What CDC actually *captures***  
At its core, Change Data Capture (CDC) is a *delta‑oracle*: it records **only the minimal set of state transitions that transform one consistent snapshot into another**. In relational terms this means every INSERT, UPDATE, or DELETE that alters the data store’s surface representation—usually expressed as tuples with versioning metadata (timestamp, LSN, sequence number).  
Why must CDC do this? Because downstream systems (data warehouses, search indices, ML feature stores) cannot afford to replay entire tables for each refresh; they need a *linearizable* stream of operations that can be replayed idempotently. This is an instance of the **information‑theoretic principle of minimal sufficient statistics**: you keep just enough information to reconstruct future states without redundancy.

The deeper geometric insight is that CDC turns a static data surface into a **time‑parameterized manifold**. Each change point traces a path; by stitching these paths, downstream services can query *any* intermediate state, not just the latest one.  
A non‑obvious benefit: because CDC preserves original transaction boundaries, it allows *exact rollback or replay* for audit and model retraining—essential for ML pipelines that must reproduce results under different data conditions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
