---
qid: ing_cc8e5f6c9a__faang__local
question: 'Explain: Pros of Horizontal Scaling — Vertical vs Horizontal Scaling |
  System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 488
total_tokens: 725
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:34:55-05:00'
sources: []
---

**Clarify**  
You’re asking for a comparison between vertical (scale‑up) and horizontal (scale‑out) scaling in the context of ML workloads—especially when designing distributed systems that serve models or train on large datasets.

**Approach**  
1. List key benefits of horizontal scaling.  
2. Contrast with vertical scaling, highlighting trade‑offs.  
3. Provide concrete examples from ML pipelines (model serving, training clusters).  
4. Summarize why most FAANGs prefer horizontal for production.

**Depth**  

| Aspect | Vertical Scaling | Horizontal Scaling |
|--------|------------------|--------------------|
| **Capacity** | Limited by single machine’s CPU/RAM/IO; hitting a ceiling quickly. | Linear growth: add more nodes → proportional throughput. |
| **Fault Tolerance** | Single point of failure; downtime propagates to all users. | Redundant nodes; graceful degradation; auto‑recovery (e.g., Kubernetes pods). |
| **Latency & Throughput** | Lower network hops, but single node can become a bottleneck under spikes. | Load balancers distribute traffic; can handle thousands of concurrent inference requests. |
| **Cost & Efficiency** | High per‑unit cost for premium hardware; underutilization when idle. | Pay-as-you-go cloud instances; right‑size clusters to actual load. |
| **Operational Complexity** | Simpler stack, but upgrades may require downtime. | Requires orchestration (Docker/K8s), but enables rolling updates and autoscaling. |

**Edge Cases**  
- *Real‑time inference* on a single GPU: vertical scaling still valuable for ultra‑low latency.  
- *Small‑scale experiments*: vertical scaling is cheaper and faster to spin up.  
- *Data consistency*: sharding can introduce complexity; use consistent hashing or distributed parameter servers.

**Optimize & Communicate**  
Emphasize that horizontal scaling gives elasticity, resilience, and cost control—critical for FAANG’s global user base. When presenting, illustrate with a diagram of an inference cluster: load balancer → stateless model replicas → GPU‑backed workers. Conclude by noting that many teams adopt a hybrid approach: vertical for development/experimentation; horizontal for production serving.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
