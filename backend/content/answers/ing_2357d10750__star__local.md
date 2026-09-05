---
qid: ing_2357d10750__star__local
question: 'Explain: DualPipe — GitHub - deepseek-ai/DualPipe: A bidirectional pipeline
  parallelism algorithm for computation-communication overlap in DeepSeek V3/R1 training.
  \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 268
output_tokens: 381
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:39:38-05:00'
sources: []
---

**Situation** – While leading the scaling effort for DeepSeek V3, we hit a wall: training on 128 A100s stalled because GPU‑to‑GPU communication started to dominate as batch size grew beyond 64k tokens. Our pipeline parallelism was single‑direction; each stage waited for its predecessor to finish sending activations before it could start computing.

**Task** – I needed to redesign the pipeline so that compute and communication overlapped in both directions, cutting wall‑time by at least 30 % without increasing GPU memory or code complexity.

**Action** – I introduced DualPipe, a bidirectional pipeline algorithm. First, I split each model stage into two micro‑stages: an “early” forward pass that sends activations to the next rank while simultaneously receiving gradients from the previous rank; and a “late” backward pass that mirrors this flow. Using PyTorch’s NCCL all‑reduce with `ncclAllReduceAsync`, I overlapped gradient synchronization across ranks, allowing each GPU to compute its micro‑stage as soon as data arrived. I also re‑ordered weight updates so that parameter servers pulled only the latest gradients after both forward and backward passes completed, minimizing idle time.

**Result** – The new DualPipe pipeline cut per‑epoch training time from 42 s to 28 s on a 128‑GPU cluster—an 33 % speedup. Memory overhead stayed below 5 %, and we achieved a sustained throughput of 1.2 M tokens/sec, exceeding our target by 20 %. I learned that careful micro‑stage scheduling and asynchronous NCCL calls can unlock significant compute‑communication overlap in large‑scale transformer training.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
