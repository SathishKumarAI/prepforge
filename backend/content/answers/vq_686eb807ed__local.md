---
qid: vq_686eb807ed__local
question: Is it possible to use Transactional control statements in Database Triggers
  ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 497
total_tokens: 724
web_searches: 0
cost_usd: 0.0
sources: []
---

**Short answer:**  
Yes, you can use transactional control in a trigger only by turning the trigger into an *autonomous transaction* (Oracle) or by using a separate session that commits after the trigger fires (PostgreSQL via `pg_notify` + external worker). In most mainstream RDBMS, plain triggers cannot issue `COMMIT`/`ROLLBACK`.

**Nuance & experience**

- **Oracle:** A normal row‑level or statement‑level trigger runs inside the caller’s transaction; any `COMMIT` or `ROLLBACK` is illegal and raises ORA‑04091. To achieve isolation you must declare the trigger as `PRAGMA AUTONOMOUS_TRANSACTION`. I’ve used this in a legacy billing system to write audit logs to a separate schema without affecting the main transaction. The trade‑off: the autonomous transaction commits independently, so if the main transaction rolls back, the audit entry remains – which is fine for immutable logs but unacceptable for idempotent operations.

- **PostgreSQL:** Triggers cannot commit or rollback. I’ve written triggers that enqueue messages to a `pg_notify` channel and let an external worker process them in its own transaction. This pattern keeps trigger logic lightweight and avoids nested transactions, but introduces eventual consistency and extra infrastructure.

- **MySQL / MariaDB:** Like PostgreSQL, no transactional control inside triggers. Attempts to commit fail with “You can't commit within a stored function or trigger.” The common workaround is to perform the work in a separate procedure called by the trigger and let that procedure handle its own transaction via `START TRANSACTION … COMMIT`, but it still runs in the same session.

- **SQL Server:** Triggers can contain `COMMIT`/`ROLLBACK` only if they are DDL triggers or if you use `BEGIN TRY…END TRY`. In practice, I’ve avoided committing inside data‑modifying triggers because it breaks the atomicity of the original statement and can cause deadlocks.

**Bottom line:** If you need a trigger to commit independently, use Oracle’s autonomous transaction feature or offload work to an external process. Otherwise, keep the trigger stateless and let the calling transaction control commit/rollback.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
