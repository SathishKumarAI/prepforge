---
qid: ing_209f8e4a4a__fp__local
question: 'Explain: Signal — Inter-Process Communication on Linux'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 413
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:15:32-05:00'
sources: []
---

**Signal – Inter‑Process Communication on Linux**

At its core a *signal* solves the problem of **synchronous notification**: one process must inform another that an event has occurred (e.g., child exited, division by zero, user interrupt) without resorting to polling or shared memory. The design follows from two constraints:

1. **Speed & atomicity** – A signal must be delivered instantly and atomically; the kernel cannot afford to block the sender or perform complex handshakes.
2. **Minimal coupling** – Processes should remain loosely coupled; a signal should not require pre‑established channels.

The Linux implementation satisfies these by treating signals as *virtual interrupts* on the target process. When `kill(pid, SIGX)` is invoked, the kernel places an entry in the *signal set* of the destination task and queues it for delivery at the next safe point (e.g., after returning from a system call). The signal handler runs with the same privilege level as the process, ensuring that the notification can be handled deterministically.

**Why this works:**  
- **Optimization principle** – Delivering via a lightweight kernel queue avoids the overhead of IPC primitives (pipes, sockets) while guaranteeing bounded latency.  
- **Information‑theoretic view** – A signal encodes one bit of information (“event X occurred”) with minimal bandwidth; additional data can be conveyed by inspecting process state or using ancillary mechanisms.  

**Non‑obvious insight:**  
Signals are *not* merely a notification mechanism—they are also an *implicit contract*. The kernel’s guarantee that a signal will be delivered exactly once (unless blocked) allows developers to reason about program flow as if signals were reliable messages, even though the underlying implementation is essentially a flag flip. This subtle reliability property underpins many higher‑level abstractions such as `waitpid()` and process supervision tools.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
