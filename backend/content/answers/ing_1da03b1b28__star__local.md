---
qid: ing_1da03b1b28__star__local
question: 'Explain: Serving Infrastructure'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 317
total_tokens: 546
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:28:50-05:00'
sources: []
---

**Situation:**  
At my previous company we launched a real‑time recommendation engine for an e‑commerce platform. Within two weeks of production, latency spiked to 350 ms on peak traffic (5k requests/sec), causing cart abandonment rates to jump by 12%.

**Task:**  
I was tasked with redesigning the serving layer so that end‑to‑end inference latency stayed below 120 ms even under burst loads, while keeping cost per request under $0.02.

**Action:**  
First, I profiled the existing TensorFlow Serving deployment on a single GPU node and identified CPU‑bound serialization as a bottleneck. I migrated to NVIDIA Triton Inference Server with mixed‑precision (FP16) models, enabling tensor parallelism across 4 GPUs. Next, I introduced a request queueing strategy using Redis Streams to smooth traffic spikes and implemented autoscaling via Kubernetes HPA based on GPU memory usage. Finally, I containerized the entire stack with Docker Compose for local testing, then deployed it to our cloud cluster with spot instances to cut compute costs.

**Result:**  
Latency dropped from 350 ms to 85 ms during peak periods, reducing cart abandonment by 9%. The cost per inference fell to $0.015, saving roughly $18k/month. I learned that combining model optimization, efficient queuing, and dynamic scaling is key to robust AI serving infrastructure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
