---
qid: vq_b0a478ba00__fp__local
question: How does one loop through tables in PL/SQL?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 402
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:51:50-05:00'
sources: []
---

**Looping through tables in PL/SQL – from first principles**

The fundamental problem is *iterating over a relational result set* while preserving **determinism**, **resource efficiency**, and **error isolation**.  
A cursor‑for‑loop (`FOR rec IN SELECT … LOOP … END LOOP;`) embodies this by:

1. **Implicit cursor creation** – the `SELECT` is parsed once, the plan cached.
2. **Row‑by‑row fetch** – each iteration pulls one row from the buffer, ensuring low memory use.
3. **Automatic closure** – when the loop ends, the cursor closes, freeing resources.

For bulk operations (`FORALL`, `BULK COLLECT`) we shift to *set‑based* semantics:  
- **`BULK COLLECT`** fetches up to a specified number of rows into a collection in one round‑trip.  
- **`FORALL`** then applies an DML statement over the collection, reducing context switches.

The deeper principle is **batching vs streaming**: streaming (row‑by‑row) guarantees minimal memory but many round‑trips; batching reduces I/O at the cost of higher memory consumption. Choosing between them is a classic *time–space trade‑off* in database engines.

**Non‑obvious insight:**  
When using `BULK COLLECT` you can set a *limit* (`INTO collection LIMIT n`) and combine it with `FORALL`. This hybrid pattern lets you process arbitrarily large tables in manageable chunks, avoiding the “ORA‑14224: too many rows fetched into collection” error while still reaping bulk‑DML performance. It’s essentially an explicit implementation of *pipelined processing* that Oracle hides behind its cursor‑for‑loop abstraction.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
