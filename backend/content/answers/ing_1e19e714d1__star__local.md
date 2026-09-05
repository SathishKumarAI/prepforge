---
qid: ing_1e19e714d1__star__local
question: 'Explain: After a routine deploy, P99 TTFT went from ~600 ms to ~4 s. Throughput,
  error rate, GPU utilization and the model version are all unchanged. Debug it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 265
output_tokens: 307
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:30:04-05:00'
sources: []
---

**Situation:**  
After a routine rollout of our recommendation model, we noticed P99 time‑to‑first‑byte (TTFT) spiked from ~600 ms to ~4 s, even though throughput, error rate, GPU usage, and the model version stayed constant.

**Task:**  
Pinpoint the root cause of the latency jump and restore sub‑second TTFT without impacting other metrics.

**Action:**  
I started with a low‑level trace on the inference server. The logs showed that request routing was still hitting the same model instance, but the initial warm‑up phase had become longer. I examined the GPU’s memory allocator and discovered an unexpected increase in fragmented allocations after a recent patch to the CUDA driver. Using `nvidia-smi` I confirmed that the GPU memory utilization was steady, yet the fragmentation caused the kernel launch latency to balloon. I rolled back the driver update, re‑initialized the model with `torch.backends.cuda.matmul.allow_tf32=False`, and added a small pre‑warm batch to clear stale allocations before serving real traffic.

**Result:**  
TTFT returned to ~580 ms within 15 minutes of deployment rollback, throughput remained at 12k req/s, error rate stayed below 0.01%, and GPU utilization was unchanged. The exercise reinforced the importance of monitoring memory fragmentation in GPU workloads and keeping driver updates tightly coupled with performance regression tests.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
