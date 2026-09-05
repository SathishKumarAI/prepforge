---
qid: vq_e875a630ac__local
question: WHAT IS AN IMPLICIT TRANSACTION?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 221
output_tokens: 354
total_tokens: 575
web_searches: 0
cost_usd: 0.0
sources: []
---

**Crux:**  
An implicit transaction is the unit of work that a database engine automatically wraps around every statement that modifies data—if you don’t explicitly start a `BEGIN … COMMIT` block, the DB still treats the operation as a single commit‑or‑rollback action.

**From the trenches:**  
In PostgreSQL I’ve seen implicit transactions bite when a long‑running `UPDATE` hits an index lock; if you had wrapped that update in an explicit transaction with a lower isolation level, you could have avoided the deadlock. MongoDB’s default “auto‑commit” on each write can be problematic: a multi‑document write that fails midway leaves one document updated and another not, because each `insert` is its own implicit transaction. In contrast, using a session with `startTransaction()` gives me full control over atomicity across collections.

**Trade‑offs I’ve weighed:**  
Implicit transactions are fast—no roundtrip to start/commit—but they lock the affected rows (or documents) for the duration of the statement, which can hurt concurrency in high‑throughput systems. Explicit transactions let you batch many statements and set isolation levels, but at the cost of extra network traffic and a higher chance of serialization failures. In production I usually keep operations simple: single‑row updates stay implicit; anything that touches multiple rows or needs repeatable reads gets an explicit block.

So, an implicit transaction is simply “the DB’s invisible commit” around each write, useful for speed but limited in scope and isolation control.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
