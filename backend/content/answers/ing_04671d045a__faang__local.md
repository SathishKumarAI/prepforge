---
qid: ing_04671d045a__faang__local
question: 'Explain: Cons of Horizontal Scaling — Vertical vs Horizontal Scaling |
  System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 571
total_tokens: 808
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:54:43-05:00'
sources: []
---

**Clarify**  
The question asks for the disadvantages of horizontal scaling compared to vertical scaling in a distributed ML system. I’ll assume we’re talking about production‑grade inference or training pipelines where latency, consistency and cost matter.

**Approach**  
1. List key trade‑offs: resource utilization, fault tolerance, data locality, consistency, operational complexity.  
2. Contrast each with vertical scaling (adding CPU/RAM to a single node).  
3. Summarize how these affect ML workloads.

**Depth**  

| Aspect | Horizontal Scaling (many nodes) | Vertical Scaling (single powerful node) |
|--------|----------------------------------|------------------------------------------|
| **Resource utilization** | Requires careful load‑balancing; under‑utilized nodes waste money. | Full capacity of a single machine is used, but bottlenecks are hard to scale. |
| **Fault tolerance** | Failure of one node doesn’t bring down the system; requires replication and sharding. | A single point of failure unless expensive HA setups are added. |
| **Data locality & communication** | Models or tensors must be shipped across nodes → network latency, higher I/O, potential consistency issues. | All data stays local; lower round‑trip time but limited by the machine’s memory bandwidth. |
| **Consistency / synchronization** | Requires distributed consensus (e.g., Parameter Servers, Ring‑Allreduce) → added complexity and possible staleness in training. | Synchronous updates are trivial; no network overhead. |
| **Operational overhead** | Deployment, monitoring, patching  +  scaling policies add engineering cost. | Simpler ops but upgrades need downtime or live‑migration of large models. |
| **Cost** | Cloud “pay for what you use” can be cheaper at scale, yet requires many licenses/containers; on‑prem clusters may face higher CAPEX. | Single VM might be cheaper initially, but scaling up costs jump sharply (CPU/RAM limits). |

**Edge cases**  
- Small models that fit in RAM → horizontal overhead outweighs benefits.  
- Extremely high throughput inference → network latency can dominate.  
- Training with very large embeddings → data locality becomes critical.

**Optimize & communicate**  
I’d suggest hybrid scaling: keep a few powerful “co‑ordinator” nodes for model parameters and use micro‑services to serve shards, reducing communication overhead while retaining fault tolerance. Communicate this by emphasizing that horizontal scaling introduces *distributed* complexity (consistency, network) which can outweigh its benefits when workloads are memory‑bound or latency‑sensitive. This structured view demonstrates clear trade‑off reasoning, a key FAANG interview skill.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
