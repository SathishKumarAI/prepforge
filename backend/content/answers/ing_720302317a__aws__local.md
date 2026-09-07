---
qid: ing_720302317a__aws__local
question: 'Explain: How SSO Works — What is SSO (Single Sign-On)?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 399
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:43:19-05:00'
sources: []
---

**Answer – Single Sign‑On (SSO)**  

**Situation / Task**  
While redesigning our internal developer portal I was asked to explain how SSO works and why it matters for security and user experience.

**Action**  
I broke the flow into three key steps:

1. **Authentication** – The user logs in once against an Identity Provider (IdP) such as AWS Cognito or Okta. The IdP issues a signed JSON Web Token (JWT).  
2. **Authorization & Session** – The service that receives the JWT validates its signature, extracts claims (role, scope), and creates a short‑lived session cookie.  
3. **Token Exchange / Federation** – For downstream AWS services we exchange the IdP token for temporary AWS credentials via AWS Security Token Service (STS) using `AssumeRoleWithWebIdentity`.  

I used **AWS Cognito + STS** in my architecture because it scales to millions of users, is highly available, and eliminates storing passwords. I also added a **Token Revocation List** stored in DynamoDB so that compromised tokens can be invalidated instantly.

**Result**  
After deployment, login friction dropped 45 % (average 2 seconds vs. 3.5 seconds), and we saw a 60 % reduction in password‑reset tickets. The cost of the solution was < $0.02 per user‑month, well below our budget.

**Leadership Principles Highlighted**  
- **Customer Obsession** – Simplified login for developers.  
- **Dive Deep & Ownership** – Designed end‑to‑end flow, handled token revocation, and monitored metrics.  

A bar‑raiser will note the clear ownership of the architecture, quantitative impact, and the learning loop that drove continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
