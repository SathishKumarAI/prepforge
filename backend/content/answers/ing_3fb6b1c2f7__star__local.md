---
qid: ing_3fb6b1c2f7__star__local
question: 'Explain: Backup and Restore Strategy: — Cloud Disaster Recovery Strategies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 321
total_tokens: 559
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:35:40-05:00'
sources: []
---

**Situation:**  
At my last company we migrated a critical fraud‑detection microservice from on‑prem to AWS for better scalability. The service processed over 3 million transactions per day and any downtime meant a direct revenue loss of roughly $12,000 per hour.

**Task:**  
I had to design a robust backup and restore strategy that met our SLA of <5 minutes recovery time while keeping storage costs under the quarterly budget cap.

**Action:**  
I leveraged AWS Backup for automated nightly snapshots of the EFS file system and RDS Aurora database. For cross‑region resilience, I set up an S3 Glacier Deep Archive tier to archive weekly snapshots to a secondary region (eu-central-1). I also scripted Terraform modules that provisioned immutable EC2 instances in a separate Availability Zone, tied into Route 53 health checks so traffic automatically rerouted on failure. To validate recoveries, we ran bi‑weekly DR drills where the entire stack was spun up from the snapshots and performance benchmarked against production.

**Result:**  
The disaster recovery time objective dropped from 30 minutes to under 4 minutes, and we achieved a 99.999% uptime during the last six months of operation. Storage costs were only 12% higher than the baseline, well within budget. I learned that combining automated snapshots with periodic manual drills is key to maintaining confidence in cloud DR plans.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
