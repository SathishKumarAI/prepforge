---
qid: ing_f7c7457365__aws__local
question: 'Explain: Interview Follow-Up Questions — Multi Tenant Saas'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 426
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:38:59-05:00'
sources: []
---

**Situation** – While leading the launch of an AI‑powered analytics platform at my previous startup, we needed a **multi‑tenant SaaS** that could scale to thousands of clients while keeping data isolated and compliant with GDPR.

**Task** – Design the architecture, ensure high availability, cost efficiency, and rapid feature roll‑out (Bias for Action) while keeping customer data secure (Customer Obsession).

**Action**  
1. **Ownership & Dive Deep:** I scoped requirements: 10 TB of user data per tenant, real‑time inference latency <200 ms, SLA 99.99%.  
2. **Design:**  
   * **AWS Aurora Serverless v2** for a shared relational DB with per‑tenant schema isolation; auto‑scales and costs $0.0001/IO.  
   * **S3 + Glacier Deep Archive** for raw logs (cost ~$0.004/GB/month).  
   * **Amazon SageMaker Multi‑Model Endpoint** hosts all tenant models behind a **Lambda@Edge** routing layer that injects a tenant ID header, ensuring isolation without extra compute.  
   * **AWS Cognito + IAM Roles** enforce fine‑grained access; data encrypted at rest with KMS keys per tenant.  
3. **Scalability & Cost:** Auto‑scaling on CPU/Memory, pay‑as‑you‑go pricing – projected 30% lower spend vs. dedicated VMs.  

**Result** – Launched to 1,200 customers in 6 months; uptime 99.999%; average inference latency 180 ms; cost savings of $120k annually versus on‑prem deployment.  
*Learned*: Early monitoring with CloudWatch Alarms prevented a cold‑start spike that could have breached SLA—an example of “Fail Fast, Learn Faster.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
