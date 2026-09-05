---
qid: vq_d8c3aa93f8__fp__local
question: How can I change my Oracle password?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 370
total_tokens: 538
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:59:10-05:00'
sources: []
---

In an Oracle instance every **user** is a row in `DBA_USERS`.  
The column *PASSWORD* stores the hash of that user’s secret, not the
clear‑text value. When you issue

```sql
ALTER USER my_user IDENTIFIED BY new_password;
```

Oracle hashes *new_password* with its internal algorithm (PBKDF2‑HMAC‑SHA1 in 12c+), writes the digest into `DBA_USERS.PASSWORD`, and marks the account as *PASSWORD_EXPIRED = N*.  
The statement must be run by someone who can alter users (usually a DBA or the user themselves if they are allowed).  

Why does this work? The hash guarantees that the password is never
transmitted in plain text over the network, satisfying the principle of
**information security**: only the server can verify the digest.  
If you change the password via the *password file* (a separate OS‑level
file for privileged accounts), Oracle reads it on startup; this is how
`SYSDBA`/`SYSOPER` sessions are authenticated.

**Non‑obvious tip:** After a password change, any existing session that was logged in with the old password will **not** be invalidated automatically. You must either have those users reconnect or use `ALTER SYSTEM KILL SESSION` to force re‑authentication. This ensures that the new hash is used for all future logins and prevents a lingering “ghost” session from continuing to operate under stale credentials.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
