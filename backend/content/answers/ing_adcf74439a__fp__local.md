---
qid: ing_adcf74439a__fp__local
question: 'Explain: High Availability — 8 Common System Design Problems and Solutions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 652
total_tokens: 825
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:14:08-05:00'
sources: []
---

**High‑Availability (HA) in ML systems** is the guarantee that a model or service stays usable even when components fail.  
At its core, an ML pipeline is a *probabilistic inference engine*: it consumes data, runs deterministic transformations, and emits predictions with bounded latency. To keep this engine alive we must **optimize for reliability (information‑theoretic “survivability”)** while preserving throughput.

| # | Design pitfall | Why it breaks HA | First‑principle fix |
|---|----------------|------------------|----------------------|
| 1 | *Single point of failure* (SPOF) | One node’s crash drops the entire service. | **Redundancy & quorum**: replicate state across ≥ k nodes, use a consensus protocol (Paxos/Raft) to keep them consistent. |
| 2 | *Data inconsistency* | Replicas diverge; stale predictions occur. | **Write‑through cache + version vector**: ensure every update propagates before acking clients. |
| 3 | *Hot‑spot bottleneck* (e.g., model weight server) | All traffic hits one node → latency spike. | **Sharding & load‑balancing**: split weights by feature space; use consistent hashing to route requests. |
| 4 | *Network partition* | Subset of nodes isolated, leading to split‑brain. | **Partition tolerance + majority rule**: only a quorum can serve predictions during split; others stall or switch to degraded mode. |
| 5 | *Unobserved failures* (silent crashes) | Service appears healthy but no predictions. | **Health‑checks & watchdogs**: heartbeat and self‑diagnostics with automatic failover. |
| 6 | *Resource exhaustion* (CPU, GPU spikes) | Overcommit leads to OOM or long GC pauses. | **Auto‑scaling + circuit breaker**: spin up new workers when load exceeds threshold; temporarily drop non‑critical traffic. |
| 7 | *Model drift* | Continual retraining may render old replicas obsolete. | **Shadow deployment + canary rollouts**: run new model in parallel, compare outputs before full cutover. |
| 8 | *Dependency failure* (e.g., feature store) | Downstream component halts inference. | **Graceful degradation & fall‑back strategies**: use cached or default features when external source is unavailable. |

### Non‑obvious insight  
Most designers treat HA as a *hardware redundancy problem*. In ML, the **statistical nature of predictions** allows us to accept *bounded staleness* for the sake of availability. By quantifying acceptable error margins (e.g., “prediction drift < 2%”) we can deliberately relax consistency guarantees, turning an otherwise costly consensus into a lightweight “eventual‑consistency” with bounded impact on model quality. This trade‑off is rarely articulated but often yields substantial cost and latency savings while still meeting user SLAs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
