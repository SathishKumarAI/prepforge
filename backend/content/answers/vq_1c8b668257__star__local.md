---
qid: vq_1c8b668257__star__local
question: Which of the following is not correct about Cursor ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 352
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:50:13-05:00'
sources: []
---

**Situation:**  
During a migration project at my previous company, we were moving a legacy reporting system from Oracle to PostgreSQL. The original codebase relied heavily on stored‑procedure cursors for iterating over large result sets and writing incremental updates.

**Task:**  
I was tasked with refactoring the cursor logic into efficient set‑based SQL while ensuring that business rules—especially transactional integrity—remained intact. I had to decide which cursor characteristics could be safely dropped or altered in PostgreSQL, where some Oracle cursor semantics differ.

**Action:**  
I started by profiling the cursor usage: most procedures opened a cursor, fetched rows one at a time, performed complex calculations, and closed it immediately. In PostgreSQL, I replaced these with `WITH` queries and window functions, eliminating the need for explicit open/close calls. Crucially, I noted that **cursor visibility is session‑scoped**; unlike Oracle’s global cursors, PostgreSQL does not expose a cursor name after commit unless declared `GLOBAL`. This meant I could drop the `GLOBAL` keyword without affecting functionality. I also removed redundant `FOR UPDATE` clauses because our application never performed row locking via cursors.

**Result:**  
The refactor reduced execution time from an average of 45 seconds per report to under 8 seconds—a 80% performance gain—and cut CPU usage by 35%. I learned that in PostgreSQL, **cursor names are not globally visible across sessions**, which was the key incorrect statement among options about cursor behavior.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
