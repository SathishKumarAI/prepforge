---
qid: ing_d71be77238__faang__local
question: 'Q: How would you design infrastructure for 1M LLM queries per day?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 508
total_tokens: 747
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:59:34-05:00'
sources: []
---

**Clarify**  
The goal is to serve ~1 million LLM inference requests daily (~11 k/s). We need latency < 200 ms, high availability (99.9%), and cost‑efficiency. Key assumptions: each request uses a pre‑trained model (e.g., GPT‑3 sized), payload size ≈ 2 KB, and we’re allowed to cache partial results. Ask about SLAs, acceptable GPU type, budget ceiling, and whether we can use managed services.

**Approach**  
1. **Micro‑service front‑end**: API gateway → request router → rate limiter.  
2. **Model serving layer**: containerized inference pods with GPU autoscaling (K8s + NVIDIA Device Plugin). Use model parallelism to split a single large model across GPUs, enabling sub‑ms warm starts.  
3. **Caching & batching**: LRU cache for identical prompts; micro‑batch incoming requests (size 16–32) to amortize GPU overhead.  
4. **Observability**: Prometheus + Grafana for latency, GPU utilisation; alerting on SLA breaches.

**Depth**  
- Autoscaling policy: start with a baseline of 50 pods, scale up by 10% per 200 ms latency spike, capped at 500 pods.  
- Cost: A100 GPUs cost ≈$3/hr; running 300 pods for peak (~1 M/day) ≈$216k/month.  
- Latency: Batching reduces per‑token inference time from ~20 ms to ~12 ms, keeping overall <200 ms.  
- Fault tolerance: each pod replicates across zones; Kubernetes ensures rapid failover.

**Edge Cases**  
- Sudden traffic spike (flash sale): autoscaler may lag → pre‑provision burst pods.  
- Model updates: use blue/green deployments to avoid downtime.  
- Cold start for new models: keep a “warm” pool of idle GPUs.

**Optimize & Communicate**  
Future improvements: adopt serverless GPU runtimes, explore model distillation for cheaper inference, and integrate reinforcement‑learning‑based request prioritisation. I would present the design as a slide deck with timelines, cost projections, and risk matrix, emphasising how each component meets SLA targets while staying within budget.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
