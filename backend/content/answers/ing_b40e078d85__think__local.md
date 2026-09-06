---
qid: ing_b40e078d85__think__local
question: Why doesn't my program run faster with more CPUs?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 428
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:52:48-05:00'
sources: []
---

**1️⃣ Clarify the problem & assumptions**  
   - Confirm that “more CPUs” refers to adding cores or physical machines.  
   - Assume the program is CPU‑bound, not I/O bound, and that you’re using a standard parallel framework (OpenMP, MPI, multiprocessing).  
   - Check whether the code scales linearly; note any shared data structures or lock contention.

**2️⃣ Mental model: Amdahl’s Law & Parallel Overhead**  
   - Amdahl’s law says speedup ≤ 1 / (s + (1‑s)/N), where *s* is serial fraction, *N* the cores.  
   - Add overhead terms: task spawning, synchronization, communication latency, and memory bandwidth limits.

**3️⃣ Step‑by‑step reasoning**  
   a. Profile the code to quantify serial vs parallel parts.  
   b. Measure per‑core memory traffic; if it saturates the bus, adding cores hurts.  
   c. Inspect lock contention or shared data structures that serialize execution.  
   d. Check for false sharing or cache line thrashing.  
   e. Verify that task granularity is large enough to amortize scheduling overhead.

**4️⃣ Common traps to avoid**  
   - Assuming all work is embarrassingly parallel; ignore hidden dependencies.  
   - Ignoring the impact of NUMA (Non‑Uniform Memory Access) on multi‑socket systems.  
   - Forgetting that I/O or GPU drivers can become bottlenecks when many cores compete.

**5️⃣ Sanity‑check & communicate**  
   - Run a microbenchmark: a simple loop with varying core counts; if it scales, the issue lies elsewhere.  
   - Present findings in clear charts (speedup vs cores) and explain which part of Amdahl’s law dominates.  
   - Suggest concrete fixes: reduce shared state, increase task granularity, or move to distributed memory if needed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
