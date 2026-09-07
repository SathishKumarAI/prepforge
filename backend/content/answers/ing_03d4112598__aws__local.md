---
qid: ing_03d4112598__aws__local
question: 'Explain: Uncovering Kafka’s Hidden Infrastructure Costs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 538
total_tokens: 768
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:33:15-05:00'
sources: []
---

**Situation & Task**

At my previous role I led a data‑engineering team that had migrated all streaming workloads to **Kafka on EKS**. When we hit our Q4 budget, the finance team asked me to uncover hidden infrastructure costs – something our billing dashboard hadn’t shown. The goal was to reduce spend by 20 % without hurting throughput or reliability.

**Action**

1. **Dive Deep into Billing & Metrics**  
   *Pulled CloudWatch and Prometheus metrics for every broker pod (CPU, memory, network). Used AWS Cost Explorer with linked accounts and tagged resources.*  
2. **Model Latency‑Cost Trade‑off**  
   *Built a simple cost model: `cost = instance_cost + storage_cost + EBS_io_cost`. Correlated it with latency spikes during peak load.*  
3. **Identify Overprovisioned Resources**  
   *Found that 40 % of brokers were running on m5.large (2 vCPU, 8 GiB) even though CPU usage never exceeded 25 %. Storage was on gp2, but our disk IOPS far surpassed the default 3,000 IOPS, causing throttling.*  
4. **Redesign Architecture**  
   *Migrated to burstable t3.medium instances (cheaper, autoscaling enabled). Switched persistent volumes to gp3 with provisioned 5,000 IOPS and 80 GiB, eliminating the EBS‑IO cost. Implemented a simple scheduler that scales broker count based on topic lag.*  
5. **Validate & Iterate**  
   *Ran a two‑week A/B test: new design maintained 99.9 % latency SLA while cutting costs by 27 %. Added a monthly review process to keep usage in line.*

**Result**

- Reduced Kafka infrastructure spend from $120k/month to $88k/month (≈ 27 % savings).  
- Maintained or improved latency (avg 12 ms vs 13.5 ms).  
- Deployed an automated scaling policy that saved $5k annually on idle capacity.

**Leadership Principles Highlighted**

- **Ownership** – Took end‑to‑end responsibility for cost optimization and performance.  
- **Dive Deep** – Analyzed fine‑grained metrics to uncover hidden costs.  
- **Bias for Action** – Implemented changes quickly, validated results, and set up continuous monitoring.

This experience shows how a data‑driven, technically sound approach can deliver measurable business value while staying true to Amazon’s principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
