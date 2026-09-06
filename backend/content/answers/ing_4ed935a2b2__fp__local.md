---
qid: ing_4ed935a2b2__fp__local
question: What Does RPC do? — Remote Procedure Call (RPC) in Operating System - GeeksforGeeks
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 372
total_tokens: 553
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:52:59-05:00'
sources: []
---

### Why an OS needs a *Remote Procedure Call*

In a single‑process program, invoking `f()` is just a jump in memory: the caller hands over control and later returns with a result.  
When processes live on different machines (or separate address spaces), that “jump” becomes impossible because each machine has its own memory layout and CPU state.  

**RPC solves this mismatch by turning an inter‑process call into a network transaction that mimics local semantics.**  
1. **Marshalling** – the caller serialises arguments into a byte stream, preserving type information so the callee can reconstruct them.  
2. **Transport** – the stream is sent over sockets (or IPC) as a request packet; the server receives it, deserialises, and invokes the target routine.  
3. **Return** – the result (or error code) is marshalled back to the caller, which blocks until it arrives, just like a local call.

The *deep principle* is that RPC imposes an *abstract machine* over the network: processes appear as if they share a single address space. This abstraction lets developers write distributed services with the same programming model used for local functions—an optimization of **developer effort** versus **network latency**.

#### Non‑obvious insight  
Many assume RPC is just “remote function call.” In reality, its *state‑hiding* property (the caller never sees the server’s stack or heap) is what allows fault tolerance: a crash on the server side doesn’t corrupt the client’s memory. This subtle isolation is why RPC frameworks often provide retries and timeouts as first‑class features.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
