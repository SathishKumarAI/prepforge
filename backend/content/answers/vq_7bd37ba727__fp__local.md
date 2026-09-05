---
qid: vq_7bd37ba727__fp__local
question: WHAT IS A DEADLOCK IN SQL?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 339
total_tokens: 507
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:42:45-05:00'
sources: []
---

In a database, every transaction that touches data must acquire locks to guarantee **serializability** – the illusion that all transactions run one after another even if they overlap in real time.  
A *deadlock* arises when two or more transactions each hold a lock that the other needs and none can release it because each is waiting for the other’s resource. Formally, let transaction T₁ hold lock L₁ on object O₁ and request lock L₂ on O₂; simultaneously T₂ holds L₂ on O₂ and requests L₁ on O₁. The graph of “holds‑and‑requests” edges contains a cycle, so no vertex can be removed without breaking the cycle – a classic graph‑theoretic deadlock.

Why must this happen? Because lock acquisition is a **partial order** over resources: each transaction imposes an ordering that may conflict with another’s. When two orders intersect in opposite directions, the system cannot satisfy both simultaneously without violating serializability.

The deeper principle is *resource contention under mutual exclusion*. A deadlock is simply a minimal cycle in a directed graph of resource dependencies – a combinatorial inevitability when more than one independent lock request exists.

**Non‑obvious insight:** Even read‑only transactions can participate if they acquire shared locks that conflict with exclusive locks from writers. Thus, “read‑only” does not guarantee deadlock‑free execution; the lock mode matters as much as the transaction type.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
