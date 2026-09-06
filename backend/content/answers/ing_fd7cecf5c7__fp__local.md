---
qid: ing_fd7cecf5c7__fp__local
question: 'Explain: Azure Marketplace — Official Elastic Cloud pricing \u2014 compare
  serverless and hosted offerings | Elastic'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 397
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:58:47-05:00'
sources: []
---

**Why the two price curves look different**

At its core, Elastic Cloud on Azure is a *managed service* that maps user demand (searches, analytics, ingest) to underlying compute resources.  
The cost model follows the same principle as any cloud‑native resource: pay for what you consume.

| **Model** | **Fundamental unit** | **Pricing driver** |
|-----------|----------------------|--------------------|
| **Hosted (VM‑based)** | Fixed VM size + storage | *Capacity planning*: you commit to a VM that must be alive regardless of load. The price is the sum of the VM’s hourly rate and persistent disk, plus a small support margin. |
| **Serverless** | Event‑driven “search request” | *Demand elasticity*: you pay per request (or per GB of data processed). The platform auto‑scales compute slots to match traffic spikes, so idle capacity disappears from the bill. |

The key insight is that **serverless pricing encodes a statistical efficiency principle**: it amortizes infrastructure over a Poisson arrival process of queries. When traffic is bursty, the serverless model keeps the *expected* cost proportional to the mean workload, whereas the hosted model incurs fixed costs even when utilization falls below 30 %.  

In practice:

- **Hosted** gives you predictable performance and lower latency for steady high‑throughput workloads; you pay a premium for that consistency.  
- **Serverless** is cheaper for unpredictable or low‑volume use because idle compute slots aren’t billed, but the cost per request can rise when peak concurrency forces more workers to spin up.

Thus, the two pricing curves diverge where workload variance matters most—exactly the spot where elasticity turns a statistical advantage into a financial one.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
