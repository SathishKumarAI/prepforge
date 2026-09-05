---
qid: ing_3ce65bcc76__fp__local
question: 'Explain: Making the lock safe with fencing — How to do distributed locking
  \u2014 Martin Kleppmann\u2019s blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 392
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:13:46-05:00'
sources: []
---

### Distributed Locking – “Making the lock safe with fencing”

When several nodes must coordinate a shared resource (e.g., a counter in a cache), each node needs **exclusive access** at any instant.  
A naïve solution is to let a process *claim* a lock and then wait for an explicit *release*.  
But network partitions, crashes or message reordering break this assumption: the holder may die while still holding the lock, or another replica may acquire it simultaneously.

The fundamental problem is **causality**—the system must be able to order lock operations so that every node sees them in a consistent sequence.  
A *fencing token* (a monotonically increasing number) solves this by turning the unordered event stream into an ordered one:

1. A node asks the coordinator for a new token.  
2. The coordinator increments its counter and returns the value.  
3. The node stores the token locally; it can only perform the protected operation if the token is **strictly greater** than any previously seen token.

Because the coordinator’s counter never decreases, even after failures or re‑entries, no two nodes can act on the same token, guaranteeing mutual exclusion without requiring a “release” message.  
This pattern is essentially a *total order broadcast* of lock events; it converts the unreliable, asynchronous network into a partially ordered system where safety is preserved.

**Non‑obvious insight:**  
The coordinator’s counter need not be globally synchronized—only monotonicity matters. Therefore, even a cheap “logical clock” suffices; you can use Lamport timestamps or vector clocks to derive the fencing token. This removes the heavy cost of physical time synchronization while still ensuring that every lock acquisition is uniquely ordered.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
