---
qid: ing_9a876f490a__faang__local
question: 'Explain: A team wants to self-host a 13B model for ~1M requests/day. Size
  the GPU fleet.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 508
total_tokens: 755
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:43:43-05:00'
sources: []
---

**Clarify**  
We need to estimate the number of GPUs required to serve ~1 M inference requests per day from a 13‑billion‑parameter model (≈ 54 GB if using FP16). Key assumptions:  
* Each request requires a single forward pass (no caching).  
* Average latency target ≈ 200 ms.  
* Inference uses FP16 for speed/throughput.  
* We allow 10 % GPU idle time for maintenance and queueing.

**Approach**  
1. Compute per‑GPU throughput at the target latency.  
2. Derive total requests that one GPU can handle in a day.  
3. Divide daily request volume by per‑GPU capacity to get fleet size.  

**Depth**  
*Typical 40 GB‑RAM GPUs (A100, RTX 8000) achieve ≈ 1–2 inference/sec for a 13B FP16 model at ~200 ms latency.*  
Assume **1.5 inferences/s** per GPU → 129 600 requests/day.  
Daily load: 1 000 000 / 129 600 ≈ **7.7 GPUs**.  
Rounding up and adding a 10 % buffer gives **≈ 9–10 GPUs**.

*Complexity*: O(1) calculation; dominated by hardware performance curves, not algorithmic complexity.  
*Trade‑offs*: Using newer GPUs (A100/RTX 4090) boosts throughput (~2×), reducing fleet to ~5–6 units but increases cost and power consumption.

**Edge Cases**  
*Burst traffic*: if spikes exceed 200 ms latency, additional spot instances or autoscaling may be needed.  
*Model updates*: larger model sizes (e.g., 30B) would require proportionally more GPU memory or sharding across GPUs.  
*Precision trade‑off*: using INT8 could halve memory and double throughput but might degrade accuracy.

**Optimize & Communicate**  
To refine the estimate, gather empirical latency metrics on a pilot GPU, then adjust the per‑GPU request rate accordingly. Explain to stakeholders that the 10 % buffer covers queueing and maintenance; any tighter SLA would push the fleet size up linearly. This structured reasoning demonstrates clear assumptions, quantitative analysis, and awareness of operational nuances—key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
