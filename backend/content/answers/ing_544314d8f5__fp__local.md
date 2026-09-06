---
qid: ing_544314d8f5__fp__local
question: 'Explain: Types of RPC — Remote Procedure Call (RPC) in Operating System
  - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 442
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:04:03-05:00'
sources: []
---

**Why do operating systems need RPC?**  
When a program runs on one process but needs to execute code that belongs to another (e.g., accessing the file system, printing), it must *delegate* work across a communication boundary. A Remote Procedure Call is the minimal abstraction that lets a client “call” a server‑side function as if it were local: the call is translated into a message, sent over the interprocess channel, and the result is returned. The design of RPC systems hinges on two fundamental principles:

1. **Separation of concerns** – the client should not know how data is marshalled or routed; the server only implements the procedure.
2. **Efficiency vs. safety** – each call incurs serialization, transport overhead, and potential blocking.

These trade‑offs give rise to three canonical RPC types in operating systems:

| Type | Core Idea | Typical Use |
|------|-----------|-------------|
| **Synchronous (blocking)** | The client suspends until the server replies. | File I/O, database queries where latency is tolerable. |
| **Asynchronous (non‑blocking)** | The client continues execution; a callback or future receives the result later. | GUI event handling, network socket reads. |
| **Remote Procedure Invocation with Timeout** | Combines blocking semantics but aborts after a configurable period if no reply arrives. | Fault‑tolerant services where a hung server must not stall the whole system. |

*Non‑obvious insight:*  
In many OS kernels, *asynchronous RPC* is implemented by converting the call into an interrupt‑driven event rather than spinning a thread. This leverages the hardware’s I/O completion ports or epoll to avoid context switches entirely, making asynchronous calls as cheap as local function calls when network latency dominates. Thus, the “remote” in RPC is not a distant machine but often a *different kernel component*—and treating it as an interrupt keeps overhead minimal while preserving modularity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
