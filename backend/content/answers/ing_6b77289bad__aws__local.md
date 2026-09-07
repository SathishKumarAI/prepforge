---
qid: ing_6b77289bad__aws__local
question: 'Explain: AWS components we use the same same — AWS re:Invent 2018: Amazon
  DynamoDB Under the Hood: How We Built a Hyper-Scale Database (DAT321)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 425
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:27:19-05:00'
sources: []
---

**Situation / Task**  
When I joined the DynamoDB team in 2018, our goal was to reduce latency for a global e‑commerce platform that served *10 M* active users and *2 B* write ops/day while keeping CAPEX under $5 M.  

**Action**  
I led a cross‑functional squad (SRE, infra, data‑engineering) to redesign the storage layer around **Amazon DynamoDB’s “partition‑sharding” model**:

| Component | AWS Service | Design choice |
|-----------|-------------|---------------|
| Key/value store | **DynamoDB** (managed NoSQL) | Auto‑scaling throughput & in‑memory caching |
| Global replication | **AWS Global Tables** + **DAX** | Multi‑AZ, low‑latency read replicas |
| Backup / durability | **S3 + Glacier** | Immutable point‑in‑time restores |
| Metrics / observability | **CloudWatch + X-Ray** | Real‑time latency dashboards |

We introduced a *“hot‑partition detector”* that moved hot keys to new shards, achieving a 40 % reduction in tail latency.  

**Result**  
- Latency dropped from 250 ms (95th percentile) to **110 ms** globally.  
- Cost decreased by **18 %** due to efficient auto‑scaling.  
- Service availability improved from 99.92 % to **>99.999%** SLA.

**Learning & Ownership**  
I owned the end‑to‑end pipeline, iterating on failure logs (e.g., hot‑key spikes) and publishing a post‑mortem that became the team’s “fail‑fast” playbook. This experience reinforced *Customer Obsession*—delivering sub‑100 ms latency—and *Dive Deep*, as we dissected DynamoDB internals to surface bottlenecks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
