---
qid: ing_1936c6d610__think__local
question: 'Explain: The synchrony assumptions of Redlock — How to do distributed locking
  \u2014 Martin Kleppmann\u2019s blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 207
output_tokens: 459
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T04:23:48-05:00'
sources: []
---

**1️⃣ Clarify the goal and context**  
   - *Assumption*: The reader knows basic distributed systems but not Redlock’s specifics.  
   - *Clarify*: We’re explaining why Redlock’s “synchrony assumptions” matter for safe locking, not just how to call the API.

**2️⃣ Adopt a mental model: “Time‑consistency in an asynchronous world”**  
   - Think of each Redis node as an independent clock.  
   - The lock is only useful if all nodes agree on who holds it *during* the critical section, despite network delays and clock drift.

**3️⃣ Step‑by‑step reasoning**  
   1. **Acquire phase**: client sends `SET key value NX PX ttl` to all replicas.  
   2. **Consensus window**: only if ≥ N+1 nodes reply “OK” does the client consider the lock acquired.  
   3. **Synchrony assumption**: the time between sending a request and receiving a reply must be *less* than the lock’s TTL minus network jitter; otherwise the lock may expire before the client starts its work.  
   4. **Release phase**: atomic Lua script checks the value before deleting, ensuring no stale release.

**4️⃣ Common traps to avoid**  
   - *Assuming perfect synchrony*: ignore clock drift; Redlock tolerates it only up to a fraction of TTL.  
   - *Over‑optimistic TTLs*: set too short and network lag will cause premature expiry.  
   - *Ignoring partial failures*: if fewer than N+1 nodes respond, the lock is not granted—don’t fall back to “best effort”.

**5️⃣ Sanity‑check & verbalize**  
   - Ask: “If one node replies late, what happens?” → the client still holds the lock until TTL elapses; the late reply is irrelevant.  
   - Summarize: Redlock’s safety hinges on *bounded* message delays relative to TTL; this synchrony assumption guarantees that all honest nodes see the same lock state during the critical section.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
