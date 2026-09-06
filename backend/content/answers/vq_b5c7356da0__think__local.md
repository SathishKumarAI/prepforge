---
qid: vq_b5c7356da0__think__local
question: HOW DO YOU PREVENT DEADLOCKS?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 414
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T02:14:51-05:00'
sources: []
---

**1️⃣ Clarify the context and assumptions**  
   - Are we talking about OS‑level threads, database transactions, or distributed systems?  
   - Assume shared resources are protected by locks (mutexes/semaphores).  
   - Deadlock occurs when a cycle of waiting exists.

**2️⃣ Adopt a systematic framework**  
   1. **Prevention** – enforce constraints that make cycles impossible.  
   2. **Avoidance** – dynamically check resource allocation graphs.  
   3. **Detection + recovery** – periodically find cycles and break them.  
   4. **Mitigation** – use timeouts or priorities.

**3️⃣ Reason step‑by‑step for prevention**  
   - *Mutual exclusion*: unavoidable, so focus on the others.  
   - *Hold & wait*: require a thread to acquire all needed locks at once (or release held ones before requesting more).  
   - *No preemption*: if a lock is granted, it can be taken away only when released; this is usually satisfied by mutexes.  
   - *Circular wait*: impose a global ordering on resources and always lock in that order.

**4️⃣ Common traps to avoid**  
   - Assuming “no circular wait” automatically solves everything—still need hold‑wait or preemption.  
   - Over‑simplifying by giving up all locks; it may serialize the system.  
   - Mixing different strategies (e.g., ordering + timeouts) without clear boundaries.

**5️⃣ Sanity‑check & communicate**  
   - Rephrase: “If every thread requests resources in a fixed order, no cycle can form.”  
   - Verify against known deadlock patterns (e.g., two threads each holding one lock and waiting for the other).  
   - Summarize the chosen strategy (ordering + try‑lock with backtracking) so colleagues can implement it.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
