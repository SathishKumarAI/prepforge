---
qid: ing_a3003e1687__faang__local
question: 'Explain: Top 6 Use Cases for Distributed Locks — Why Use a Distributed
  Lock?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 637
total_tokens: 877
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:03:35-05:00'
sources: []
---

**Clarify**  
We’re asked to list the *six* most common scenarios where a distributed lock is useful, and explain why you’d pick it over other coordination primitives. I’ll assume the audience knows basic concurrency concepts but not necessarily distributed systems nuances.

---

### 1. **Co‑ordinated Data Migration**  
During a schema change or bulk load, only one worker should write to a table at a time. A lock guarantees that all nodes see a consistent view while the migration proceeds.

*Why?* Prevents race conditions and duplicate writes that would corrupt data or inflate row counts.

---

### 2. **Rate‑Limited External API Calls**  
A shared quota (e.g., 10 k calls per minute) must be respected across many services. A distributed lock can serialize requests to the API gateway.

*Why?* Ensures global compliance with provider limits without each node maintaining its own counter, which would drift.

---

### 3. **Leader Election for Background Jobs**  
Only one instance of a scheduled job (cleanup, cache rebuild) should run at any time in a cluster.

*Why?* Avoids duplicate work and potential conflicts (e.g., two jobs writing to the same file).

---

### 4. **Distributed Cache Invalidation**  
When an update occurs, all nodes must purge stale entries simultaneously. A lock guarantees that no node reads a partially invalidated cache.

*Why?* Prevents “stale‑data” bugs that are hard to debug in a multi‑node environment.

---

### 5. **Throttling Heavy Computation**  
If a cluster shares GPU resources, a lock can serialize access to the device so jobs don’t oversubscribe and crash.

*Why?* Protects shared hardware from contention, improving overall throughput.

---

### 6. **Consistent File System Operations**  
When multiple services write to a shared file (e.g., log aggregation), a distributed lock ensures atomic append or rename operations.

*Why?* Avoids interleaved writes that corrupt the file format and make debugging impossible.

---

**Depth & Trade‑offs**  
Implementations typically use Redis, ZooKeeper, or etcd. They add latency (network hop) but provide strong consistency guarantees. Choose a lock that fits your failure model: *pessimistic* (block until lock released) vs. *optimistic* (try‑lock with retries).  

**Edge Cases**  
- **Deadlocks** across multiple resources → enforce ordering or timeout.  
- **Lock loss on crash** → use lease‑based locks that auto‑expire.  

**Optimize & Communicate**  
Start by describing the business problem, then map it to a lock pattern, explain the chosen implementation’s complexity (O(1) set/get vs O(log N) in ZooKeeper), and finish with a short risk assessment. This structure shows clear reasoning, technical depth, and an awareness of real‑world pitfalls—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
