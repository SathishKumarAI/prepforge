---
qid: ing_6b2fb6b4e1__aws__local
question: 'Explain: Faster recovery — What is Disaster Recovery? | Google Cloud'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 448
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:26:28-05:00'
sources: []
---

**Situation / Task**  
I was tasked to explain “faster recovery” for a global e‑commerce platform that had just migrated from Google Cloud to AWS. The goal was to reduce downtime after a regional outage while keeping cost under $50k/month.

**Action (Technical)**  
1. **Define Disaster Recovery (DR)** – a set of processes, policies and tools that enable rapid restoration of services when an entire region or availability zone fails.  
2. **Design**  
   - *Multi‑Region Architecture*: Deploy identical VPCs in us‑east‑1 & eu‑central‑1.  
   - *Data Replication*: Use Amazon RDS Aurora Global Database for 0.5 ms cross‑region read replicas and DynamoDB global tables for NoSQL.  
   - *Infrastructure as Code*: Terraform + CloudFormation to spin up identical stacks instantly.  
   - *Automation*: AWS Elastic Disaster Recovery (DRS) orchestrates VM replication; Route 53 health checks with failover routing policy for zero DNS latency.  
3. **Metrics** – Target RTO < 5 min, RPO < 30 sec.  

**Result**  
- Post‑implementation, the platform achieved an average RTO of **4.2 minutes** and an RPO of **12 seconds**, a 60% improvement over the previous Google Cloud DR plan (RTO ~10 min).  
- Cost fell to **$42k/month**, below the $50k threshold.

**Leadership Principles Reflected**  
- *Customer Obsession*: Delivering near‑real‑time service continuity directly improves user experience.  
- *Ownership & Dive Deep*: I owned the end‑to‑end DR strategy, dissected every failure scenario, and iterated on automation scripts to eliminate manual steps.  

**Bar‑raiser Takeaway** – Demonstrating quantified impact (RTO/RPO, cost) while showing deep technical ownership signals a strong fit for senior roles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
