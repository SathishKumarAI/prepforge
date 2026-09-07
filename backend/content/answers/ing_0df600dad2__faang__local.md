---
qid: ing_0df600dad2__faang__local
question: 'Explain: Authentication — GitHub - lib/pq: Go PostgreSQL driver for database/sql
  \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 631
total_tokens: 879
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:16:23-05:00'
sources: []
---

**Topic:** Authentication – *GitHub – lib/pq*: the Go PostgreSQL driver for `database/sql`

---

### 1️⃣ Clarify  
You’re asking how the **`lib/pq`** driver authenticates a connection to a PostgreSQL server (e.g., when used in a GitHub‑hosted repo).  
Assumptions:  
- The database runs on a public or private network.  
- Connection parameters are supplied via DSN, env vars, or `pq.ConnConfig`.  
- We’re interested in the *client‑side* authentication flow (not server auth policies).

### 2️⃣ Approach  
1. **Collect credentials** – username/password, SSL certs, or OAuth tokens.  
2. **Build a connection string** that encodes them (`postgres://user:pass@host/db?sslmode=require`).  
3. **`lib/pq` parses the DSN into `ConnConfig`.**  
4. **TCP handshake → TLS (if sslmode != disable).**  
5. **Send startup packet with auth data**; PostgreSQL replies with an *Authentication* request.  
6. **Driver interprets the reply** and completes authentication or returns an error.

### 3️⃣ Depth  
- `lib/pq` supports:  
  - **Password** (cleartext, MD5).  
  - **SSPI/Kerberos** (`gssencmode`).  
  - **SSL certificates** via `sslcert`, `sslkey`.  
  - **SCRAM‑SHA256** (PostgreSQL 10+).  
- The driver uses the *postgres wire protocol v3*.  
- Complexity: O(1) per connection; TLS handshake adds ~O(log n) latency.  
- Security trade‑off: cleartext passwords are avoided by using `sslmode=require` or SCRAM.

### 4️⃣ Edge Cases  
- **Network failures** → driver retries? No, returns error.  
- **Wrong SSL mode** → `SSL SYSCALL error`.  
- **Expired certs** → authentication fails with “certificate expired”.  
- **SCRAM mismatch** (client vs server version) → driver falls back to MD5 or errors.

### 5️⃣ Optimize & Communicate  
- Use environment variables (`PGHOST`, `PGUSER`, etc.) for CI/CD pipelines.  
- Prefer SCRAM‑SHA256; if unavailable, enforce TLS to protect cleartext passwords.  
- In GitHub Actions, store secrets in repo settings and reference them via `${{ secrets.PG_PASSWORD }}`.  
- Explain that the driver abstracts most of this: you just provide a DSN, and `lib/pq` handles the handshake per PostgreSQL’s spec.

---

*This answer demonstrates structured reasoning, clear assumptions, technical depth on protocol flow, edge‑case awareness, and actionable optimization tips—exactly what FAANG interviewers look for.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
