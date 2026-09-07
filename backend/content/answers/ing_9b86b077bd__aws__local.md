---
qid: ing_9b86b077bd__aws__local
question: What is the 3-2-1 rule for backup and disaster recovery?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 448
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:16:45-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Leadership Principles:** *Customer Obsession* – safeguarding data that customers trust; *Ownership* – taking end‑to‑end responsibility for recovery.

**Situation / Task**  
At my previous firm we had a 10 TB customer‑facing dataset. A ransomware attack wiped the on‑prem cluster, threatening SLA breaches and revenue loss of ~$3 M/month. I was tasked with designing a resilient backup strategy within two weeks.

**Action**  
I applied AWS’s **3‑2‑1 rule**:  
- **Three copies** – primary in RDS Aurora (multi‑AZ), secondary in S3 Glacier Deep Archive, and one immutable snapshot in DynamoDB Streams.  
- **Two media types** – live database + object storage.  
- **One off‑site location** – cross‑region replication to us-east-2 using S3 Replication with IAM encryption.

I automated the workflow via Lambda (Python) triggered by CloudWatch Events, storing incremental diffs in S3 and tagging snapshots for compliance. I used AWS Backup to enforce retention policies and Cost Explorer showed a 15% cost reduction versus manual snapshots.

**Result**  
The ransomware incident was contained; we restored full service within **4 hours**, meeting the SLA with zero data loss. Recovery Time Objective (RTO) dropped from 48 h to 4 h, and Recovery Point Objective (RPO) improved to <5 min. This solution now serves 200+ customers with 99.999% durability and a $120K/year cost saving.

**Bar‑raiser check:**  
- Demonstrated *ownership* by owning the entire backup pipeline.  
- *Dived deep* into AWS services (Aurora, S3 Glacier, DynamoDB Streams).  
- Quantified impact (time savings, cost reduction).  
- Learned from failure: introduced immutable snapshots to guard against future ransomware.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
