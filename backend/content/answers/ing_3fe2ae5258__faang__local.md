---
qid: ing_3fe2ae5258__faang__local
question: 'Explain: Bulk imports with COPY [..] FROM STDIN — GitHub - lib/pq: Go PostgreSQL
  driver for database/sql \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 489
total_tokens: 746
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:12:30-05:00'
sources: []
---

**1️⃣ Clarify**  
The interviewer asks how the Go Postgres driver *lib/pq* handles a bulk load with `COPY … FROM STDIN`. I’ll confirm: we’re dealing with PostgreSQL’s binary/text COPY protocol, not CSV‑file imports; and the question focuses on streaming data from Go into the DB efficiently.

**2️⃣ Approach**  
Explain that lib/pq implements the COPY protocol via the *CopyIn* and *CopyFrom* helpers. The pattern is:

1. Call `db.Begin()` → start a transaction.  
2. Use `stmt, err := tx.Prepare(pq.CopyIn("table", "col1","col2"))`.  
3. Stream rows: `_, err = stmt.Exec(rowValues...)` inside a loop.  
4. Finish with `_, err = stmt.Exec()` (no args) to signal EOF, then `stmt.Close()`.  
5. Commit the transaction.

**3️⃣ Depth**  
*lib/pq* opens a special COPY‑IN connection, switching the underlying socket into binary mode. Each `Exec` writes a row in either text or binary format; the driver buffers until the buffer limit (default 64 kB) is reached, then flushes to PostgreSQL. Binary mode gives ~2× speed over text. Error handling: if PostgreSQL returns an error during flush, lib/pq propagates it and aborts the transaction.

**4️⃣ Edge Cases**  
- Transaction must be rolled back on failure; otherwise partial data may remain.  
- Large rows can overflow the buffer—use `SET copy_max_length` or send smaller batches.  
- Network hiccups: lib/pq retries only for transient errors.  
- Mixing `Exec` calls with other statements in the same transaction is disallowed.

**5️⃣ Optimize & Communicate**  
To improve throughput, batch rows (e.g., 10 k per Exec) and use binary mode. Parallelizing COPY across multiple tables or sharding data can further scale. I’d narrate this as: “We treat COPY like a bulk‑insert stream; lib/pq wraps the protocol so we can keep Go code simple while achieving near‑native PostgreSQL speed.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
