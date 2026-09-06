---
qid: ing_b15f55d8ee__fp__local
question: 'Explain: NOTICE errors — GitHub - lib/pq: Go PostgreSQL driver for database/sql
  \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 405
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:21:13-05:00'
sources: []
---

**NOTICE errors in the `pq` PostgreSQL driver**

The `pq` package implements Go’s `database/sql` interface over libpq.  
When a query triggers a *NOTICE* (e.g., `RAISE NOTICE …`), libpq emits a separate
message that carries no error code but a human‑readable string.  
From the standpoint of the SQL protocol, a NOTICE is **not** a failure; it’s a
side channel used by PostgreSQL to convey diagnostic information.  
The driver therefore treats it as a *log* rather than an `error`.  

Why must this distinction be preserved?  
1. **Transactional integrity**: A NOTICE does not alter the transaction state, so propagating it as an error would abort the transaction unnecessarily.  
2. **Interface contract**: `database/sql` expects `QueryRow`, `Exec`, etc., to return `error`. Mixing diagnostics into that channel would violate the API’s contract and break client code that relies on errors for flow control.  

Implementation detail: `pq` buffers NOTICE messages in a separate goroutine that reads from the backend’s notice receiver (`pgconn.NoticeReceiver`). The buffered notices are then exposed via the `NoticeMsg()` method or logged to the driver’s logger. Because they’re asynchronous, the driver must avoid race conditions—hence the use of a channel and a dedicated goroutine.

**Non‑obvious insight**  
Most people think PostgreSQL “errors” are only fatal messages. In reality, the protocol distinguishes *notifications* (NOTIFY/NOTICE) from errors. A robust driver must therefore provide a plumbing layer that keeps these streams separate; otherwise, client code would receive spurious failures for benign diagnostics—a subtle bug that can surface only under heavy logging or debugging sessions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
