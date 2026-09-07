---
qid: ing_9b86b077bd__faang__local
question: What is the 3-2-1 rule for backup and disaster recovery?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 379
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:45:52-05:00'
sources: []
---

**Clarify**  
The interviewer asks about *backup and disaster recovery*, not general ML concepts. I’ll confirm the context: “Are we focusing on data backups for a production ML pipeline or on model checkpoints?” This ensures my answer hits the intended scope.

**Approach**  
Explain that the 3‑2‑1 rule is a proven strategy for protecting critical data—applicable to raw datasets, feature stores, and model artifacts. Then detail each component: three copies, stored on two different media types, with one off‑site copy.

**Depth**  
- **Three copies:** Original + two backups (e.g., nightly snapshot + weekly incremental).  
- **Two media types:** e.g., SSD local storage for fast restores and tape or object‑storage (S3) for durability.  
- **One off‑site location:** geographically separated to guard against regional disasters; could be a different cloud region or an on‑prem site.  
- For ML, integrate this into CI/CD: automated checkpointing of models, versioned datasets in a data lake, and immutable storage (e.g., S3 Glacier).  

**Edge cases**  
- Data that changes frequently may need more granular snapshots.  
- Regulatory compliance might restrict off‑site locations.  
- Cloud provider outages could affect all copies; use multi‑cloud or hybrid strategies.

**Optimize & Communicate**  
Emphasize automation (IaC, Terraform), monitoring (S3 event notifications), and testing restores during DR drills. Conclude by noting that the 3‑2‑1 rule scales: add more media types or geographic zones as data volume grows, keeping recovery time objectives (RTO) and recovery point objectives (RPO) in check.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
