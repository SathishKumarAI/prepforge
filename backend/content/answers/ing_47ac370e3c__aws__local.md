---
qid: ing_47ac370e3c__aws__local
question: What is considered an IT disaster? — What is Disaster Recovery? | Google
  Cloud
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 419
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:07:45-05:00'
sources: []
---

**Situation & Task**  
While leading a multi‑region e‑commerce platform on AWS, we discovered that a mis‑configured **RDS snapshot retention policy** had deleted the last two weeks of transaction logs during a routine backup job. The loss translated to >$4 M in daily revenue and 12 % drop in customer satisfaction scores.

**Action**  
1. **Ownership & Dive Deep** – Immediately stopped the failing backups, restored from the most recent S3‑backed snapshots (using *RDS automated backups* + *S3 Glacier*) and re‑enabled point‑in‑time recovery.  
2. Implemented a **Disaster Recovery (DR) strategy**:  
   - *Multi‑AZ RDS* for high availability,  
   - *Cross‑region read replicas* in us‑east‑1,  
   - *S3 Transfer Acceleration* + *CloudFront* for static assets,  
   - *Route53 latency routing* and *AWS Global Accelerator* for failover.  
3. Added **Infrastructure as Code (IaC)** with Terraform, tagging all resources for cost allocation.  
4. Scheduled quarterly DR drills; the latest drill cut recovery time from 8 h to <30 min.

**Result**  
- Restored service in <1 h, preventing any further revenue loss.  
- Post‑implementation, our mean time to recover (MTTR) dropped 75% and we avoided a 12 M potential loss over the next quarter.  

**Learnings**  
Ownership demands proactive safeguards; diving deep into logs uncovers hidden misconfigurations early. The DR plan now protects against both accidental data loss and region‑wide outages, aligning with *Customer Obsession* and *Deliver Results*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
