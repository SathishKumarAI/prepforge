---
qid: ing_fb32447aa7__faang__local
question: 'Explain: 2.5 System Design: Implement a GPU Scheduling System Using Credits'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 498
total_tokens: 737
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:24:13-05:00'
sources: []
---

## Clarify  
We need a **GPU scheduler** that allocates time‑slices to multiple ML jobs on shared hardware, using a *credit* model (each job has a token balance).  
Assumptions to confirm:  
1. GPUs are homogeneous and fully shared (no NUMA).  
2. Jobs arrive online; no pre‑allocation of GPU slots.  
3. Credits represent compute budget (e.g., FLOPs or time).  
4. Preemption is allowed but expensive.

## Approach  
1. **Data structures**:  
   * Priority queue keyed by remaining credits (min‑heap for lowest credit first).  
   * Hash map `job→credits` for O(1) updates.  
2. **Scheduling loop**: pull the job with highest priority (e.g., lowest credits left), assign a fixed time quantum, deduct credits.  
3. **Preemption**: if a higher‑credit job arrives, push it into the queue; the current job is paused and re‑queued.  
4. **GPU assignment**: maintain `gpu→job` mapping; on preemption, release GPU to next job in queue.

## Depth  
*Time quantum* = `C_min / G`, where `C_min` is smallest credit among ready jobs, `G` # GPUs.  
Complexity per tick: O(log N) for heap ops. Memory O(N).  
Credits are decremented atomically; we use lock‑free queues to avoid contention.

## Edge Cases  
* Zero or negative credits → drop job.  
* Credit overflow → cap at max.  
* All jobs finished → idle GPU.  
* Sudden burst of high‑credit jobs → potential starvation—mitigate with aging (increment credit over time).

## Optimize & Communicate  
Improvements:  
* Use *bucket queues* for integer credits to achieve O(1) scheduling when credits are bounded.  
* Batch preemption decisions to reduce context switches.  
Narration: “By treating credits as a fair‑share budget, we can guarantee that no job monopolizes GPU time while still allowing heavy workloads to finish quickly. The heap gives us logarithmic priority updates, and the bucket optimization turns it into constant‑time when credit granularity is small.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
