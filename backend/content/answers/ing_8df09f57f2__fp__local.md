---
qid: ing_8df09f57f2__fp__local
question: 'Explain: Remote Procedure Call (RPC) in Operating System - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 402
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:06:56-05:00'
sources: []
---

**Remote Procedure Call – why an OS needs it**

When a program runs on one node but must use a service residing on another, the naïve solution is to hand‑shake over sockets: *send data → wait for reply*. That turns every remote request into a cumbersome send/receive dance and hides the fact that the “remote function” behaves exactly like any local call.  
The fundamental problem is **transparent abstraction**: we want the programmer to write `int x = readFile("/tmp/foo")` without thinking about network buffers, marshalling, or process boundaries.

An RPC framework solves this by **mapping a remote method invocation onto a local procedure call**. The OS provides three guarantees:

1. **Marshalling** – serialise arguments into a platform‑independent byte stream (information theory: we preserve the exact state).
2. **Transport abstraction** – underlying sockets, pipes or shared memory are hidden; the cost of communication is a *latency* term added to the local execution time.
3. **Synchronization** – the caller blocks until the callee finishes, just as in a local call (probabilistic guarantees: deadlock avoidance via timeouts).

The deeper principle is *optimization of communication overhead*: RPC turns network I/O into a single “remote” cost that can be optimised by batching or caching, analogous to vectorising local computations.

**Non‑obvious insight:**  
Most people think RPC merely forwards data. In reality, the **choice of which functions to expose remotely** is itself an optimization problem: exposing only coarse‑grained, idempotent operations reduces serialization cost and network traffic, much like reducing kernel calls in a microkernel design. Thus, the API surface becomes a tunable hyperparameter for distributed performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
