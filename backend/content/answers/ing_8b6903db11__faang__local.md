---
qid: ing_8b6903db11__faang__local
question: 'Explain: Continuous Batching (Iteration-level) — Batching Strategies'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 550
total_tokens: 785
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:08:22-05:00'
sources: []
---

**Clarify**  
The interviewer wants an explanation of *continuous (iteration‑level) batching* for AI workloads—how we combine micro‑batches in a streaming pipeline to keep accelerators busy while respecting latency and memory constraints. I’ll assume the context is training or inference on GPUs/TPUs, with a fixed batch size budget per iteration.

**Approach**  
1. Define the *iteration* as one optimizer step (or forward–backward pass).  
2. Identify two batching dimensions: **data‑parallel** (different samples) and **model‑parallel** (different layers or tensor partitions).  
3. Show how a *continuous* policy schedules micro‑batches on the fly, rather than pre‑allocating static batches.

**Depth**  
- **Micro‑batching**: split each incoming sample into chunks that fit in device memory; push them sequentially so that compute and I/O overlap.  
- **Dynamic scheduling**: use a priority queue of pending micro‑batches; the scheduler pulls from this pool whenever an accelerator core becomes idle.  
- **Latency vs throughput trade‑off**: larger continuous batches increase GPU utilisation but raise per‑sample latency; we can tune by setting a *max batch size* and a *backpressure threshold*.  
- **Memory accounting**: track buffer usage; when a micro‑batch finishes, free its memory before admitting the next.  
- **Implementation**: frameworks like TensorFlow’s `tf.data` pipeline with `prefetch`, or PyTorch’s `DataLoader` + `torch.utils.checkpoint` for dynamic batching.

**Edge Cases**  
- Skewed sample sizes → pad to a common size or use *ragged tensors*.  
- Real‑time inference where latency budgets are strict → fall back to single‑sample processing.  
- GPU fragmentation when many small micro‑batches arrive → batch consolidation step.

**Optimize & Communicate**  
Explain that continuous batching can be tuned by profiling memory bandwidth, compute stalls, and adjusting the *micro‑batch* size. Show a simple algorithmic sketch:

```python
while True:
    if accelerator_idle() and queue_not_empty():
        mb = pop_micro_batch()
        launch(mb)
```

Conclude with how this strategy scales to multi‑GPU clusters by replicating the scheduler per node and sharding the micro‑batch queue. This narrative demonstrates structured thinking, clear communication, and technical depth—key signals for a FAANG interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
