---
qid: vq_f1d44dd46d__think__local
question: What is the difference between concurrency and parallelism?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 389
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T02:39:28-05:00'
sources: []
---

**1️⃣ Clarify & state assumptions**  
- Assume the interviewee knows basic computing terms (processes, threads).  
- Ask if they mean *software* concurrency or *hardware* parallelism; we’ll treat both.  

**2️⃣ Mental model / framework**  
- Think of **concurrency** as “doing many things at once in an abstract sense” – interleaving operations, sharing resources, no guarantee of simultaneous execution.  
- Think of **parallelism** as “doing many things truly simultaneously using multiple processors/cores”.  

**3️⃣ Step‑by‑step reasoning**  
1. Define concurrency: overlapping execution via context switching or async I/O; can be single‑core but appears simultaneous.  
2. Define parallelism: actual simultaneous execution on multiple cores/hardware units.  
3. Show relationship: parallelism is a subset of concurrency (parallel tasks are concurrent, but not all concurrent tasks run in parallel).  
4. Provide examples: A web server handling 100 requests concurrently on one CPU (concurrency) vs. a GPU crunching 256 kernels in parallel (parallelism).  

**4️⃣ Common traps to avoid**  
- Confusing “speedup” with “parallelism”.  
- Assuming concurrency always needs multiple cores; it can be single‑core via time‑slice interleaving.  
- Overlooking that parallelism requires the underlying hardware support (SIMD, multi‑core).  

**5️⃣ Sanity‑check & verbalize**  
- Verify the answer covers both software and hardware perspectives.  
- Use a quick analogy: concurrency = juggling one ball at a time but keeping all in the air; parallelism = having multiple jugglers each holding a ball simultaneously.  

This structure lets you explain clearly, anticipate follow‑ups, and avoid common misconceptions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
