---
qid: vq_b5c7356da0__faang__local
question: HOW DO YOU PREVENT DEADLOCKS?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 410
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:29:30-05:00'
sources: []
---

**Clarify**  
Deadlock is a situation where two or more threads are each waiting for resources held by the others, causing all of them to block forever.  
Assumptions I’d confirm:  
1. We’re dealing with shared mutable state protected by locks (or semaphores).  
2. Resources can be acquired in any order and multiple locks may be needed per operation.  

**Approach**  
I’ll outline a four‑step strategy: **Resource Ordering → Avoid Cycles → Timeout/Retry → Detect & Recover**.  

1. **Global ordering** – Assign each lock a unique ID and always acquire them in ascending order. This eliminates the possibility of circular wait.  
2. **Lock hierarchies** – If locks must be nested, enforce the same hierarchy across all modules.  
3. **Timeouts / try‑lock** – Use non‑blocking attempts with back‑off; if a lock can’t be obtained, release any acquired locks and retry.  
4. **Deadlock detection** – As a safety net, maintain a wait‑for graph; periodically run cycle detection (DFS) and break cycles by aborting or rolling back one transaction.

**Depth**  
- Ordering gives O(1) overhead per lock acquisition.  
- try‑lock + back‑off avoids busy waiting.  
- Detection adds O(V+E) per check but runs infrequently.  

**Edge Cases**  
- Dynamic resource creation (must assign IDs consistently).  
- Recursive calls that acquire the same lock – use reentrant locks or avoid recursion.  
- Priority inversion – can be mitigated with priority inheritance protocols.

**Optimize & Communicate**  
Explain why ordering removes circular waits, quantify overhead (negligible), and show how timeouts reduce latency spikes. End by highlighting that combining prevention (ordering) with detection gives a robust system acceptable to FAANG standards.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
