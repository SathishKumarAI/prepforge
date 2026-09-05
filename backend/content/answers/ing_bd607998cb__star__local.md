---
qid: ing_bd607998cb__star__local
question: 'Explain: Q99: You''re deploying a high-throughput inference service for
  an open-weight model. Pick between vLLM, SGLang, and TensorRT-LLM for a specific
  workload and defend the choice.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 269
output_tokens: 363
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:49:40-05:00'
sources: []
---

**Situation:**  
In Q3 of last year we were launching a real‑time recommendation engine that had to serve over 10 k inference requests per second on a single NVIDIA A100. The model was an open‑weight transformer (12B parameters) with a 128‑token context window, and latency had to stay below 25 ms for each request.

**Task:**  
Select the deployment framework that maximizes throughput while keeping GPU memory usage under 32 GB, and justify the choice in terms of batch sizing, kernel fusion, and scaling strategy.

**Action:**  
I benchmarked vLLM, SGLang, and TensorRT‑LLM. vLLM’s async batching gave ~8k rps but exceeded our memory limit when using its default block size. SGLang offered aggressive KV cache compression, yet its CUDA kernel launch overhead was higher for short batches. TensorRT‑LLM, with its engine builder that fuses attention and feed‑forward kernels, allowed me to compile a 12B model into an optimized TRT engine; I set the maximum batch size to 32 and used TensorRT’s dynamic shape support to handle variable token lengths. This reduced per‑request latency to 18 ms while keeping memory at ~28 GB.

**Result:**  
Deploying with TensorRT‑LLM increased throughput by 35% over vLLM and cut GPU usage by 10%, enabling us to run the service on a single A100 instead of scaling out. I learned that for high‑throughput, short‑latency workloads, kernel fusion and dynamic shape handling are critical; choosing the right framework depends on the memory budget and batch size distribution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
