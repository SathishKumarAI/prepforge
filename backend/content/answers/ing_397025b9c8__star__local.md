---
qid: ing_397025b9c8__star__local
question: 'Explain: FlashAttention-2 (Work Partitioning) — Attention Mechanisms'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 397
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:23:58-05:00'
sources: []
---

**Situation** – In my last role I was tasked with speeding up the transformer training pipeline for a large language model that had to process 32‑bit token sequences of length 8,192. The baseline attention implementation was GPU‑bound: memory bandwidth saturated and kernel launch overheads killed our throughput.  

**Task** – Reduce the end‑to‑end latency per batch by at least 30 % while keeping the same model accuracy, so we could hit a new quarterly target of training 10M tokens per hour on a single V100.

**Action** – I implemented FlashAttention‑2 with work partitioning. First, I re‑structured the attention kernel to split each matrix multiplication into *grid* and *block* tiles that fit in shared memory, reducing global memory traffic. Then I introduced an adaptive *work partitioning* scheme: based on the current sequence length, the scheduler dynamically allocated more threads per block for short heads (to keep occupancy high) and fewer threads for long heads (to avoid register pressure). I also swapped the softmax calculation into a two‑stage reduction that leveraged warp‑level primitives, cutting the number of memory accesses by 40 %. All changes were coded in CUDA C++ with cuBLAS fallback paths for edge cases.

**Result** – The new attention routine cut per‑batch latency from 1.8 s to 1.2 s on the V100, a 33 % speedup and a 25 % increase in tokens processed per hour. We also observed a minor 0.02 % drop in perplexity, which was within acceptable bounds. This project taught me how fine‑grained work partitioning can unlock hidden GPU resources and that profiling every kernel launch is essential to avoid counterintuitive bottlenecks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
