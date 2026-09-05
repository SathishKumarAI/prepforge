---
qid: ing_64e65634dd__star__local
question: 'Explain: Step 4 — Scaling Websites for Millions of Users'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 357
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:49:21-05:00'
sources: []
---

**Situation:**  
In my last role I was leading a recommendation engine that powered a fashion e‑commerce site. Two weeks before launch we projected 1 M daily active users, but our load tests showed the inference server could only handle ~20 k requests per second with acceptable latency.

**Task:**  
I had to design and deploy a system that would scale the ML inference layer to millions of concurrent visitors while keeping response time under 200 ms and cost below $10K/month.

**Action:**  
First, I containerized the PyTorch model using TorchServe and exposed it behind an NGINX ingress. Then I leveraged Kubernetes autoscaling: pod replicas were driven by CPU/latency metrics, and a custom admission controller capped pod startup to avoid thrashing. To reduce per‑request overhead, I swapped out heavy embeddings for 128‑dim float16 vectors stored in RedisCache; cache misses triggered a lightweight batch inference job that processed up to 1 k requests at once on an EC2 spot fleet. Finally, I implemented request sharding across three availability zones and added a global CDN (CloudFront) to serve static assets, cutting round‑trip time by ~30 ms.

**Result:**  
The system handled 3 M concurrent users during the first month without any SLA breaches; latency stayed below 180 ms on average. Monthly operational cost dropped from an estimated $25K to $8.7K. I learned that micro‑optimizing data pipelines and coupling autoscaling with intelligent caching can turn a bottleneck into a resilient, cost‑effective service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
