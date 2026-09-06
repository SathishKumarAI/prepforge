---
qid: ing_f4de9d3905__think__local
question: 'Explain: up to five global secondary indexes so — AWS re:Invent 2018: Amazon
  DynamoDB Under the Hood: How We Built a Hyper-Scale Database (DAT321)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 216
output_tokens: 476
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:10:02-05:00'
sources: []
---

**Metacognitive Road‑map for Answering the Question**

1. **Clarify & Set Assumptions**
   - Identify that the question asks *why* DynamoDB limits a table to five global secondary indexes (GSIs) in the 2018 re:Invent talk.
   - Assume the reader knows basic DynamoDB concepts (tables, primary keys, local vs. global secondary indexes).
   - Note that “under the hood” implies architecture‑level reasoning rather than API details.

2. **Choose a Mental Model**
   - Use a *resource‑budget* framework: each GSI consumes storage, read/write capacity, and maintenance overhead.
   - Combine this with a *distributed systems* perspective: partitioning, replication, consistency, and query planning.

3. **Step‑by‑Step Reasoning**
   1. Explain how DynamoDB stores GSIs as separate tables that mirror the base table’s data (shard + replica copies).
   2. Show that every write to the base table triggers writes to all active GSIs → linear cost in capacity units.
   3. Argue that more than five GSIs would dramatically increase storage and I/O, impacting latency and throughput.
   4. Discuss consistency: each GSI must be updated asynchronously; too many can lead to larger staleness windows.
   5. Reference the 2018 presentation’s mention of *“cost–benefit trade‑off”* and *“performance guarantees”*.

4. **Common Traps to Avoid**
   - Don’t conflate the API limit (five) with a hard performance bound; it’s a design decision.
   - Don’t ignore that AWS can change limits; focus on 2018 context.
   - Avoid over‑technical jargon without tying back to practical implications.

5. **Sanity Check & Communicate**
   - Re‑read the answer: does each point logically flow? Are we still answering *why* five?
   - Summarize in one sentence: “Five GSIs balance storage, throughput, and consistency overhead while keeping DynamoDB’s hyper‑scale guarantees.”
   - End with a quick example: “If you need more than five indexes, model the data differently or use multiple tables.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
