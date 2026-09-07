---
qid: vq_a20e2cdee6__aws__local
question: How can I protect my PL/SQL source code?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 476
total_tokens: 707
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:06:55-05:00'
sources: []
---

**Situation (S)**  
While leading the migration of our on‑prem Oracle workloads to Aurora PostgreSQL for a regulated fintech client, I discovered that several PL/SQL packages contained proprietary logic that could not be exposed in the public cloud. The client’s compliance team demanded code protection before we could proceed.

**Task (T)**  
I had to design a solution that:  
1) kept the source confidential,  
2) allowed continuous integration/deployment, and  
3) met strict audit‑trail requirements—all within AWS cost constraints.

**Action (A)**  
- **Ownership & Dive Deep:** I scoped every dependency, quantified the impact on build times, and identified the critical security gaps.  
- **Design:**  
  - Store encrypted source in S3 using SSE‑KMS with a dedicated CMK.  
  - Use AWS CodePipeline + CodeBuild to decrypt only during build, compile into Oracle bytecode (PL/SQL package objects), then upload binaries back to S3 encrypted.  
  - Deploy via CloudFormation stacks that reference the binary artifacts; the PL/SQL code never lands on any EC2 instance.  
  - Enable KMS key rotation and IAM policies restricting decryption to build roles only.  
- **Scalability & Availability:** The pipeline is multi‑AZ, leveraging CodeBuild’s managed scaling; S3 provides 99.999% durability.  
- **Cost:** <$0.03 per GB/month for storage + $0.005 per build minute, <5 % of overall cloud spend.

**Result (R)**  
Within two weeks, we achieved zero‑day protection for all PL/SQL modules and passed the client’s audit with a 100 % compliance score. Deployment time dropped from 12 hrs to 3 hrs, and the new process reduced manual review effort by **35 %**, freeing up the devops team for feature work.

**Leadership Principles Highlighted**  
- *Customer Obsession* – delivering a compliant, secure solution that met regulatory needs.  
- *Ownership* – taking end‑to‑end responsibility for security and delivery.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
