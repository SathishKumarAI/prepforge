---
qid: ing_d8015e57d3__fp__local
question: 'Explain: Design the serving stack for a Claude-scale LLM API. Maximise
  GPU utilisation without wrecking p99 latency.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 445
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:39:48-05:00'
sources: []
---

**Why we care about both GPU‑utilisation and p99 latency**

A Claude‑scale model is a massive transformer whose forward pass is a sequence of matrix multiplications that are embarrassingly parallel on GPUs.  
If we run many requests in isolation, each request occupies a full GPU or a large slice of it; utilisation stays low while latency can be very good (few ms).  
Conversely, packing many small batches maximises utilisation but introduces queuing delays and tail‑latency spikes: a slow kernel or a tiny batch forces the scheduler to wait for all tokens in the block, pushing p99 beyond acceptable limits.

**The optimisation principle**

Treat the serving stack as a *constrained scheduling problem* where the objective is **maximise GPU FLOPs per second** subject to **p99 latency ≤ T**.  
This turns into a two‑stage policy:

1. **Dynamic batching with size caps** – batch requests up to a *critical size* \(B_{\text{crit}}\) that keeps kernel launch overhead negligible, yet small enough that the worst‑case queue delay < (T–kernel\_time).  
2. **Latency‑aware preemption** – if a request’s head‑of‑line waiting time exceeds \(\Delta = T - \text{kernel}_\text{time}\), we *preempt* it: run it alone on a spare GPU slice, or move it to the next queue tier.

**Non‑obvious insight**

The tail is dominated not by kernel execution but by **token‑count variance**. A request with many tokens stalls the entire batch while its short peers finish. By *predicting token length* (via a lightweight LSTM) and grouping requests of similar lengths, we keep all kernels in sync, eliminating hidden head‑of‑line blocking that conventional batching ignores.

**Result**

A two‑tier queue with size‑aware dynamic batching plus token‑length clustering yields > 90 % GPU utilisation while keeping p99 latency within the target window.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
