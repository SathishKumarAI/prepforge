---
qid: ing_8b3105764c__star__local
question: 'Explain: Load Balancing — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 386
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:11:00-05:00'
sources: []
---

**Situation**  
While leading the redesign of our real‑time analytics platform, we had to shift from a single‑node data ingestion service to a horizontally scalable architecture. The service needed to accept both high‑volume telemetry (UDP) and secure configuration updates (TCP).  

**Task**  
Design a load balancer that could efficiently route UDP traffic for low‑latency event streams while guaranteeing reliable delivery of TCP control messages, all without dropping packets or introducing bottlenecks.  

**Action**  
I evaluated Nginx, HAProxy, and Envoy. I chose Envoy because it natively supports UDP proxying with its “UDP Proxy” feature and offers advanced TCP load‑balancing algorithms (least‑conn, round‑robin). For UDP, I enabled *traffic mirroring* to a monitoring sidecar that logged packet counts and dropped‑rate metrics, allowing us to tune the *max‑packet-size* and *receive-buffer* settings. For TCP, I configured TLS termination at Envoy, then used *consistent hashing* on client IDs to ensure session stickiness for configuration updates. I also added health checks that pinged a lightweight HTTP endpoint on each backend node, so unhealthy nodes were automatically removed from both UDP and TCP pools.  

**Result**  
The new setup handled 2 M events per second over UDP with <1 ms latency while maintaining 99.9% TCP transaction success. Overall system throughput increased by 35%, and we eliminated the previous packet‑loss spikes that caused stale configurations in production. I learned that choosing a single load balancer capable of dual protocol support can drastically simplify operations, but it requires careful tuning of buffer sizes and health‑check intervals to balance latency against reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
