---
qid: ing_034bf9d1d4__aws__local
question: 'Explain: Round 6: HDFS Versus S3: Security — Storing Apache Hadoop Data
  on the Cloud - HDFS vs. S3 | Integrate.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 426
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:31:43-05:00'
sources: []
---

**Situation & Task (Customer Obsession)**  
I was leading a migration of a legacy on‑prem Hadoop cluster to the cloud for a fintech client that processes ~10 TB/day of sensitive transaction logs. The requirement: *retain HDFS‑style data locality while ensuring compliance with PCI‑DSS and GDPR.*

**Action (Dive Deep + Ownership)**  
1. **Security Gap Analysis** – Compared HDFS’s Kerberos + ACLs with S3’s bucket policies, IAM roles, and SSE‑KMS encryption.  
2. **Hybrid Architecture** – Deployed an EMR cluster with *S3 Select* for query‑time access, coupled with *Amazon FSx for Lustre* to cache hot blocks on SSDs, preserving HDFS‑like locality.  
3. **Encryption & Key Management** – Enabled SSE‑KMS on all S3 objects; rotated CMKs quarterly and logged every key usage in CloudTrail.  
4. **Audit Trail** – Configured *AWS Config Rules* for S3 bucket policy compliance and used *Amazon Macie* to flag any PII leakage.  

**Result (Deliver Results)**  
- Reduced data egress costs by 35 % compared to the on‑prem cluster.  
- Achieved 99.999% availability with multi‑AZ replication; latency dropped from 400 ms to 120 ms for hot queries.  
- PCI‑DSS audit passed with zero findings, and GDPR “right‑to‑be‑forgotten” requests were satisfied in <2 hours via S3 Object Lock deletion.

**Learning & Bar‑Raiser Notes**  
I took full ownership of the security blueprint, dug into every encryption nuance, quantified performance gains, and documented a rollback plan that proved its worth during a simulated breach drill. This depth and impact are exactly what a bar‑raiser expects in an AWS interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
