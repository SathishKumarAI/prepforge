---
qid: ing_a620328784__faang__local
question: 'Explain: 4.1 Requirement 1: Traffic Distribution — Design Load Balancer
  | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 457
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:11:12-05:00'
sources: []
---

**Clarify**  
We’re asked to design a load‑balancing system that satisfies “Traffic Distribution” for Requirement 1 of the ML pipeline.  
Key assumptions: * traffic is HTTP/HTTPS, stateless micro‑services, high availability, low latency, and we need horizontal scaling.* Ask: Do we balance inbound traffic or internal model inference requests? Is global or regional distribution required?

**Approach**  
1. **Front‑end LB** – a Layer 4/7 load balancer (e.g., AWS ALB) that distributes user requests to region‑specific edge nodes.  
2. **Regional LB** – within each region, a Kubernetes Ingress controller or Envoy proxy that shards traffic across model replicas using consistent hashing on request key (user id / session).  
3. **Health checks & auto‑scale** – liveness probes + CloudWatch metrics trigger horizontal pod scaling.  
4. **Traffic shaping** – weighted round‑robin to honor capacity and SLA, with dynamic weights from a config service.

**Depth**  
- *Consistency*: consistent hashing guarantees that the same key maps to the same replica, reducing cache misses.  
- *Complexity*: O(log N) for hash routing; LB overhead negligible (<1 ms).  
- *Trade‑offs*: Consistent hashing can cause uneven load if keys are skewed; mitigate with virtual nodes.

**Edge Cases**  
- Sudden traffic spikes → cold start latency on new pods.  
- Node failures → request loss if health checks lag.  
- Skewed key distribution → hotspot replicas.

**Optimize & Communicate**  
We’d add a *traffic mirroring* layer to test new model versions without impacting live traffic, and implement a *rate limiter* per user to protect against abuse. I’d present this as a diagram, walk through the request flow, and quantify latency (e.g., <50 ms) and throughput (>10k req/s). This showcases structured reasoning, depth in design choices, and awareness of operational concerns—key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
