---
qid: ing_c15af1bd93__aws__local
question: 'Explain: Like we said, scalability is being able — System Design BASICS:
  Horizontal vs. Vertical Scaling'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 518
total_tokens: 759
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:40:26-05:00'
sources: []
---

**Situation / Task**

In a recent ML‑pipeline project I had to design the inference layer for a recommendation system that served 10 M daily requests. The key requirement was *scalable throughput* while keeping latency < 50 ms.

**Action (Design)**

1. **Horizontal scaling** – I chose an autoscaling pool of stateless EC2 Spot Instances behind an Application Load Balancer. Each instance runs a TensorFlow Serving container; new pods are launched via ECS Fargate when CloudWatch metrics hit 70 % CPU or 200 req/s per instance.  
   *Why horizontal?* The model is GPU‑heavy but each inference request is independent, so adding more nodes keeps the load balanced and eliminates single points of failure.

2. **Vertical scaling** – For peak bursts (up to 5× normal traffic) I enabled EC2 `c6i.large` burstable instances that automatically increase CPU credits. This gives a cost‑efficient “burst” without overprovisioning during off‑peak hours.

3. **Cache layer** – A Redis cluster (ElastiCache) stores the top‑10 predictions per user, reducing 60 % of cold‑start requests and cutting inference latency to <20 ms for cache hits.

4. **Observability & Auto‑Healing** – CloudWatch alarms trigger Lambda functions that restart unhealthy containers; health checks are set at 90 % success rate before traffic is routed.

**Result**

- Achieved 99.8 % request availability during a 24‑hour spike test (10× baseline).  
- Latency dropped from 120 ms to <45 ms for 95th percentile requests.  
- Cost savings of 32 % vs. a purely vertical design by leveraging Spot and burstable instances.

**Leadership Principles**

- **Ownership** – I took full responsibility for end‑to‑end performance, continuously iterating on scaling policies.  
- **Dive Deep** – Analyzed per‑request CPU, memory, and network metrics to fine‑tune instance types and cache size.  

**Bar‑raiser takeaways**

- Quantified impact (latency & cost).  
- Demonstrated depth: trade‑offs between horizontal vs. vertical scaling, caching strategy, and cost models.  
- Showed learning: after the first spike test I adjusted the autoscaling threshold to avoid over‑provisioning, turning a failure into an optimization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
