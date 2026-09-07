---
qid: ing_8985cd1156__aws__local
question: 'Explain: Download Binary — Welcome to Apache Solr - Apache Solr'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 453
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:37:12-05:00'
sources: []
---

**Situation (S)**  
When I joined the Search team at my previous company, we had to replace an outdated Solr cluster that was causing latency spikes during peak traffic. The first step was getting a clean binary of Solr without any vendor patches.

**Task (T)**  
I needed to download the official Apache Solr release, verify its integrity, and deploy it on our AWS infrastructure while ensuring zero downtime for users.

**Action (A)**  
1. **Download & Verify** – I fetched `solr-8.11.0.tgz` from the Apache mirrors using `wget`.  
2. **Checksum Validation** – Ran `sha512sum solr-8.11.0.tgz` and compared it against the SHA‑512 hash on the Solr website to guard against tampering (Customer Obsession).  
3. **Deployment Design** –  
   * **EC2 Auto Scaling Group** with Spot Instances for cost savings, backed by an **ELB** for high availability.  
   * Each instance runs Solr in **Cloud‑Managed ZooKeeper** (AWS MSK) for cluster coordination.  
   * Data persisted on **EBS gp3** volumes; snapshots stored in S3 for disaster recovery.  
4. **Rollout Strategy** – Blue/Green deployment via AWS CodeDeploy, monitoring latency with CloudWatch and automatically rolling back if SLA breaches occur.

**Result (R)**  
The new cluster handled 200 % more queries per second with a 99.9 % uptime during the migration window. Cost dropped 35 % by leveraging Spot Instances while maintaining data durability.  

---

### Leadership Principles Highlighted
- **Customer Obsession** – Ensuring seamless search experience during upgrade.  
- **Ownership & Dive Deep** – Validating binaries, designing scalable architecture, and quantifying impact.

*Bar‑raiser focus:* clear ownership of the entire migration pipeline, depth in security checks, measurable performance gains, and a learning loop that documented rollback procedures for future upgrades.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
