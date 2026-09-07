---
qid: ing_cd28c070a3__faang__local
question: 'Explain: Step 3 - Your first REST endpoint — Building a Performant API
  using Go and Cassandra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 518
total_tokens: 761
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:37:17-05:00'
sources: []
---

**Clarify**  
We’re asked to design the *first* REST endpoint for a high‑throughput service that reads/writes user data into **Cassandra** using **Go**. Key assumptions:  
• Data is write‑heavy, read‑light; latency < 10 ms.  
• Users identified by `user_id` (UUID).  
• No strict ACID guarantees beyond Cassandra’s eventual consistency.

---

**Approach**  
1. Define the HTTP verb & path (`POST /users`, `GET /users/{id}`).  
2. Create a thin Go handler that parses JSON, validates fields, and calls a repository layer.  
3. In the repo, use the official *gocql* driver: open a session, prepare statements once, and batch writes for bulk ops.  
4. Return appropriate HTTP status codes (201, 200, 400, 404).  

---

**Depth**  
```go
type User struct{ ID uuid.UUID; Name string }
var insertStmt = "INSERT INTO users(id,name) VALUES(?,?)"

func createUser(w http.ResponseWriter,r *http.Request){
    var u User
    if err:=json.NewDecoder(r.Body).Decode(&u); err!=nil { http.Error(w,"bad",400); return}
    if _,err:=session.Query(insertStmt,u.ID,u.Name).Exec(); err!=nil{ http.Error(w,"db",500);return}
    w.WriteHeader(http.StatusCreated)
}
```
*Complexity*: O(1) per request; Cassandra’s partition key guarantees constant‑time lookups.  
*Trade‑offs*: eventual consistency → possible stale reads, mitigated by using `ConsistencyLevel.Quorum` for critical reads.

---

**Edge Cases**  
• Duplicate `user_id` → Cassandra returns `WriteConflict`; handle with 409.  
• Session drop → reconnect logic or circuit breaker.  
• Large payloads → enforce size limits and stream decoding.

---

**Optimize & Communicate**  
- **Connection pooling**: reuse `gocql.Session`.  
- **Prepared statements**: reduce parse overhead.  
- **Batching**: group writes to minimize round‑trips for bulk imports.  
Explain the design to interviewers by mapping each choice back to performance goals and trade‑offs, demonstrating a clear, structured solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
