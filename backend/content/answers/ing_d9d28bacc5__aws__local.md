---
qid: ing_d9d28bacc5__aws__local
question: 'Explain: Summary — Embed Amazon OpenSearch Service dashboards in your application
  | AWS Big Data Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 509
total_tokens: 747
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:31:13-05:00'
sources: []
---

**Situation (S)**  
I was leading a data‑science team building an internal analytics portal for a global retailer. The product manager asked us to embed live OpenSearch dashboards directly into the customer‑facing web app so that sales managers could see trend charts without leaving the platform.

**Task (T)**  
Deliver a solution that 1) preserves user authentication, 2) scales to thousands of concurrent users, and 3) keeps cost under $5 k/month while staying compliant with GDPR.

**Action (A)**  
- **Ownership & Customer Obsession:** I scoped the feature in one sprint, ran a quick PoC, and presented a risk–benefit matrix to executives.  
- **Dive Deep + Design:**  
  - Used **Amazon OpenSearch Service** for indexing clickstream logs.  
  - Deployed dashboards via the **OpenSearch Dashboards REST API** behind an **AWS Application Load Balancer (ALB)** with *OAC* (OpenSearch Access Control) to enforce fine‑grained IAM roles.  
  - Added a **Lambda@Edge** layer that injects signed JWT tokens into the dashboard iframe, ensuring single‑sign‑on and preventing cross‑site request forgery.  
  - Enabled **Auto Scaling** on OpenSearch clusters (node count 3–15) with CloudWatch alarms on CPU/heap to handle traffic spikes during promotions.  
  - Leveraged **S3 static hosting + CloudFront** for the web app, keeping cost predictable.  
- **Bias for Action & Deliver Results:** I built automated Terraform scripts and CI/CD pipelines (CodePipeline → CodeBuild → CloudFormation) that provisioned the entire stack in under 10 min.

**Result (R)**  
- Dashboard latency dropped from ~12 s to <2 s, improving user satisfaction scores by **+18%**.  
- The solution handled a peak of 4,500 concurrent users during Black Friday with zero outages.  
- Monthly spend stayed at **$3.8 k**, 25% below the $5 k budget.  

**Bar‑raiser takeaways:** I demonstrated end‑to‑end ownership, deep technical design (IAM, scaling, cost), quantifiable impact, and a post‑mortem that identified an earlier need for fine‑grained ACLs—leading to a new internal policy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
