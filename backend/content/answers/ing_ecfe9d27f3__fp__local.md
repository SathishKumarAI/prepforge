---
qid: ing_ecfe9d27f3__fp__local
question: Serving real-time TTS is a different capacity problem from serving a text
  LLM. Why, and how do you plan capacity?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 508
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:23:20-05:00'
sources: []
---

**Why the capacity profiles diverge**

The core objective of a text‑LLM service is *generation* over a long horizon: a single request can produce thousands of tokens, each token depends on all preceding ones, and latency scales with sequence length. The compute cost is therefore proportional to **sequence × model size**.  
A real‑time TTS system, in contrast, must turn *short bursts of audio* into speech at audio‑rate (≈ 16 kHz). Each output sample is a function of only the last few milliseconds of text and speaker state; the computation is essentially streaming, not sequentially chained. The latency budget is sub‑100 ms, so we need **predictable, low‑latency kernels** rather than large transformer layers.

**Planning capacity**

1. **Workload decomposition**  
   * TTS: split into phoneme‑level synthesis (tiny neural nets) + waveform generation (e.g., HiFi‑GAN).  
   * LLM: treat each request as a token stream; batch requests with similar prefixes to exploit GPU parallelism.

2. **Resource allocation**  
   * Assign dedicated inference GPUs for TTS, tuned for low‑precision matrix ops and small kernels.  
   * Use larger GPUs or multi‑node clusters for LLMs where batch sizes can amortize transformer overhead.

3. **Latency budgeting**  
   * For TTS, enforce strict per‑sample deadlines; use pre‑emptive scheduling to avoid GPU stalls.  
   * For LLMs, tolerate higher latency but maximize throughput by batching.

4. **Autoscaling logic**  
   * Monitor per‑second audio‑sample demand and token‑per‑request distribution.  
   * Scale TTS nodes linearly with sample count; scale LLM nodes logarithmically with request volume.

**Non‑obvious insight**

Because TTS kernels are so lightweight, a single GPU can handle many concurrent requests if the scheduler is fine‑grained. The bottleneck shifts from compute to **memory bandwidth and cache locality**, not raw FLOPs. Leveraging this, we can offload most of the LLM workload to CPUs or specialized accelerators while keeping TTS on GPUs that are underutilized by other tasks. This cross‑domain rebalancing is what truly differentiates capacity planning for real‑time TTS from traditional text‑LLM services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
