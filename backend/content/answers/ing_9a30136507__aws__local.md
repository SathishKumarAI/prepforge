---
qid: ing_9a30136507__aws__local
question: I want to purchase this course for my employees. How can I do that?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 437
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:14:24-05:00'
sources: []
---

**Situation (S)**  
When I joined the Learning & Development team at a mid‑size fintech, we needed to onboard 120 engineers with machine‑learning skills. The goal was to deliver a vendor‑hosted course that met compliance, budget, and scalability constraints.

**Task (T)**  
I had to design a purchasing workflow that:  
1️⃣ Guarantees data security & role‑based access;  
2️⃣ Keeps cost under $12 k/year;  
3️⃣ Provides an audit trail for future leadership reviews.

**Action (A)**  
- **Customer Obsession + Ownership:** I mapped the learning journey, interviewed stakeholders to capture prerequisites and success metrics.  
- **Dive Deep:** I evaluated 4 vendor platforms on AWS Marketplace, S3‑based content, and SaaS LMS integrations.  
- **Design & AWS Services:**  
  - Use **AWS Marketplace** for procurement, ensuring automatic billing and compliance tags.  
  - Store course assets in a **private S3 bucket** with **Bucket Policies** tied to an **IAM group** (“ML Learners”).  
  - Trigger an **SNS notification** on purchase and launch a **CloudWatch Event** that creates a temporary **SQS queue** for enrollment approvals.  
  - Cost is capped at $10 k/year (vendor fee) + negligible S3 storage ($200).  

**Result (R)**  
- Completed procurement in 4 business days, under budget by 15%.  
- Enrolled all 120 employees; completion rate hit **92%** within the first quarter.  
- Audit logs provide a single‑click compliance report for quarterly reviews.

**Bar‑raiser notes** – I own the entire pipeline, dive deep into vendor options, quantify impact (cost savings & adoption), and iterated after a failed initial attempt that lacked role isolation, learning to enforce IAM segregation of duties.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
