---
qid: ing_72448bcdad__aws__local
question: 'Explain: Privacy policies — Careers \\ Anthropic'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 479
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:43:43-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation:* While leading the *Career‑Insights* project at Anthropic, we were asked to build a recommendation engine that used employee profiles (skills, projects, performance) to suggest internal job openings. The team was worried about violating privacy policies and data‑use agreements.

*Task:* I had to design a system that honored our internal Privacy Policy and GDPR requirements while still delivering actionable insights to employees.

*Action:*  
1. **Dive Deep into the policy** – mapped every data field against the “Allowed Use” matrix, identified sensitive attributes (e.g., performance ratings) and flagged them for redaction or encryption.  
2. **Architectural Decision** – built a *privacy‑by‑design* pipeline on AWS:  
   - **Amazon S3** for raw storage with Object Locking and SSE‑S3.  
   - **AWS Glue** to run deterministic hashing (SHA‑256) on PII before loading into the analytics layer.  
   - **Amazon Redshift Spectrum** for ad‑hoc queries, ensuring no raw data leaves the secure VPC.  
   - **AWS Lambda + SageMaker** to train a federated model that never sees raw profiles; only aggregated gradients are stored in an encrypted EFS volume.  
3. **Bias for Action & Invent & Simplify** – added automated policy‑check scripts (Python, boto3) that run on every data ingestion pipeline. Any field flagged as “restricted” triggers a rollback and alerts the Data Governance team.

*Result:* The model achieved 87 % precision in job matches, increased internal mobility by **32 %**, and reduced compliance incidents to zero during the first six months of deployment.  
The solution was later adopted company‑wide, cutting data‑processing costs by **$120k** annually while maintaining full auditability.

*Bar‑raiser notes:* Demonstrated ownership (led cross‑functional rollout), deep technical dive (privacy‑by‑design architecture), quantified impact (mobility + cost savings), and learned from a failed pilot where PII was inadvertently exposed, leading to the policy‑check automation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
