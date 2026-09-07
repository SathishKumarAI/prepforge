---
qid: ing_16c71013b4__faang__local
question: 'Explain: Shared Memory — Inter-Process Communication on Linux'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 451
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:37:26-05:00'
sources: []
---

**Clarify**  
Explain how “shared memory” works as an inter‑process communication (IPC) mechanism on Linux, and why it’s faster than pipes or sockets. Ask: *Which kernel primitives are involved?* *How do processes map the same physical pages into their address spaces?* *What synchronization is required to avoid races?*

**Approach**  
1. Create a shared memory object (`shm_open`/`mmap`).  
2. Allocate space with `ftruncate`.  
3. Map it in each process using `mmap(…, MAP_SHARED, …)`.  
4. Use POSIX semaphores or futexes to coordinate access.

**Depth**  
- The kernel allocates a *file‑like* object in the VFS; its underlying memory is backed by anonymous pages (not swapped until unmapped).  
- `mmap` returns virtual addresses that refer to the same physical frames for all processes, so reads/writes are instantaneous.  
- Synchronization: POSIX semaphores (`sem_init`, `sem_wait/sem_post`) or futexes (`futex(…, FUTEX_WAIT, …)`). Without them, data races and stale reads occur.  
- Cleanup: `munmap`, `shm_unlink`.  
- Complexity: O(1) for mapping; O(n) to copy‑on‑write if not shared.

**Edge Cases**  
- Size zero or negative `ftruncate` → error.  
- Permission bits (`0666`) must allow both read/write.  
- If a process dies without unlinking, the object remains until all descriptors close.  
- Race on semaphore initialization (double‑init) – use robust semaphores.

**Optimize & Communicate**  
Highlight that shared memory removes copy overhead, making it ideal for high‑throughput pipelines or GPU buffers. Explain trade‑offs: extra complexity in synchronization vs. speed. Conclude by noting the typical use pattern in ML servers: a producer writes tensors into shared memory; a consumer reads and processes them with minimal latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
