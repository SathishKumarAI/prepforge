---
qid: ing_12aa7ae1d4__star__local
question: 'Explain: Build the full GPU memory budget for a serving deployment, and
  show how it determines maximum batch size and concurrency.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 391
total_tokens: 640
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:05:47-05:00'
sources: []
---

**Situation** – I was tasked with launching a real‑time image‑classification service for an e‑commerce client. The model (EfficientNet‑B3) had to handle 200 requests per second on a single NVIDIA A100, and we were limited to a $2 k monthly GPU budget.

**Task** – Build a precise GPU memory budget that would dictate the maximum batch size and concurrency level while keeping latency under 80 ms.

**Action** – First I profiled the model with PyTorch’s `torch.profiler` to capture peak tensor sizes during forward pass: input tensors (batch × 3 × 224 × 224) used ~1.8 GB, activations ~2.4 GB, and optimizer state was negligible in inference mode. I added 10 % overhead for CUDA kernels and driver buffers, arriving at a target of 4.5 GB per batch. With the A100’s 40 GB memory, I calculated that a safe maximum batch size was 12 (≈54 GB total including replicas). Next, I used NVIDIA Nsight to measure per‑request latency vs. concurrency; at batch 12 and 8 concurrent streams, latency stayed below 80 ms while throughput hit ~150 req/s.

**Result** – The service met SLA targets with a single GPU, saving ~$1.5 k/month. I learned that accurate tensor profiling and conservative overhead buffers are key to balancing batch size against concurrency in GPU‑bound deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
