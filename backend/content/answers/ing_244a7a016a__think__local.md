---
qid: ing_244a7a016a__think__local
question: 'Explain: Semaphore — Inter-Process Communication on Linux'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 521
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T05:05:13-05:00'
sources: []
---

**1. Clarify the scope & assumptions**  
   - *What is a semaphore?* – A synchronization primitive that controls access to shared resources.  
   - *Inter‑Process Communication (IPC) on Linux?* – Focus on named semaphores in POSIX (`sem_open`, `sem_wait`, etc.) rather than unnamed or System V semaphores.  
   - *Assume the reader knows basic C/POSIX APIs and concepts of processes, but not semaphore internals.*

**2. Mental model / framework**  
   1. **Resource → Semaphore**: Treat a binary or counting semaphore as a counter that represents available slots.  
   2. **Process interaction**: Each process performs `sem_wait()` (decrement) before entering the critical section and `sem_post()` (increment) after leaving.  
   3. **System representation**: On Linux, a named semaphore is stored in `/dev/shm` as an inode; its state is shared via the kernel.

**3. Step‑by‑step reasoning**  
   - *Creation*: `sem_open(name, O_CREAT, mode, initial_value)` creates/opens a named semaphore.  
   - *Usage*: Inside each process, call `sem_wait()` (blocks if counter ≤ 0) to acquire; after work, `sem_post()` to release.  
   - *Destruction*: When done, close with `sem_close()`, and optionally unlink with `sem_unlink(name)` to remove the kernel object.  
   - *Error handling*: Check return values (`-1`) and `errno` for cases like `ENOENT`, `EACCES`.

**4. Common traps & wrong turns**  
   - Mixing POSIX and System V semaphores; they are incompatible.  
   - Forgetting to unlink: the semaphore persists across reboots in `/dev/shm`.  
   - Assuming all processes share a file descriptor; named semaphores do not – each must `sem_open()`.

**5. Sanity‑check & verbal communication**  
   - Verify that after many `sem_wait()` calls the counter never goes negative.  
   - Explain to the audience: “Think of the semaphore as a shared counter in kernel memory; processes race to decrement it, blocking when no slots remain.”  
   - End with a quick example code snippet illustrating creation, wait/post, and cleanup.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
