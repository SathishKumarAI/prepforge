---
qid: ing_b24bd16056__aws__local
question: 'Explain: Encryption & Key Management — How do we manage sensitive data
  in a system?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 413
total_tokens: 650
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:07:59-05:00'
sources: []
---

**Situation & Task (S)**  
At my previous company we launched a customer‑analytics platform that stored personally identifiable information (PII) in S3 and RDS. The compliance audit required end‑to‑end encryption and a centralized key lifecycle policy, or risk a $5 M penalty.

**Action (A)**  
1. **Design** – Adopted *AWS Key Management Service* (KMS) for all data‑at‑rest and *Secrets Manager* for API credentials.  
2. **Implementation** – Enabled S3 SSE‑KMS on all buckets, configured RDS to use the same CMKs, and set up automatic key rotation every 90 days.  
3. **Governance** – Created a KMS key policy that only allowed EC2 instances in the analytics VPC to use the keys; added CloudTrail logging for every `GenerateDataKey` call.  
4. **Monitoring & Alerting** – Pulled metrics into CloudWatch, set alarms for any failed decryption attempts and used GuardDuty findings to detect potential credential exposure.

**Result (R)**  
- Reduced manual key‑rotation effort by 80 % and cut audit preparation time from 3 weeks to 1 day.  
- Achieved 99.999% availability of encrypted data with no downtime during key rotations.  
- Cost impact was a 10 % increase in KMS usage but saved an estimated $2.5 M in potential penalties.

**Learning & Ownership**  
I owned the entire lifecycle from design to production, diving deep into KMS APIs and IAM policies. The bar‑raiser will note my focus on measurable impact, automated governance, and proactive risk mitigation—key Amazon traits of *Ownership* and *Dive Deep*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
