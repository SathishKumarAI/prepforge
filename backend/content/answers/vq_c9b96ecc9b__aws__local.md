---
qid: vq_c9b96ecc9b__aws__local
question: What is a Rollback ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 552
total_tokens: 778
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:14:19-05:00'
sources: []
---

**Question:** *What is a rollback?*

---

### Customer Obsession & Ownership  
When we deploy new code or data changes, the **rollback** is our safety net: the ability to revert the system to its previous consistent state if something goes wrong. It protects user experience and guarantees that customers never see corrupted data or broken features.

### Technical answer (AWS‑centric)  

1. **Define a “clean” baseline** – snapshot your RDS/NoSQL tables, EFS volumes, or S3 objects before the change.  
2. **Version control** – keep all code in Git and tag releases with immutable hashes.  
3. **Infrastructure as Code (IaC)** – use CloudFormation / Terraform to capture the exact state of every resource.  

When a deployment fails:  

| Step | AWS Service | Reasoning |
|------|-------------|-----------|
| 1️⃣ Re‑apply IaC stack | CloudFormation | Guarantees that networking, IAM, and autoscaling are restored exactly as before. |
| 2️⃣ Restore data snapshots | RDS (DB snapshot) / DynamoDB Point‑in‑Time Recovery | Ensures ACID guarantees without manual scripts. |
| 3️⃣ Roll back traffic | Route53 weighted routing or ALB listener rules | Keeps customers on the stable version until the issue is fixed. |

### Example (STAR)

**Situation:** In Q2, a schema change in our e‑commerce catalog caused a 12 % spike in checkout failures.  
**Task:** Restore service within 30 min without data loss.  
**Action:** Triggered the pre‑deployment RDS snapshot, rolled back the CloudFormation stack to the last stable version, and switched Route53 traffic back to the previous ALB target group.  
**Result:** Downtime < 18 minutes; customer complaints dropped from 45 % to < 2 %. Post‑mortem led us to automate snapshot tagging and add a blue/green deployment step, reducing future rollback time by 70 %.

### What a bar‑raiser looks for  

- **Ownership**: I proactively set up automated snapshots and CI/CD gates.  
- **Dive Deep**: I examined CloudWatch logs to pinpoint the exact schema mismatch.  
- **Quantified Impact**: Downtime reduction from 30 min to < 18 min, customer complaints dropped by 93 %.  
- **Learning**: Added a “canary” database migration step and improved our rollback playbook.

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
