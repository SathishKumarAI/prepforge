---
qid: ing_209f8e4a4a__faang__local
question: 'Explain: Signal — Inter-Process Communication on Linux'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 394
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:00:30-05:00'
sources: []
---

**Signal – Inter‑Process Communication on Linux**  
*(FAANG‑style interview response – 170 words)*  

---

### Clarify  
Signals are a lightweight, asynchronous IPC mechanism used by the kernel to notify processes of events (e.g., `SIGINT`, `SIGTERM`). They can be sent **between processes** or from the kernel to user space. Key assumptions:  
- Processes share the same address space? No – signals cross process boundaries.  
- Do we need data transfer beyond a single byte? Signals carry only an integer code and optional 8‑bit data (`siginfo_t`).  

### Approach  
1. **Signal delivery** – kernel queues signal for target PID/TGID, delivers via pending flag.  
2. **Handler setup** – `signal()`/`sigaction()` registers a handler; default actions defined in `/usr/include/signal.h`.  
3. **Blocking/Masking** – `sigprocmask()` blocks signals during critical sections.  

### Depth  
- *Delivery semantics*: asynchronous, unordered; may be lost if already pending (unless queued).  
- *Signal safety*: only async‑signal safe functions allowed inside handlers (`write`, `_exit`).  
- *Performance*: O(1) queueing in kernel; negligible overhead compared to sockets or pipes.  

### Edge Cases  
- Signals can interrupt system calls → use `SA_RESTART`.  
- Zombie processes: ensure proper signal handling for child termination (`SIGCHLD`).  
- Race conditions when multiple signals target same process – check pending set.  

### Optimize & Communicate  
For high‑throughput IPC, prefer sockets or shared memory; signals are ideal for simple notifications (e.g., graceful shutdown). In a production system, document which signals trigger cleanup and ensure handlers are minimal to avoid deadlocks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
