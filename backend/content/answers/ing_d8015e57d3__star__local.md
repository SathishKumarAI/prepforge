---
qid: ing_d8015e57d3__star__local
question: 'Explain: Design the serving stack for a Claude-scale LLM API. Maximise
  GPU utilisation without wrecking p99 latency.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 355
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:41:07-05:00'
sources: []
---

**Situation**  
At my previous company we were launching a new AI‑powered recommendation service that required exposing a Claude‑scale large language model (LLM) to millions of users. Our SLA demanded < 250 ms p99 latency, yet the model ran on a 8‑GPU cluster with limited memory.

**Task**  
Design a serving stack that maximises GPU utilisation while keeping p99 latency within spec and ensuring cost efficiency for the data‑science team.

**Action**  
I chose Triton Inference Server as the core runtime because of its native support for mixed precision and dynamic batching. I set up an NGINX reverse proxy to load‑balance requests across 4 Triton instances, each mapped to a single GPU with CUDA‑aware NVLink. To hit the latency goal, I enabled *dynamic batching* with a 5 ms window and capped batch size at 32; this kept GPU utilisation above 80 % during peak traffic while limiting queue delays. For memory optimisation, I used *FP16 quantisation* of the model weights (reducing per‑GPU footprint by ~70 %) and applied *tensor parallelism* across GPUs via PyTorch Distributed Data Parallel. Finally, I instrumented Prometheus metrics for GPU utilisation and request latency, feeding alerts into Grafana dashboards.

**Result**  
The deployment achieved 85 % average GPU utilisation, p99 latency of 210 ms under 10k QPS, and a 40 % reduction in inference cost versus the baseline. I learned that careful batching strategy and mixed‑precision inference are key to balancing throughput and tail latency at Claude scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
