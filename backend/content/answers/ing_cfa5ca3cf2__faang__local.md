---
qid: ing_cfa5ca3cf2__faang__local
question: 'Explain: Design the scheduler for a continuous-batching inference engine.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 469
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:43:08-05:00'
sources: []
---

**Clarify**  
We need a scheduler that groups incoming inference requests into batches, runs them on an accelerator, and returns results with bounded latency.  
Assumptions:  
* Requests are stateless and can be reordered within a batch.  
* There is a maximum allowable latency `Lmax`.  
* Batch size limits: min = 1, max =`Bmax` (hardware‑dependent).  
* Throughput target is known (e.g., 10k req/s).

**Approach**  
1. Maintain a *waiting queue* ordered by arrival time.  
2. Periodically trigger batch formation via two triggers:  
   - **Size trigger:** when queue length ≥ `Bmax`.  
   - **Time trigger:** after the oldest request has waited `Lmax`.  
3. When triggered, pull up to `min(queue_len, Bmax)` requests into a batch, dispatch to the accelerator, and record start time.

**Depth**  
*Queue*: lock‑free ring buffer → O(1) enqueue/dequeue.  
*Batch formation*: O(k) where k ≤ `Bmax`.  
*Dispatch*: asynchronous GPU launch; return futures.  
Latency per request ≈ batch wait + inference latency.  
Complexity: overall throughput = `min(Bmax / (inference_time + queue_latency), target)`.  
Trade‑off: larger batches → higher compute efficiency but higher waiting time.

**Edge Cases**  
*Burst traffic*: queue may grow beyond capacity → drop or reject oldest to bound memory.  
*Low load*: size trigger never fires → rely on time trigger; may underutilize GPU.  
*Heterogeneous models*: need separate queues per model to avoid cross‑model batching.

**Optimize & Communicate**  
1. Adaptive `Lmax`: monitor latency distribution and shrink/grow threshold.  
2. Multi‑queue sharding: split queue into shards to reduce contention.  
3. Profiling feedback loop: adjust `Bmax` based on GPU utilisation.  
Explain reasoning by showing how each component satisfies the SLA, then present empirical results (e.g., 70% GPU utilisation, <10 ms avg latency).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
