---
qid: ing_b1fa6c8e55__aws__local
question: 'Explain: Example: Deploying Cassandra with a StatefulSet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 462
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:07:24-05:00'
sources: []
---

**Situation / Task**  
I was asked to roll out a highly‑available, fault‑tolerant Cassandra cluster for an analytics platform that needed to ingest ~10 M rows/day and serve real‑time queries with <200 ms latency. The team had no prior experience deploying stateful workloads on Kubernetes.

**Action**  
- **Ownership & Customer Obsession**: I wrote a design doc, got stakeholder sign‑off, and set up a 3‑node StatefulSet in EKS with persistent volumes from EBS (gp3, 500 Gi each).  
- **Dive Deep**: Configured *cassandra.yaml* for the rack‑aware replica strategy, tuned `read_request_timeout_in_ms` to 1200ms, and enabled compaction through `SizeTieredCompactionStrategy`.  
- **AWS Services & Scalability**: Used IAM roles for service accounts (IRSA) so pods could write metrics to CloudWatch Logs; leveraged Auto Scaling groups for node replacement on failure.  
- **Bias for Action & Deliver Results**: Deployed the cluster in <2 h, ran a synthetic load test (Apache JMeter) that proved 99.9% read success at 150 ms latency. The solution cut operational cost by 25 % vs our legacy on‑prem setup.

**Result**  
The new deployment achieved 10× higher throughput and 30 % lower mean query time while maintaining <0.5 % downtime over a year. I documented lessons (e.g., the importance of `read_repair_chance` tuning) and created a playbook that reduced future rollouts to under an hour.

**Bar‑raiser notes**  
- Demonstrated *ownership* by leading all phases from design to production.  
- Showed *depth* with concrete config tweaks and performance metrics.  
- Quantified impact (cost savings, latency improvement).  
- Shared post‑mortem learning to avoid similar pitfalls.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
