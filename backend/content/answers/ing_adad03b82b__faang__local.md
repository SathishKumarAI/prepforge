---
qid: ing_adad03b82b__faang__local
question: 'Explain: Redundant Architectures — Reliability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 553
total_tokens: 787
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:27:15-05:00'
sources: []
---

**Clarify**  
You’re asking how *redundant architectures* (e.g., active‑active, active‑standby, multi‑region) improve system reliability in ML pipelines. I’ll assume we’re talking about production‑grade inference services that must stay online despite failures and still meet latency SLAs.

**Approach**  
1. Define reliability goals (MTBF, MTTR, uptime).  
2. Identify failure modes: node crash, network partition, data corruption, model drift.  
3. Map redundancy patterns to those failures.  
4. Quantify impact on availability, cost, and complexity.  

**Depth**  
- **Active‑Active**: Two or more replicas serve traffic simultaneously; a health check router (e.g., Envoy) balances load. If one node fails, the others absorb traffic instantly—zero‑downtime. Latency can even improve due to local caching.  
- **Active‑Standby**: One primary handles traffic while a secondary stays idle or in sync via hot‑standby (e.g., checkpoint replay). Failure triggers failover; MTTR is higher but costs lower because standby resources are underutilized.  
- **Multi‑Region**: Deploy identical services across geographic zones. Use global load balancers and cross‑region data replication. Handles both node‑level failures and regional outages, boosting *regional* availability to 99.999%.  
- **Model Versioning & Canary Releases**: Keep multiple model checkpoints alive; route a fraction of traffic to new versions to detect regressions before full rollout.

Complexity scales as O(n) for n replicas (deployment, monitoring, state sync). Cost is linear in idle capacity, but the *value*—continuous uptime and reduced MTTR—often outweighs it.

**Edge Cases**  
- Network partitions can cause split‑brain; use consensus protocols (Raft/Zookeeper) to elect a leader.  
- Data drift: redundant models may diverge if training pipelines aren’t synchronized.  
- Resource contention: replicas might compete for GPU/CPU, affecting latency.

**Optimize & Communicate**  
Start with an *active‑standby* tier for critical endpoints; add *active‑active* shards for high‑traffic inference; finally roll out *multi‑region* for global services. Explain trade‑offs in a Gantt‑style diagram: cost vs. availability, and show how each layer reduces MTTR by a factor (e.g., 10×). Conclude that redundant architectures are the backbone of ML reliability, turning “single point of failure” into “continuous service.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
