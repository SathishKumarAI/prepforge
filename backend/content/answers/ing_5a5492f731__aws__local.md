---
qid: ing_5a5492f731__aws__local
question: 'Explain: Removing master-eligible nodes — Add and Remove Elasticsearch
  nodes | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 656
total_tokens: 892
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:50:00-05:00'
sources: []
---

**Situation / Task**  
I led a migration of our on‑prem Elasticsearch 7.x cluster to an EKS‑based Elastic Cloud on AWS (ECK) for the new data‑lake analytics platform. The legacy cluster had *five* master‑eligible nodes that were over‑provisioned, causing high cost and sub‑optimal search latency (>200 ms). Our goal was to reduce infrastructure spend by 35% while keeping a stable, highly available cluster.

**Action**  
1. **Inventory & Baseline** – logged node roles, shard counts, and master‑eligibility flags; measured CPU/IO utilization (average 70 % on masters).  
2. **Design** – decided to convert two of the five masters into *data* nodes only, keeping three for master‑eligible duties (odd number ≥3).  
3. **Implementation** – used ECK Helm charts with `node.master: false` on the two nodes, ran a rolling upgrade, and re‑balanced shards via `cluster.routing.allocation.cluster_concurrent_rebalance`.  
4. **Monitoring & Validation** – enabled Elastic’s `ClusterHealth` API, CloudWatch metrics, and APM traces; verified master election latency dropped from 15 s to <1 s.

**Result**  
- **Cost Savings:** $18k/month (35% reduction).  
- **Performance:** Search latency improved to 120 ms average, 2× faster query throughput.  
- **Reliability:** No outage during the transition; master election time remained within SLA.

---

### AWS Services & Trade‑offs
| Service | Role | Cost Impact |
|---------|------|-------------|
| ECK (Elastic on Kubernetes) | Managed cluster orchestration | Lower operational overhead |
| EC2 Spot + Reserved Instances | Node instances | Maximize cost efficiency |
| CloudWatch | Metrics & alerts | Minimal extra cost |

**Trade‑offs:**  
- Reduced master pool increases risk if one node fails; mitigated by enabling `cluster.routing.allocation.awareness.attributes` and ensuring at least 3 masters.  
- Spot instances risk termination; mitigated with fallback on RIs for critical masters.

---

### Bar‑Raiser Lens
- **Ownership** – Took full responsibility for design, execution, and post‑migration monitoring.  
- **Dive Deep** – Analyzed node metrics, shard distribution, and master election logs to justify changes.  
- **Quantified Impact** – Delivered concrete savings & performance numbers.  
- **Learning from Failure** – After a brief spike in search latency during the first hour, we added an extra replica; this taught us to pre‑allocate replicas when scaling down masters.

> *Customer Obsession* – The improved UX for analysts directly translates into faster insights and better business decisions.  
> *Ownership* – I owned the entire migration cycle from planning to production handoff.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
