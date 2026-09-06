---
qid: ing_fe8fa5a615__fp__local
question: 'Explain: Computer networking — Technical interviewing | Microsoft Careers'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 468
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:00:58-05:00'
sources: []
---

## Why Microsoft asks about computer networking in a ML‑centric interview

A machine‑learning system is not just a model; it is an *ecosystem* that must ingest data, train, serve predictions and learn online. The *bottleneck* of any large‑scale ML platform is the flow of information between heterogeneous services—data pipelines, feature stores, inference endpoints, monitoring stacks, and downstream consumers.  
To guarantee **latency guarantees**, **throughput scaling**, and **fault isolation**, a team must design network topologies that respect:

1. **Information‑theoretic constraints** – every packet carries *entropy*. If the channel capacity (bandwidth × bandwidth efficiency) is below the required entropy rate, training stalls or inference drifts.  
2. **Geometric locality** – latency grows roughly with physical distance and hop count; routing decisions can be viewed as a graph‑shortest‑path problem where edge weights encode propagation delay plus queuing cost.  
3. **Probabilistic reliability** – packet loss follows a Bernoulli process; end‑to‑end loss probability is the product of link reliabilities. A well‑designed *redundant* topology (e.g., Clos, fat‑tree) keeps this product low without over‑provisioning.

### One non‑obvious insight

Most interviewees focus on *routing algorithms* or *TCP tuning*. The deeper lesson is that **network design for ML should be framed as a joint optimization of three objectives**:

- **Minimize average inference latency** (shortest paths, low contention).  
- **Maximize aggregate throughput** (balanced load‑distribution, avoid single points of congestion).  
- **Guarantee service level agreements (SLAs)** through probabilistic bounds on loss and jitter.

Formally, this is a *constrained multi‑objective optimization* that can be attacked with Lagrangian multipliers or stochastic gradient descent over graph embeddings. Understanding this perspective lets you propose architectures (e.g., hybrid edge–cloud inference pipelines) that satisfy all three goals simultaneously—something interviewers will notice as evidence of first‑principle thinking.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
