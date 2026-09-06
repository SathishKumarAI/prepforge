---
qid: ing_ec54c72e53__fp__local
question: 'Explain: A customer''s LLM endpoint p99 latency jumped from 2s to 20s this
  week. No code changes on their side. Debug it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 528
total_tokens: 719
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:22:07-05:00'
sources: []
---

**Why the jump matters**

A 95‑th percentile (p99) latency of 2 s is already a performance target; a sudden rise to 20 s means that 1 % of requests are now taking ten times longer. In an LLM service, p99 latency is dominated by *resource contention* and *queuing*, not by the model itself.  

**Fundamental diagnostic loop**

| Step | What we probe | Why it matters |
|------|---------------|----------------|
| **1. Monitor queue depth** | Count how many requests sit in the scheduler’s queue per worker. | If the depth spikes, back‑pressure is inflating wait times. |
| **2. Check GPU/CPU utilisation** | Measure utilisation and memory pressure on each accelerator. | Saturation forces context switches or spills to CPU, blowing latency. |
| **3. Inspect request mix** | Log prompt length, token count, and batch size. | A few long prompts can dominate a batch’s compute time. |
| **4. Verify infrastructure health** | Look at network I/O, disk throughput, and any recent autoscaling events. | Latency spikes often come from transient resource shortages or mis‑tuned autoscalers. |

**Deep principle**

LLM latency is essentially a *queuing system* with a service rate set by the underlying hardware. The p99 tail grows when either the arrival rate exceeds capacity or the service time distribution gets heavier (e.g., due to larger prompts).  

**Non‑obvious insight**

Even without code changes, **model weight sharding or checkpoint reloading can trigger implicit “cold starts.”** If a GPU’s VRAM becomes full because of a previous inference batch, the runtime may spill part of the model to disk. Subsequent requests then incur disk I/O latency—often unnoticed until a queue builds up enough to force spilling.

**Action plan**

1. Confirm queue depth and GPU utilisation spikes.
2. Identify any recent autoscaling or memory pressure events.
3. If sharding is active, monitor for VRAM spill‑back signals; consider increasing batch size or adding GPUs temporarily.
4. Re‑run a synthetic workload with varied prompt lengths to pinpoint the threshold that triggers the spike.

By treating latency as a queuing problem and watching the resource utilisation signals, you’ll isolate whether it’s contention, cold starts, or an unseen infrastructure change causing the 20 s tail.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
