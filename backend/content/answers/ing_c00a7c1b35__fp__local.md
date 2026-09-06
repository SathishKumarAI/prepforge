---
qid: ing_c00a7c1b35__fp__local
question: 'Explain: Using LISTEN / NOTIFY — GitHub - lib/pq: Go PostgreSQL driver
  for database/sql \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 512
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:51:18-05:00'
sources: []
---

**Why PostgreSQL’s `LISTEN / NOTIFY` exist**

At its core a database is a *synchronization point*: processes read or write rows, and they must be told when relevant data changes.  
Instead of constantly polling the table (wasteful I/O + latency), PostgreSQL gives each connection a lightweight “subscription” to named events.  

When `NOTIFY channel, payload` runs, the server stores the event in a per‑session queue. All sessions that executed `LISTEN channel` are marked “ready”. The server then wakes those backends immediately; they can call `pg_notify()` or `SELECT pg_sleep(0)` to consume it.  
This is essentially **event‑driven I/O**: the database pushes change notifications rather than clients pulling them, which reduces round‑trips and keeps latency bounded by a single kernel wake‑up.

**Mapping this to Go’s `lib/pq`**

1. Open a *dedicated* connection for listening; keep it alive because PostgreSQL will terminate idle listeners.
2. Issue `LISTEN channel` once.
3. Use the returned `pq.Listener` (or plain `sql.DB`) and register a callback:
   ```go
   listener, err := pq.NewListener(connStr,
        10*time.Second, // reconnection timeout
        time.Minute,    // maxReconnects
        func(event pq.ListenerEventType, err error) {
            if event == pq.ListenerEventNotification {
                fmt.Println("Got:", event.Payload)
            }
        })
   ```
4. The driver internally uses `syscall.Select`/`epoll` to block until the socket is readable; once PostgreSQL writes a notification, the callback fires.

**Non‑obvious insight**

The payload is optional and limited to 8000 bytes. Because notifications are *per‑connection*, a single client can receive **many different event types** on one socket without extra round‑trips—this makes `LISTEN/NOTIFY` a lightweight pub/sub mechanism that still benefits from the database’s transaction semantics (notifications are only delivered after commit). Thus, you get ACID guarantees for events *and* low‑latency inter‑process messaging—all in one call.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
