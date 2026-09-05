---
qid: ing_5c4dec5827__star__local
question: 'Explain: Summary — Scalability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 362
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:32:02-05:00'
sources: []
---

**Situation:** At my last company we launched a recommendation engine that served 12 million users daily. The model was trained in Python with TensorFlow, but inference latency spiked to 350 ms on our existing Kubernetes cluster, causing a 4% drop in click‑through rate.

**Task:** I needed to redesign the deployment pipeline so that inference latency dropped below 100 ms while keeping cost per request under $0.0005 and ensuring the system could scale to 20 million concurrent users during peak events.

**Action:** I first profiled the model with TensorBoard and discovered that the dense layers were the bottleneck. I rewrote those layers in XLA‑compiled JIT code and exported the graph as a SavedModel. Next, I containerized the model using NVIDIA Triton Inference Server, which allowed multi‑model batching and GPU offloading. For scaling, I set up an autoscaling pool of gRPC workers behind a NGINX ingress with weighted round‑robin routing, and integrated Prometheus/Alertmanager to auto‑spin up new pods when CPU >70%. Finally, I added a cache layer (Redis) for the top 10k most frequent queries.

**Result:** Latency dropped from 350 ms to 78 ms, and throughput increased by 3×. The cost per request fell below $0.0004. During a flash sale we handled 20 million concurrent requests without outage. I learned that micro‑optimizing model ops, combining GPU inference with smart autoscaling, and caching hot paths are the key levers for ML scalability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
