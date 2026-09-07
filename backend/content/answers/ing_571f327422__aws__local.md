---
qid: ing_571f327422__aws__local
question: 'Explain: Databricks Concurrency (Dedicated Round)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 499
total_tokens: 730
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:43:08-05:00'
sources: []
---

**Situation** – In my last role I led a data‑science team that ran 200+ ML jobs per day on Databricks (AWS). The shared “Standard” pool was hitting contention; training pipelines stalled, costing us ~\$5 k/month in idle compute.

**Task** – Design a dedicated‑round concurrency model that guarantees job throughput while keeping cost ≤10% of the baseline.

**Action**  
1. **Dedicated clusters per workload tier** (model training vs inference) using *Job Clusters* with autoscaling (min 4, max 32 workers).  
2. **Cluster pools** to pre‑warm executors, reducing launch latency by ~30 %.  
3. **Spot + On‑Demand hybrid strategy**: 70 % Spot for training, 30 % On‑Demand for inference, controlled via EC2 instance fleets (m5.large/m5.xlarge).  
4. **Concurrency control** – set `max_concurrent_jobs` per pool to 10; use *Databricks Jobs Scheduler* and *Azure DevOps pipelines* to queue excess jobs.  
5. Integrated with **AWS Cost Explorer** and **Databricks MLflow** to capture job runtimes, CPU‑utilization, and cost per run.

**Result** –  
- Job wait time dropped from 12 min to <2 min (90 % reduction).  
- Throughput increased from 200 to 350 jobs/day (+75 %).  
- Cost fell by \$4.8k/month (~10 %) while maintaining 99.9 % availability.

**Reflection** – I learned that *Ownership* means owning the entire pipeline, not just training scripts. *Dive Deep* taught me to monitor executor metrics and adjust pool sizes iteratively. The bar‑raiser will notice my quantitative impact, my use of AWS services for cost control, and how I turned a failure (job stalls) into a scalable solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
