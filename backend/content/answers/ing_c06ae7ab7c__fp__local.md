---
qid: ing_c06ae7ab7c__fp__local
question: 'Explain: AWS Marketplace — Official Elastic Cloud pricing \u2014 compare
  serverless and hosted offerings | Elastic'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 410
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:51:58-05:00'
sources: []
---

## Why the two pricing models exist

Elastic’s core problem is **scalable search & analytics**.  
A user needs a cluster that can grow with query load while keeping operational overhead low.  
Two ways to satisfy this:

| Serverless | Hosted |
|------------|--------|
| *On‑demand* — pay only for the queries you run (CPU, RAM, I/O) | *Capacity‑based* — reserve nodes upfront and pay a flat rate |

The choice is rooted in **resource utilization theory**.  
Serverless pricing follows *pay‑per‑use* economics: the provider owns the infrastructure and amortizes costs across many tenants; users avoid idle capacity.  
Hosted pricing assumes the user will keep the cluster running 24/7, so the provider can offer a discounted fixed price for long‑term commitment.

## How each model works

1. **Serverless**  
   * Elastic spins up micro‑VMs only when a request hits.  
   * Billing is calculated from the exact amount of CPU cycles and memory used during that request.  
   * No need to maintain idle nodes; scaling is instantaneous.

2. **Hosted**  
   * The user selects node type, count, and region.  
   * Elastic pre‑provisions these nodes, keeping them running regardless of load.  
   * Pricing reflects the amortized cost of those reserved resources plus support.

## Non‑obvious insight

Most people think serverless means “no servers”. In reality, **the same underlying cluster is still there**—just not dedicated to a single tenant. The difference lies in *how* you pay for the shared resource pool and how the provider manages contention. This subtle distinction determines whether your cost scales linearly with usage (serverless) or stays flat after a certain threshold (hosted).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
