---
qid: vq_ece6ed7d1c__think__local
question: What are ‘inserted’ and ‘deleted’ tables (aka. magic tables)?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 422
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T02:38:09-05:00'
sources: []
---

**1️⃣ Clarify the context & assumptions**  
- Ask whether “magic tables” refers to CDC (Change Data Capture) or a specific data‑engineering framework (e.g., Snowflake).  
- Assume they’re asking about tables that capture row‑level changes: inserted, updated, deleted.  

**2️⃣ Adopt a mental model**  
- Think of *change tracking* as three streams: **Insert**, **Update**, **Delete**.  
- In many systems these are implemented as separate “magic” or “delta” tables that store the affected rows with metadata (timestamp, operation type).  

**3️⃣ Step‑by‑step reasoning**  
1. Identify the source of change (e.g., Kafka topic, CDC log).  
2. For each event, route the payload to the appropriate magic table based on its operation flag.  
3. In the *inserted* table: store full row + load time.  
4. In the *deleted* table: store primary key(s) and deletion timestamp (often no row data).  
5. Optionally maintain an *updated* table that contains before‑and‑after snapshots or a delta.  

**4️⃣ Common traps to avoid**  
- Mixing up “inserted” vs “updated”: both may contain new rows but differ semantically.  
- Forgetting to purge old records from the magic tables, leading to bloat.  
- Ignoring idempotency: duplicate CDC events can corrupt the streams if not deduped.  

**5️⃣ Sanity‑check & verbalize**  
- Verify that each magic table contains exactly one operation type and that its schema reflects that (e.g., deleted only has PKs).  
- Explain to a peer: “We keep three lightweight tables—Inserted, Deleted, Updated—to materialise CDC events. They act as staging buffers for downstream pipelines.”  

This framework lets you answer the question clearly while highlighting key implementation concerns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
