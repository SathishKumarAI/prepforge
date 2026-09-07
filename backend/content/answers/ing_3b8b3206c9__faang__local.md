---
qid: ing_3b8b3206c9__faang__local
question: 'Explain: Best Practices — Pessimistic vs Optimistic Locking'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 547
total_tokens: 784
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:02:52-05:00'
sources: []
---

**Clarify**

You’re asking how to control concurrent updates to shared data when multiple threads or services may touch the same record at once.  
Assumptions: *We’re dealing with relational DBs (or key‑value stores that support CAS), transactions are available, and we care about consistency over performance.*

---

### Approach

1. **Identify conflict patterns** – frequent updates on a single row vs rare writes.  
2. **Choose lock strategy** – pessimistic (block) or optimistic (detect).  
3. **Implement & test** – measure contention, throughput, and failure rates.

---

### Depth

| Technique | How it works | Complexity | Trade‑offs |
|-----------|--------------|------------|------------|
| **Pessimistic locking** | Acquire an exclusive lock (`SELECT … FOR UPDATE`) before write; other readers wait. | O(1) per operation, but blocks concurrent access. | Guarantees no lost updates; high latency under contention. |
| **Optimistic locking (Versioning)** | Store a version/timestamp. On update, check the stored value equals current snapshot; if not, retry or abort. | O(1) read/write + one compare‑and‑swap. | Low contention overhead; risk of “write‑skew” or many retries in hot spots. |
| **Timestamp ordering** | Assign a monotonically increasing timestamp to each transaction; enforce that reads/writes respect this order. | Requires global clock or logical counter. | Strong consistency with less blocking, but complex to implement correctly. |

---

### Edge Cases

* **Long‑running transactions** – pessimistic locks can deadlock if not timed out.  
* **High contention hot spots** – optimistic retries may lead to starvation; fallback to pessimistic lock after a threshold.  
* **Distributed systems** – clock skew can break timestamp ordering.

Test scenarios: bulk concurrent updates, mixed read/write loads, failure injection (network partition), and rollback paths.

---

### Optimize & Communicate

1. **Hybrid strategy** – start optimistic; if retries > N, switch to pessimistic lock for that record.  
2. **Back‑off + exponential retry** to reduce contention spikes.  
3. **Monitoring** – expose metrics: retry counts, lock wait times, abort rates.

Explain the rationale clearly to interviewers: “We pick the strategy that matches our contention profile; we fall back when needed and keep observability high.” This showcases structured thinking, depth in concurrency control, and awareness of real‑world trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
