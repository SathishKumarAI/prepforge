---
qid: ing_97b7325b76__fp__local
question: 'Explain: Disadvantages — Remote Procedure Call (RPC) in Operating System
  - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 422
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:28:06-05:00'
sources: []
---

**Why RPCs are a double‑edged sword in operating systems**

At its core, an RPC turns a *local* function call into a *remote* one: the caller serialises arguments, sends them over IPC or a network, and waits for a reply. The design is motivated by modularity—processes can be isolated yet cooperate. However, this abstraction introduces two fundamental bottlenecks.

1. **Latency amplification**  
   Every RPC incurs context switches, message‑passing overhead, and (often) serialization/deserialization costs. In an OS where scheduling decisions happen in microseconds, a single round‑trip can dominate CPU time, violating the *real‑time* principle that actions should be bounded by deterministic deadlines.

2. **Coupling through interface contracts**  
   The caller must know the exact signature of the remote routine. Any change forces recompilation or dynamic re‑binding, breaking the *information hiding* guarantee of modularity. This tight coupling is a manifestation of *optimization over a fixed cost function*: we minimize local effort at the expense of global stability.

3. **Resource contention and deadlock**  
   When multiple processes wait on RPCs that depend on each other, the system can stall—a direct consequence of *probabilistic independence* being violated in shared‑resource environments.

**Non‑obvious insight:**  
RPCs implicitly assume a *flat* cost model for communication. In practice, the cost is *state‑dependent*: network congestion, CPU cache state, and even power management policies alter latency. A well‑designed OS should therefore treat RPC as an *affine* operation with stochastic parameters, not a deterministic one.

In short, while RPCs promise modularity, they impose hard limits on performance, reliability, and maintainability—limits that stem from basic principles of latency, coupling, and probabilistic resource contention.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
