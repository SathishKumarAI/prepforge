---
qid: ing_b59bd128b7__fp__local
question: 'Explain: Breaking Redlock with bad timings — How to do distributed locking
  \u2014 Martin Kleppmann\u2019s blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 336
total_tokens: 523
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:30:26-05:00'
sources: []
---

**RedLock and the timing pitfall**

A distributed lock must guarantee *mutual exclusion* for a critical section across replicas that may suffer network delays or crashes.  
RedLock proposes: pick N out of M Redis instances, acquire each lock within a short window, then only succeed if at least ⌊N/2⌋+1 locks are held and the total elapsed time is below the lease.  

The flaw appears when “bad timings” (high latency or clock skew) cause some nodes to respond late or fail to reply before the client’s timeout. In that case the client may:

1. **Acquire a minority of locks** (e.g., 2/5).  
2. **Release them** once the lease expires, while the majority of replicas have *not* granted any lock.  

A second client can now acquire all remaining locks before the first’s lease ends, leading to two processes concurrently holding the resource—exactly what mutual exclusion forbids.

The underlying principle is that *timeouts must be respected by all participants*. If a client’s notion of “now” diverges from the servers’, its decisions become unreliable. The non‑obvious insight: **distributed locks cannot rely solely on client‑side time windows; they must coordinate an explicit consensus (e.g., Paxos, Raft) or use atomic primitives that survive arbitrary message delays**. Otherwise, even a well‑designed algorithm like RedLock collapses under realistic network jitter.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
