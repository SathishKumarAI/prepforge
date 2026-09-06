---
qid: ing_a0bd995d31__think__local
question: 'Explain: What CDC Captures — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 577
total_tokens: 772
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:42:40-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
- The user wants an *explanation* of “What CDC captures” in a machine‑learning / system‑design context.  
- Assume they’re familiar with basic DB concepts but not the specifics of CDC pipelines.  
- They likely want to know *what data is actually moved*, *why it matters for ML workloads*, and *how it’s typically captured*.

**2️⃣ Adopt a mental model: “Data → Transformation → Model”**  
- Think of CDC as the **data‑in** step that feeds downstream analytics/ML.  
- Break down what “captured” means: changes to rows (insert, update, delete), timestamps, metadata, and the *context* in which those changes occur.

**3️⃣ Step‑by‑step reasoning**  

| Step | What to explain |
|------|----------------|
| **a)** Types of changes | INSERT → new records; UPDATE → modified columns; DELETE → removed rows. |
| **b)** Granularity | Row‑level (full row snapshot) vs column‑level (only changed fields). |
| **c)** Payload format | Log records, binary logs, change tables, or streaming APIs. |
| **d)** Metadata | Transaction ID, commit timestamp, source table, schema version. |
| **e)** Consistency guarantees | ACID vs eventual consistency; snapshot isolation for ML training data. |
| **f)** Why it matters for ML | Enables real‑time feature updates, incremental model retraining, and data drift monitoring. |

**4️⃣ Common pitfalls to avoid**  
- *Assuming CDC captures only inserts*: forget updates/deletes.  
- *Ignoring metadata*: without timestamps you can’t order events or detect stale features.  
- *Overlooking schema evolution*: new columns mean your feature pipeline must adapt.  
- *Misreading “change” as “difference”*: CDC often stores the entire new row, not just diffs.

**5️⃣ Sanity‑check & verbalize**  

1. **Rephrase**: “CDC captures every modification to a table—new rows, altered rows (with old/new values), and deletions—along with contextual metadata like timestamps and transaction IDs.”  
2. **Check against use cases**: Does this explain why we stream to feature stores? Yes.  
3. **Close the loop**: Highlight that for ML pipelines, this continuous stream allows incremental updates without full re‑reads, preserving latency and resource usage.  

Use this scaffold whenever you need to explain CDC in a design or ML context—clarify scope, decompose into change types, attach metadata, warn about common missteps, then validate by mapping back to real‑world benefits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
