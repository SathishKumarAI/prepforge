---
qid: ing_160cac0549__star__local
question: 'Explain: Um I think we did like 30 — Building Software Systems At Google
  and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 337
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:12:28-05:00'
sources: []
---

**Situation:**  
When I joined Google’s AI Platform team, the existing model serving stack was monolithic and couldn’t keep up with the 40% monthly growth in traffic for our recommendation engine. Latency had slipped from 120 ms to over 300 ms, pushing us toward SLA violations.

**Task:**  
I needed to redesign the deployment pipeline so that new models could roll out in under five minutes while guaranteeing zero downtime and maintaining sub‑200 ms inference latency for end users.

**Action:**  
First, I mapped the current system using Prometheus metrics and identified bottlenecks in the request router. I introduced a sidecar architecture: each model instance ran in its own container behind Envoy proxies that handled traffic splitting via *canary* releases. Using TensorFlow Serving with gRPC, I added a version‑ing layer that allowed hot‑swap of models without restarting services. To keep latency low, I integrated NVIDIA’s Triton Inference Server and tuned GPU batch sizes based on real‑time queue depth. Finally, I automated the entire workflow in Spinnaker, adding smoke tests that validated inference accuracy before promotion.

**Result:**  
The new system cut model rollout time from 45 minutes to under five, reduced average latency back to 180 ms, and increased throughput by 35%. It also lowered operational costs by 20% through better GPU utilization. I learned that decoupling serving from routing, coupled with rigorous observability, is key to scaling ML workloads in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
