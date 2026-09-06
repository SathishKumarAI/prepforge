---
qid: ing_eba553542a__think__local
question: 'Explain: Errors — GitHub - lib/pq: Go PostgreSQL driver for database/sql
  \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 204
output_tokens: 645
total_tokens: 849
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T16:34:37-05:00'
sources: []
---

**1️⃣ Clarify the problem & assumptions**

- *What exactly is happening?*  
  Ask: “Do you get a compile‑time error, runtime panic, or connection failure?”  
- *Which environment?*  
  Go version, PostgreSQL version, OS, and how you import `github.com/lib/pq`.  
- Assume the user has a basic Go project with `database/sql` and wants to connect to Postgres.

**2️⃣ Mental model: “driver → database/sql → PostgreSQL”**

1. `pq` registers itself as an SQL driver (`sql.Register("postgres", &pq.Driver{})`).  
2. Your code calls `sql.Open("postgres", dsn)` → driver parses DSN, opens a TCP/TLS connection.  
3. Errors bubble up from the driver (parsing, network, auth) or from PostgreSQL itself.

**3️⃣ Step‑by‑step reasoning**

- **Check imports:** `import _ "github.com/lib/pq"` (blank identifier for side‑effect).  
- **Verify DSN format:** `"postgres://user:pass@host:port/dbname?sslmode=disable"`.  
  - Wrong scheme → `pq: unsupported protocol`  
  - Missing credentials → auth error.  
- **Run with `go run -v`** to see if the driver is compiled in.  
- **Enable driver logging:** set `log.SetFlags(log.LstdFlags | log.Lshortfile)` and use a wrapper that logs `sql.DB` operations.  
- **Test connectivity outside Go:** `psql -h host -U user dbname`.  
  If this fails, the issue is network/credentials, not Go.  

**4️⃣ Common traps**

| Trap | Why it happens | Fix |
|------|----------------|-----|
| Forgetting `_` import | Driver never registers → “sql: unknown driver name” | Add `import _ "github.com/lib/pq"` |
| Using wrong DSN key (`sslmode=disable` vs. `sslmode=require`) | Postgres rejects TLS handshake | Match server config |
| Mixing `pq` with another driver (e.g., `pgx`) | Conflicting driver names | Use only one driver or alias |

**5️⃣ Sanity‑check & communicate**

- **Reproduce the error in a minimal program.**  
  If it still fails, the issue is isolated to driver usage.  
- **Explain the stack trace line by line:** point out whether the error originates from DSN parsing (`pq: invalid URI`), network (`dial tcp ...`), or PostgreSQL (`authentication failed`).  
- Summarize actionable steps: import correctly, validate DSN, test external connectivity, adjust `sslmode`, and check logs.  

By walking through this checklist you’ll pinpoint whether the fault lies in your Go code, the driver configuration, or the Postgres server itself.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
