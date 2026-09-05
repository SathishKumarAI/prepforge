---
qid: ing_de0257d04e__star__local
question: 'Explain: Performance vs scalability — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 273
output_tokens: 306
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:52:28-05:00'
sources: []
---

**Situation**  
In my last role I was tasked with deploying a recommendation model that served 1.2 M users per day on our e‑commerce platform. The existing inference pipeline, built with TensorFlow Serving, could handle 200 requests per second but we were hitting latency spikes during flash sales.

**Task**  
I needed to reduce average inference latency below 80 ms while ensuring the system could scale to 5× traffic without a proportional increase in cost or engineering effort.

**Action**  
First I profiled the model with TensorBoard and identified that GPU memory fragmentation was the bottleneck. I switched from eager execution to graph‑mode, quantized the weights to INT8, and wrapped the model in NVIDIA Triton Inference Server for dynamic batching. To address scalability, I containerised the inference service using Docker and orchestrated it with Kubernetes, leveraging horizontal pod autoscaling based on CPU usage. I also added a lightweight caching layer (Redis) for cold‑start requests.

**Result**  
Latency dropped from 180 ms to 65 ms during peak periods, meeting our SLA. The system handled a traffic surge of 5× without exceeding the same GPU cluster size, saving us roughly $2k/month in compute costs. I learned that performance tuning often involves low‑level optimisations (quantisation, batching), while scalability is achieved through stateless design and autoscaling infrastructure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
