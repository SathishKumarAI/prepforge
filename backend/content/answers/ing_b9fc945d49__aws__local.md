---
qid: ing_b9fc945d49__aws__local
question: 'Explain: Introduction — RFC 8707: Resource Indicators for OAuth 2.0'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 418
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:24:17-05:00'
sources: []
---

**Answer – Amazon Interview Style**

> *“I’m excited about RFC 8707 because it gives us a clean way to separate resource ownership in OAuth 2.0, which directly improves our API security and developer experience.”*

### Situation
At my previous company we had a monolithic auth server that issued tokens for dozens of micro‑services. Developers were often confused about which scopes applied to which APIs, leading to over‑privileged tokens and slow onboarding.

### Task
Implement a scalable, standards‑based solution that lets each service clearly declare its resource indicator (RI) while keeping token issuance simple.

### Action
1. **Dive Deep** – I studied RFC 8707 and mapped the RI format (`https://service.company.com/resource/*`) to our API gateway.
2. **Ownership & Design** – Built a lightweight *Resource Indicator Registry* in DynamoDB, indexed by `client_id` + `resource`.  
   *AWS services used:*  
   - **Amazon Cognito** for OAuth 2.0 token issuance (keeps existing flow).  
   - **API Gateway + Lambda Authorizer** to validate the RI against the registry before routing.  
   - **CloudWatch** for metrics; **S3** for log archival.
3. **Bias for Action** – Deployed a pilot with two services, rolled out across all teams in 3 weeks.

### Result
- Reduced token‑over‑privilege incidents by **68 %** (from 120 to 39 per quarter).  
- Onboarding time dropped from **5 days → 1 day**.  
- No increase in latency (< 2 ms added) and cost impact < 0.5 %.  

**Bar‑raiser focus:** I showed full ownership, deep technical dive, quantified impact, and learned that early stakeholder sync prevented scope creep.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
