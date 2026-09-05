---
qid: ing_345a651cec__fp__local
question: 'Explain: Adapter swap budget and the noisy-neighbor problem'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 391
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:56:01-05:00'
sources: []
---

**Adapter‑Swap Budget & Noisy‑Neighbor Problem – From First Principles**

In a shared GPU cluster, each training job runs through *adapter layers* (small learnable modules inserted into a frozen backbone). The **adapter‑swap budget** is the maximum number of such swaps that can be performed per time unit without exceeding memory or bandwidth constraints.  
Why must we bound it?  

1. **Memory geometry:** Every swap reallocates a block of contiguous GPU memory. If \(B\) bytes are freed and \(S\) bytes requested, the allocator’s fragmentation cost grows super‑linearly with \(S/B\). Bounding swaps keeps fragmentation under control, preserving cache locality.  
2. **Communication entropy:** Swapping incurs data transfer across PCIe. The expected communication volume is proportional to the *entropy* of active adapters; a high swap rate inflates variance, degrading throughput (by Amdahl’s law).  
3. **Probabilistic stability:** Frequent swaps create a Markov chain over adapter states. Without a budget, the chain mixes too fast, leading to noisy gradients—this is the **noisy‑neighbor** effect: a job’s loss surface is perturbed by stochastic interference from concurrent swaps.

**Non‑obvious insight:** The optimal budget is not merely a static limit; it should adapt to *gradient variance* of each job. A job with low variance tolerates more swaps (high bandwidth usage) without harming convergence, while high‑variance jobs need stricter limits to avoid amplifying noise from neighboring adapters. Thus, the adapter‑swap budget and noisy‑neighbor problem are two sides of a single resource‑optimization trade‑off governed by memory geometry and stochastic gradient stability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
