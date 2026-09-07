---
qid: ing_c00cc2f01b__aws__local
question: 'Explain: File Sharing — Top 20 Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 460
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:38:14-05:00'
sources: []
---

**Situation –** While leading a cross‑functional team at my previous company, we were tasked to build an enterprise file‑sharing platform that needed to support 10 M concurrent users, enforce fine‑grained access control, and deliver sub‑second latency for 99.9 % of requests.

**Task –** Design the architecture, choose AWS services, and demonstrate ownership over cost, security, and scalability.

**Action –**  
- **Customer Obsession & Ownership:** I mapped user journeys to identify critical performance metrics (latency, error rate).  
- **Dive Deep & Bias for Action:** Built a prototype on Amazon S3 + Lambda + DynamoDB. Used CloudWatch metrics to iterate quickly.  
- **Design Choices:**  
  - **S3** for durable object storage; versioning and bucket policies enforce ACLs.  
  - **Amazon API Gateway + Lambda (Python)** as stateless micro‑services for upload/download, auto‑scaling to thousands of requests per second.  
  - **DynamoDB** stores metadata (owner, permissions, tags) with provisioned capacity tuned by CloudWatch alarms; global tables ensure multi‑region availability.  
  - **AWS IAM & Cognito** for authentication and fine‑grained access tokens.  
- **Scalability/Availability:** S3 and API Gateway are inherently highly available; Lambda scales to 1 M RPS with provisioned concurrency, reducing cold starts.  
- **Cost Trade‑offs:** Leveraged S3 Intelligent-Tiering and DynamoDB On‑Demand for unpredictable spikes, keeping spend under $15k/month while guaranteeing SLAs.

**Result –** Rolled out the platform within 90 days; achieved <200 ms average latency, 99.95 % availability, and cut storage costs by 18 % versus legacy on‑prem solution. Post‑launch, I instituted a quarterly “Lessons Learned” review that surfaced an early mis‑configured IAM role—fixed it before any breach, reinforcing the bar‑raiser’s focus on ownership and learning from failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
