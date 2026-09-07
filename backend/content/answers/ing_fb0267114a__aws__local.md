---
qid: ing_fb0267114a__aws__local
question: 'Explain: Ownership — Linux File Permissions Illustrated'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 451
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:45:58-05:00'
sources: []
---

**Situation & Task**  
While leading the migration of our on‑prem ML training pipeline to an EKS cluster, I discovered that the container images were being pulled from a shared ECR registry without proper access controls. A rogue job could overwrite model artifacts and corrupt downstream inference services.

**Action**  
I re‑engineered the file‑system layout using **Linux file permissions** combined with **EFS Access Points** to enforce *least privilege* at the directory level.  
- Created a dedicated EFS volume for each training job (`/mnt/training/<job-id>`).  
- Set `chmod 750` on the root and `chown <appuser>:<appgroup>` so only the owning pod could write, while other pods could read but not modify.  
- Leveraged **IAM Roles for Service Accounts (IRSA)** to grant EKS pods the exact S3 and ECR permissions needed, eliminating over‑privileged credentials.  
- Added a sidecar that logs every permission change via CloudWatch Logs, triggering an SNS alert if `chmod` is attempted outside CI/CD.

**Result**  
Within 30 days we saw a **100% reduction in accidental artifact overwrite incidents**, and the new design cut EFS I/O costs by **18 %** (from 1.2 TB to 0.98 TB) thanks to tighter access control. The incident response time dropped from >4 h to <15 min, enabling faster rollback.

**Leadership Principles Highlighted**  
- **Ownership**: Took end‑to‑end responsibility for data integrity across the ML lifecycle.  
- **Dive Deep**: Analyzed permission logs and EFS metrics to identify root causes.  

**Bar‑raiser cues** – I demonstrated ownership by mapping a concrete risk (data corruption) to a precise technical solution, quantified the impact with real cost and uptime numbers, and showed continuous learning by automating audit trails for future failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
