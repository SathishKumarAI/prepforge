---
qid: ing_599857d968__faang__local
question: 'Explain: Step 4 - Using Cassandra in Go — Building a Performant API using
  Go and Cassandra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 621
total_tokens: 864
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:12:10-05:00'
sources: []
---

**Clarify**  
You’re asked how to build a high‑throughput REST API in Go that persists data with Apache Cassandra.  
Assumptions:  
* The API is read/write heavy, low latency (≤10 ms).  
* Data model is write‑optimized; queries are range‑scan or token‑based.  
* You can use the gocql driver and a connection pool.

**Approach**  
1. **Model design** – choose a partition key that distributes writes evenly (e.g., userID + time bucket) and a clustering column for ordering.  
2. **Connection pooling** – create a global `gocql.Session` with tuned `NumConns`, `Timeout`, and `Consistency`.  
3. **Batching & idempotence** – use `Batch` for multi‑row writes; set `Idempotent(true)` so retries won’t duplicate data.  
4. **Async I/O** – wrap Cassandra calls in goroutines, use channels or worker pools to avoid blocking the HTTP handler.  
5. **Circuit breaker / retry policy** – implement exponential backoff on transient errors.

**Depth**  
```go
// Session init (once)
cluster := gocql.NewCluster("cassandra-host")
cluster.Port = 9042
cluster.Keyspace = "app"
cluster.NumConns = 10
session, _ := cluster.CreateSession()

// Handler example
func writeHandler(w http.ResponseWriter, r *http.Request) {
    data := parse(r)
    batch := session.NewBatch(gocql.LoggedBatch).SetConsistency(gocql.Quorum)
    for _, row := range data.Rows {
        batch.Query(`INSERT INTO logs (user_id, ts, msg) VALUES (?, ?, ?)`,
                    row.UserID, row.TS, row.Msg)
    }
    if err := session.ExecuteBatch(batch); err != nil {
        http.Error(w, "write failed", http.StatusInternalServerError)
        return
    }
    w.WriteHeader(http.StatusCreated)
}
```
*Complexity*: O(1) per write (batch amortized), read is also constant.  
*Trade‑offs*: LoggedBatch guarantees atomicity but adds latency; unlogged batch faster but risk of partial writes.

**Edge Cases**  
* Hot partitions → add a hash or time bucket.  
* Schema changes → use `ALTER TABLE` with minimal downtime.  
* Node failures → rely on Cassandra’s replication and consistency level.

**Optimize & Communicate**  
Explain that profiling revealed 60 % of latency in the network round‑trip; switching to an unlogged batch reduced it by ~30 %. Discuss future improvements: using prepared statements, adding a read cache (Redis), or migrating to Scylla for lower GC overhead. This narrative shows structured thinking, depth, and clear communication—key FAANG interview signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
