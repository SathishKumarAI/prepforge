---
qid: ing_8b6903db11__star__local
question: 'Explain: Continuous Batching (Iteration-level) — Batching Strategies'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 381
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:11:29-05:00'
sources: []
---

**Situation:**  
At my last role I was building a real‑time recommendation engine for a streaming platform. The model had to train on millions of user interaction logs per day, but our GPU cluster could only process batches of 8k examples before memory throttled.

**Task:**  
I needed to keep the training pipeline continuous so that we never hit idle GPU time, while still maintaining the same effective batch size for gradient stability and convergence speed.

**Action:**  
I implemented an iteration‑level continuous batching system. First, I introduced a ring buffer that streamed raw logs into memory as they arrived. Every micro‑second, the buffer would pull 1k samples, compute gradients, and push them to a shared CUDA queue. Meanwhile, a second worker consumed from this queue, accumulating gradients until it reached the target effective batch size of 8k before performing an optimizer step. I also added dynamic scheduling: if GPU utilization dropped below 70 %, the system would temporarily lower the micro‑batch size to avoid stalling; when spikes occurred, it would ramp back up. This approach leveraged PyTorch’s `torch.utils.data.IterableDataset` and CUDA streams for overlap.

**Result:**  
Training throughput increased from 4 Giga‑samples/day to 12 Giga‑samples/day (3×), reducing epoch time from 48 h to 16 h. The model’s AUC improved by 1.2 percentage points due to more stable gradient estimates. I learned that fine‑tuning micro‑batch sizes and leveraging asynchronous CUDA streams can turn a bottleneck into a high‑throughput pipeline without sacrificing convergence quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
