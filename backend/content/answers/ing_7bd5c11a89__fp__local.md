---
qid: ing_7bd5c11a89__fp__local
question: 'Explain: 2.1 Consistency — CAP Theorem | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 340
total_tokens: 515
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:28:56-05:00'
sources: []
---

**Consistency in the CAP Theorem – a first‑principles view**

Distributed systems must satisfy three competing guarantees:  
* **Availability (A)** – every request receives a response;  
* **Partition tolerance (P)** – the system keeps operating despite network splits;  
* **Consistency (C)** – all replicas see the same data at any instant.

The *consistency* requirement is not an arbitrary nicety; it is the logical consequence of the fundamental problem of synchronising independent copies over a lossy medium.  
When two nodes simultaneously write different values, a protocol must decide which value “wins.”  If it chooses one arbitrarily (to keep A), other replicas will see a stale or wrong state until they reconcile, breaking **C**.  
If it insists on waiting for all replicas to agree before acknowledging the write, the system becomes unavailable when even a single link fails – violating **A**.  
Thus, in any partitioned network, we can prove that at least one of {C, A} must be sacrificed.

The deeper insight often missed is that *consistency is an information‑theoretic constraint*: it forces the system to maintain a shared global state with zero entropy across replicas.  Any attempt to lower this entropy (i.e., relax consistency) inevitably increases uncertainty elsewhere—either in latency or availability. Therefore, CAP’s trade‑off is not just engineering but a manifestation of the *no‑free‑lunch* principle in distributed information theory.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
