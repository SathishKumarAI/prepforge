---
qid: vq_45bb007b60__faang__local
question: What is locking ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 482
total_tokens: 709
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:07:54-05:00'
sources: []
---

**What is Locking?**  
Locking is a concurrency control mechanism that ensures mutually exclusive access to shared resources (e.g., memory, files, database rows) so that concurrent threads or processes do not corrupt data.

---

### 1️⃣ Clarify  
- **Problem:** Multiple threads may read/write the same data; we need to avoid race conditions.  
- **Assumptions:**  
  - Shared resource is mutable and accessed by ≥2 threads.  
  - Operations are atomic at a higher level but not internally.  
  - We’re working in a shared‑memory environment (e.g., Java, C++).

### 2️⃣ Approach  
1. **Choose lock type** – mutual exclusion (`mutex`/`spinlock`) or read/write locks.  
2. **Acquire before access** – block or spin until the lock is free.  
3. **Release after use** – ensure it’s always released, even on exceptions (try‑finally).  

### 3️⃣ Depth  
- **Mutex:** guarantees that only one thread holds the lock; other threads wait in a queue.  
- **Spinlock:** busy‑wait loop—fast if locks are held briefly but wastes CPU otherwise.  
- **Read/Write lock:** allows multiple readers, single writer; improves throughput when reads dominate.  

**Complexity:**  
- Lock acquisition/release: O(1) on average.  
- Contention can cause O(n) wait times.

### 4️⃣ Edge Cases  
- **Deadlock:** circular waits → use ordering or try‑lock with backoff.  
- **Priority inversion:** low‑prio thread holds lock needed by high‑prio one → priority inheritance.  
- **Starvation:** unfair scheduling; use fair locks if required.

### 5️⃣ Optimize & Communicate  
- Prefer fine‑grained locks to reduce contention.  
- Profile critical sections; replace spinlocks with condition variables when wait times > few microseconds.  
- Document lock ownership and invariants for maintainability.  

**TL;DR:** Locking serializes access to shared mutable state, preventing race conditions. Pick the right lock type, acquire/release correctly, handle edge cases (deadlock, priority inversion), and continually profile for performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
