---
qid: ing_fb52064efd__aws__local
question: 'Explain: NAT — IP Address | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 457
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:46:45-05:00'
sources: []
---

**Situation (S)**  
I was leading the migration of a 1‑TB nightly ML training pipeline from an on‑prem cluster to AWS. The workers needed internet access for pulling public Docker images and updates, but we had to keep all data in a private VPC.

**Task (T)**  
Design a cost‑effective, highly available NAT solution that supports >200 concurrent training jobs while keeping traffic under 1 Gbps per job.

**Action (A)**  
I chose **AWS Managed NAT Gateway** for its auto‑scaling and HA. I launched two gateways in separate AZs, attached them to the private subnets via route tables, and enabled *S3 VPC endpoints* for all S3 traffic to avoid NAT hops. To cap outbound bandwidth per instance, I added an **Elastic Load Balancer (ELB) with connection limits** before the NATs and enforced IAM policies on the training jobs. I also scheduled nightly cost‑optimisation: when load dropped below 10 % I swapped a gateway for a *NAT Instance* to cut hourly costs by ~30%.

**Result (R)**  
The new architecture kept MTBF >99.9%, reduced egress data transfer costs from $1,200/month to $700/month, and the training jobs completed 12 % faster due to lower network contention.

---

### Bar‑raiser notes
- **Ownership:** I drove the end‑to‑end migration and post‑mortem cost analysis.  
- **Dive Deep:** I benchmarked NAT throughput per instance type and tuned ELB limits.  
- **Quantified Impact:** 12 % faster jobs, $500/month saved.  
- **Learning from Failure:** After an initial outage due to a misconfigured route table, I added automated health checks and alerts, preventing future incidents.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
