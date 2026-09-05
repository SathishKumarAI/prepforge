---
qid: vq_9c0947f263__fp__local
question: How can I become another user in Oracle?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 348
total_tokens: 517
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:48:10-05:00'
sources: []
---

In Oracle the *user* is a security principal that owns objects, holds privileges and carries session attributes (e.g., NLS settings).  
To act as another user you must **establish a new authentication context**—that is, supply credentials that prove you are that principal to the database engine.  

1. **Login with different credentials** – In SQL*Plus or any client, run `CONNECT other_user/password@db`. The network layer sends your supplied username and password to the listener; the instance authenticates via its password file (or OS auth).  
2. **Session‑level impersonation** – If you have DBA privileges you can `SET ROLE` or `ALTER SESSION SET CURRENT_SCHEMA = other_user`. This does *not* change authentication but changes object resolution and privilege checks, effectively acting as that user for DDL/DML purposes.  

The underlying principle is **authentication vs authorization**: Oracle separates the proof of identity (password check) from what you can do (privileges). Switching users respects this separation by creating a fresh authentication context; impersonation only re‑routes the current context to a different namespace, preserving the original credentials but altering effective privileges.  

*Non‑obvious insight*: `SET ROLE` does *not* grant additional privileges beyond those already granted to you via roles—Oracle evaluates the target role’s grants in your current session context. Thus, impersonation cannot bypass explicit privilege checks; it merely changes which object names resolve to which schemas.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
