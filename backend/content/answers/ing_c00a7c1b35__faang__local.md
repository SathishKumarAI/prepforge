---
qid: ing_c00a7c1b35__faang__local
question: 'Explain: Using LISTEN / NOTIFY — GitHub - lib/pq: Go PostgreSQL driver
  for database/sql \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 540
total_tokens: 793
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:08:30-05:00'
sources: []
---

**Clarify**  
The interviewer wants you to describe how PostgreSQL’s `LISTEN` / `NOTIFY` mechanism works and how it is used with the Go `lib/pq` driver. Assume a single‑process server, a simple pub/sub pattern, and that the caller has a live `*sql.DB`.

**Approach**  
1. Explain the protocol: `LISTEN channel;` registers the session; `NOTIFY channel, payload` posts an event.  
2. Show how `lib/pq` exposes these via `Conn.Ping()`/`Conn.Conn().Notify(...)`.  
3. Discuss blocking read on the connection and handling `pq.Listener`.  

**Depth**  
```go
import (
    "database/sql"
    _ "github.com/lib/pq"
)

func startListener(connStr string, channel string) (*pq.Listener, error) {
    // ConnStr must include sslmode=disable or similar.
    listener := pq.NewListener(connStr,
        10*time.Second,   // minReconnect
        time.Minute,      // maxReconnect
        func(event pq.ListenerEventType, err error) { fmt.Println(event, err) })
    if err := listener.Listen(channel); err != nil {
        return nil, err
    }
    go func() {
        for {
            select {
            case n := <-listener.Notify:
                fmt.Printf("received on %s: %s\n", channel, n.Extra)
            case <-time.After(90 * time.Second):
                // keepalive ping
                listener.Ping()
            }
        }
    }()
    return listener, nil
}
```
`pq.Listener` internally uses `Conn.Conn().PQListener()`; it keeps the underlying socket open and blocks on `readMessage`. Complexity: O(1) per notification; CPU idle until a message arrives.  
Trade‑offs: single connection per channel; scaling requires more listeners or multiplexing.

**Edge Cases**  
- Connection loss → auto‑reconnect logic in `Listener`.  
- Duplicate notifications if the channel name is reused.  
- Payload size > 8000 bytes truncated.

**Optimize & Communicate**  
To scale, group channels into one listener and dispatch via a map, or use `pg_notify` from another process (e.g., Kafka). Explain that for high throughput, consider using a message broker instead of DB notifications. Emphasize clear API boundaries and graceful shutdown with `listener.Close()`.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
