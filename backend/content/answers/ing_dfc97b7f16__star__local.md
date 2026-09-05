---
qid: ing_dfc97b7f16__star__local
question: 'Explain: AWS Systems Manager — AWS-Services/17_Security/1_DataProtection/AWSSystemManager.md
  at main \u00b7 Anshul619/AWS-Services \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 270
output_tokens: 346
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:56:18-05:00'
sources: []
---

**Situation** – In a recent migration project, our client’s on‑prem databases had to be moved to RDS while keeping encryption at rest and in transit compliant with GDPR. The existing infrastructure used manual key rotation scripts that were error‑prone and hard to audit.

**Task** – I needed to automate the entire data protection workflow: encrypting new snapshots, managing CMKs in KMS, enforcing IAM policies for access, and ensuring every change was logged centrally—all without disrupting production traffic.

**Action** – I leveraged AWS Systems Manager (SSM) with its *Data Protection* feature set. First, I created a SSM Parameter Store entry to store the KMS key ARN securely. Using SSM Automation documents, I built a “Rotate‑CMK” workflow that automatically scheduled key rotation and updated RDS instances to use the new key. Then I configured SSM Inventory to continuously collect metadata on all EC2 and RDS resources, feeding it into AWS Config rules for compliance checks. Finally, I set up an EventBridge rule that triggers a Systems Manager Run Command to apply encryption settings whenever a new snapshot is created, ensuring audit logs in CloudTrail.

**Result** – The automation cut manual key‑rotation errors by 100% and reduced the average time to enforce encryption from days to minutes. Compliance reports showed 99.9% adherence to GDPR, and we saved roughly 3 person‑hours per week on security operations. I learned that SSM’s unified orchestration can turn scattered security tasks into a repeatable, auditable pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
