---
qid: ing_667ea4f8a9__faang__local
question: 'Explain: A. Creating Users — Building a Performant API using Go and Cassandra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 475
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:42:48-05:00'
sources: []
---

**Clarify**  
We need an API that lets clients create user records while remaining fast, scalable, and consistent. The stack is Go for the service layer and Cassandra as the datastore. Key assumptions:  
* User data fits a wide‑column schema (id, email, name, created_at).  
* Strong eventual consistency is acceptable; we can tolerate slight lag in reads after writes.  
* Write throughput will be high (thousands per second) and traffic is read‑heavy later.

**Approach**  
1. **Schema design** – a single table `users` with partition key `user_id`.  
2. **API layer** – expose `/users` POST, validate payload, generate UUID v4.  
3. **Write path** – use Go’s Cassandra driver (`gocql`) to batch the INSERT in a lightweight transaction (LWT) if we need uniqueness on email.  
4. **Read path** – simple SELECT by id; cache hot users in an in‑memory store (e.g., Redis) for 10 s TTL.  
5. **Background job** – periodically scan for orphaned records or duplicates.

**Depth**  
* **Latency:** Cassandra writes are ~1–2 ms on a single node, Go’s handler adds <50 µs.  
* **Throughput:** Batch LWTs reduce round‑trips; sharding by hash of UUID keeps data spread.  
* **Consistency:** LWT guarantees uniqueness but costs 3‑round‑trip latency; optional for email constraint.  
* **Error handling:** Return `409 Conflict` if duplicate email detected.

**Edge Cases**  
* Duplicate user creation → test LWT conflict handling.  
* Network partition → eventual consistency ensures reads may miss latest write temporarily.  
* High write bursts → monitor token bucket rate limiter in Go to avoid node overload.

**Optimize & Communicate**  
Explain trade‑offs: using LWT for uniqueness vs. raw INSERT for speed; caching for read amplification; and the decision to keep schema simple to avoid compaction pressure. Summarize that this design satisfies low latency, high throughput, and maintainability—core FAANG interview expectations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
