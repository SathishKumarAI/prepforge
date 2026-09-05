---
qid: ing_26b2927345__fp__local
question: 'Explain: Start your trial — Official Elastic Cloud pricing \u2014 compare
  serverless and hosted offerings | Elastic'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 440
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:27:16-05:00'
sources: []
---

Elastic Cloud is a managed service that runs the Elastic Stack (Elasticsearch, Kibana, Beats, etc.) in the cloud.  
Its two billing models are **hosted** and **serverless**, each answering a different optimization problem.

### Hosted
The platform provisions a fixed set of resources—vCPU, RAM, disk—and bills per‑hour or per‑month for that slice.  
*Why it works*: The cost function is linear in the resource bundle: C = ∑ αᵢ × resourceᵢ.  This satisfies the *constant‑size* constraint of a traditional virtual machine, making capacity planning straightforward.  
*Non‑obvious insight*: Even though the billing is fixed, Elastic adds an “elasticity” surcharge when your cluster’s heap usage exceeds the allocated amount, effectively turning the linear model into a piecewise‑linear one that penalizes over‑commitment.

### Serverless
Here you pay only for *actual* consumption—queries processed, indexing throughput, and storage used.  
The underlying principle is **statistical multiplexing**: the provider aggregates many tenants on shared hardware and charges per “unit of work.”  
Cost = β × CPU‑seconds + γ × IO‑operations + δ × GB‑stored.  
Because the cost function depends on real traffic, it is *convex* in the workload: doubling the load doubles the bill, but the marginal cost of a small spike is negligible.  

### Comparison
- **Hosted** → predictable, simple budgeting; best when you have steady, high‑volume workloads.  
- **Serverless** → pay‑as‑you‑go; ideal for bursty or unpredictable traffic.

The deeper lesson: Elastic Cloud trades *capacity planning* against *resource utilization efficiency*.  The pricing design is a concrete implementation of the classic trade‑off between *fixed costs* and *variable costs* in cloud economics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
