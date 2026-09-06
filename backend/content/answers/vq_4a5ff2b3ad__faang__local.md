---
qid: vq_4a5ff2b3ad__faang__local
question: WHAT IS OPTIMISTIC VS. PESSIMISTIC LOCKING?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 403
total_tokens: 640
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:09:11-05:00'
sources: []
---

**Optimistic vs. Pessimistic Locking**

| | **Pessimistic** | **Optimistic** |
|---|---|---|
| **Assumption** | Conflicts are likely → lock data immediately. | Conflicts are rare → allow concurrent access, validate later. |
| **Locking** | Acquire exclusive/shared locks before reading/writing (e.g., DB row‑level locks). | No locks on read; write uses a version/timestamp check at commit time. |
| **Concurrency** | Lower – many transactions may block each other. | Higher – reads never block writes, only conflicts are detected later. |
| **Overhead** | Lock management + deadlock detection/resolution. | Versioning metadata and conflict checks at commit. |
| **Use‑cases** | High contention systems (banking, inventory). | Low contention or read‑heavy workloads (analytics, web caches). |

### How they work
1. **Pessimistic**:  
   *Transaction A locks a row; Transaction B must wait until lock is released.*  
2. **Optimistic**:  
   *Transaction reads value X with version V. At commit, it checks that the current version still equals V; if not, abort and retry.*

### Trade‑offs
- **Pessimistic** guarantees serializability but can cause deadlocks and reduced throughput.
- **Optimistic** maximizes parallelism but may incur higher rollback rates under contention.

### When to choose
- Use pessimistic locking when write conflicts are frequent or the cost of a retry is high.  
- Prefer optimistic locking for read‑heavy workloads where conflicts are unlikely, or when you can tolerate occasional rollbacks.

---

*This structured comparison highlights assumptions, mechanics, trade‑offs, and practical guidance—key points interviewers look for in a concise DSA answer.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
