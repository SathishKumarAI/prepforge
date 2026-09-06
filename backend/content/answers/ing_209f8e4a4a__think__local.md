---
qid: ing_209f8e4a4a__think__local
question: 'Explain: Signal — Inter-Process Communication on Linux'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 470
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T04:50:51-05:00'
sources: []
---

**1️⃣ Clarify the scope and assumptions**  
   - *What is a “signal” in this context?* It’s not a time‑series signal but an OS‑level notification (e.g., SIGINT).  
   - *Which IPC mechanisms are relevant on Linux?* Signals, pipes, sockets, shared memory, semaphores.  
   - *Assume the reader knows basic C/POSIX API but not deep kernel internals.*

**2️⃣ Adopt a mental model**  
   Use a **“producer–consumer” diagram**:  
   - Producer process → sends a signal.  
   - Kernel’s signal queue → delivers to consumer process (or thread).  
   Think of signals as lightweight messages with an integer code and optional payload.

**3️⃣ Step‑by‑step reasoning**  
   1. *Signal generation*: `kill(pid, SIGUSR1)` or a hardware interrupt triggers the kernel to enqueue the signal.  
   2. *Kernel delivery*: On next scheduling event, the kernel checks the target’s pending queue and either (a) queues it for the process, (b) delivers immediately if a handler is installed, or (c) terminates if default action is `SIGKILL`.  
   3. *User‑space handling*: The process can block, ignore, or catch the signal via `sigaction()`.  
   4. *Synchronization*: If signals are used for IPC, they often accompany other primitives (e.g., a pipe to carry data).

**4️⃣ Common traps to avoid**  
   - Assuming signals are reliable: they’re not ordered or guaranteed.  
   - Mixing signal handlers with non‑async‑safe functions → undefined behavior.  
   - Overloading standard signals for custom IPC; better to use `signalfd` or sockets.

**5️⃣ Sanity‑check & verbalize**  
   • Restate the flow in one sentence: “A process sends a numeric notification; the kernel queues it; when scheduled, the target’s handler runs.”  
   • Ask: *Does this explanation cover generation, delivery, handling, and pitfalls?* If yes, you’re good.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
