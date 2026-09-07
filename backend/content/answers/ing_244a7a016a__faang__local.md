---
qid: ing_244a7a016a__faang__local
question: 'Explain: Semaphore — Inter-Process Communication on Linux'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 436
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:08:50-05:00'
sources: []
---

**Semaphore – Inter‑Process Communication on Linux**

| Step | What to do |
|------|------------|
| **Clarify** | *Problem:* “Explain how a semaphore works as IPC in Linux.” <br>*Assumptions:* single machine, POSIX API, processes share memory or use `sem_*` functions. |
| **Approach** | 1️⃣ Define what a semaphore is (counter + atomic ops).<br>2️⃣ Show the two families: POSIX named (`sem_open`) and unnamed (`sem_init`).<br>3️⃣ Explain how it synchronizes access to shared resources (e.g., a buffer). |
| **Depth** | *POSIX Named Semaphores* – stored in `/dev/shm`, identified by a string.  `sem_open()` creates/opens; `sem_wait()` decrements atomically, blocking if zero; `sem_post()` increments and wakes waiting processes.  The counter persists across execs.<br>*Unnamed Semaphores* – placed in shared memory (e.g., `shmget` + `shmat`).  Use `sem_init(&sem, 1, value)` (`pshared=1`).<br>Both use kernel‑level locks; operations are atomic and protected by a spinlock or futex. Complexity: O(1) per op; contention scales with number of waiters. |
| **Edge Cases** | • Semaphore count overflow/underflow.<br>• Process crashes while holding the semaphore → deadlock unless using robust semaphores (`sem_setrobust`).<br>• Named semaphore name collisions or lack of cleanup (must `sem_unlink`). |
| **Optimize & Communicate** | Mention futex‑based fast paths for low contention, fallback to kernel scheduler when blocked. Highlight that semaphores are lightweight compared to pipes/MsgQs and ideal for producer–consumer patterns. Conclude by stressing proper initialization, error handling, and cleanup to avoid resource leaks. |

*Word count: ~200 words.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
