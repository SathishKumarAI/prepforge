---
qid: ing_3289d78baf__fp__local
question: 'Explain: um acid is not a property of — \"Testing Distributed Systems w/
  Deterministic Simulation\" by Will Wilson'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 499
total_tokens: 683
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:52:16-05:00'
sources: []
---

In a distributed setting the classic **ACID** guarantees (Atomicity, Consistency, Isolation, Durability) are framed for *transactions* that operate on a shared state under a single coordinator.  
When you replace the real system with a **deterministic simulation**, every event is replayed exactly as it happened in the captured trace; there is no nondeterminism, failure injection, or concurrency‑drift. The simulation therefore *forces* the same ordering that produced the observed outcome.

Because ACID is defined relative to an execution’s *possible interleavings*, a deterministic replay can never expose violations that would arise from another interleaving or from transient failures. In other words, the simulation guarantees **serializability** by construction—any schedule it produces is serializable—and so it trivially satisfies ACID for the replayed trace.

The deeper principle here is *information loss*: a deterministic trace discards all the uncertainty that real distributed systems face (network delays, partial failures, clock skew). Consequently, testing with such a simulation can **prove** that the system *would* behave correctly under the exact recorded schedule, but it cannot prove that the system would remain ACID‑compliant under *any* other plausible execution.  
Non‑obvious insight: deterministic replay is a *partial correctness* tool; it verifies that the implementation respects ACID for one path, but it does **not** provide any guarantee about robustness against unobserved failure modes—precisely the reason why ACID cannot be claimed as an inherent property of the system solely based on such testing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
