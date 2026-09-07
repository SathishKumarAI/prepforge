---
qid: ing_b15f55d8ee__faang__local
question: 'Explain: NOTICE errors — GitHub - lib/pq: Go PostgreSQL driver for database/sql
  \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 593
total_tokens: 842
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:36:18-05:00'
sources: []
---

**Clarify**  
You’re seeing “NOTICE” messages from the `lib/pq` PostgreSQL driver while running a Go application that uses `database/sql`. These are not compile‑time errors; they’re runtime notifications emitted by the server (e.g., deprecation warnings, autovacuum info). I’ll assume you want to understand why they appear and how to handle or suppress them.

**Approach**  
1. Explain what a NOTICE is in PostgreSQL.  
2. Show where `lib/pq` exposes these messages.  
3. Discuss common causes (e.g., legacy functions, vacuum events).  
4. Provide practical ways to ignore or log them properly.

**Depth**  

| Step | Detail |
|------|--------|
| 1️⃣ Notice definition | PostgreSQL emits `NOTICE` via the server’s message queue; it has severity “NOTICE” and is sent on a per‑session basis. It’s meant for informational purposes, not errors. |
| 2️⃣ lib/pq handling | The driver implements `database/sql/driver.Conn`, exposing a `Conn` that implements `driver.ConnBeginTx`. When the server sends a NOTICE, lib/pq forwards it to the client through `pq.PqError` or via the `NoticeHandler` callback if you register one. By default, notices are silently discarded. |
| 3️⃣ Typical triggers | • Using deprecated functions (`SELECT * FROM pg_catalog.pg_tables`).<br>• Autovacuum start/stop messages.<br>• Extension installation notes. |
| 4️⃣ Suppression / logging | ```go\nconn, err := sql.Open(\"postgres\", dsn)\nif pqConn, ok := conn.(*pq.Conn); ok {\n    pqConn.SetNoticeHandler(func(err *pq.Error) {\n        // log or ignore\n        if strings.Contains(err.Message, \"deprecated\") { return }\n        log.Println(\"NOTICE:\", err.Message)\n    })\n}\n``` |

**Edge Cases**  
- If you don’t cast to `*pq.Conn`, the handler won’t be set.  
- Notices can flood during large migrations; ensure your handler is lightweight.  
- Some drivers (pgx) expose a similar `NoticeHandler` – confirm you’re using the right API.

**Optimize & Communicate**  
- For production, route notices to a structured logger or metrics system instead of stdout.  
- If notices are harmless, simply ignore them; only enable handling during debugging.  
- Document in code: “Notice handler installed to capture deprecation warnings.”  

This gives interviewers confidence that you understand both PostgreSQL’s messaging model and Go driver mechanics, while also showing practical mitigation strategies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
