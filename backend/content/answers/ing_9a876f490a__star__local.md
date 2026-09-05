---
qid: ing_9a876f490a__star__local
question: 'Explain: A team wants to self-host a 13B model for ~1M requests/day. Size
  the GPU fleet.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 343
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:41:25-05:00'
sources: []
---

**Situation:**  
At my previous company we were building a real‑time recommendation API that needed to serve about one million inference requests per day from a 13 B parameter transformer. The SLA required <120 ms latency for 95% of traffic, and we had to keep the entire stack on‑premises due to data‑privacy regulations.

**Task:**  
Determine the GPU fleet size and configuration that could handle the load while staying within our $5 k/month budget and ensuring high availability.

**Action:**  
I first profiled a single request on an A100 (40 GB) – it took 75 ms with batch size 1. Scaling to 1 M/day meant ~11.6 requests per second average, peaking at ~30 req/s during business hours. Using the A100’s peak throughput (~2000 tokens/s for a 13B model), I calculated that one GPU could handle roughly 50 req/s comfortably. To provide redundancy and accommodate burst traffic, I decided on **four A100 GPUs** in an autoscaling group behind a load balancer, each running inference with Triton Inference Server. This setup gives ~200 req/s capacity, leaving headroom for spikes and future model scaling.

**Result:**  
The deployment met the latency SLA (average 110 ms) while keeping operational costs at $3.8 k/month. I learned that accurate profiling + conservative safety margins are key to sizing GPU fleets for high‑volume AI workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
