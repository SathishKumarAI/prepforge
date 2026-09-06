---
qid: ing_4562821a27__fp__local
question: 'Explain: Read-Write Lock Pattern — Top 6 Multithreading Design Patterns
  You Must Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 400
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:33:07-05:00'
sources: []
---

**Read–Write Lock (R‑W Lock)**  
*Fundamental problem:* In many systems the data structure is *frequently read* but only occasionally written. A naïve exclusive lock forces every reader to wait for writers, wasting CPU time and throughput.

1. **Why it must work this way** – Readers do not modify state, so they can safely run in parallel as long as no writer intervenes. Writers, however, need exclusive access to guarantee consistency.  
2. **Underlying principle:** *Optimistic concurrency* meets *mutual exclusion*. The lock keeps two counters: `readers` and a flag `writing`.  
   - On `acquireRead()`: if `!writing`, increment `readers` atomically; otherwise block.  
   - On `releaseRead()`: decrement `readers`; wake writers when it reaches zero.  
   - On `acquireWrite()`: wait until both `writePending==false` and `readers==0`. Then set `writing=true`.  
3. **Geometric intuition:** Imagine a line of cars (readers) moving on a single lane; a truck (writer) needs the whole lane empty to pass. The lock lets all cars through together but blocks them only when a truck arrives.  
4. **Non‑obvious insight:** A *write‑priority* variant can avoid writer starvation, yet it may let readers starve if writes are frequent. Balancing this trade‑off is crucial; most libraries expose both *read‑first* and *write‑first* policies.  

**Bottom line:** R‑W locks exploit the asymmetry between reads and writes to achieve maximal parallelism while preserving data integrity, embodying a simple yet powerful optimization of concurrency control.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
