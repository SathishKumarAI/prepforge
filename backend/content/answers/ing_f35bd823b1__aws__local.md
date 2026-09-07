---
qid: ing_f35bd823b1__aws__local
question: 'Explain: Authentication, Authorization, and Limits'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 481
total_tokens: 709
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:26:43-05:00'
sources: []
---

**Situation** – While leading a cross‑functional team to launch an on‑prem ML inference service for a financial client, we discovered that unauthenticated requests were flooding the GPU cluster, causing 40 % of our SLA budget to be spent on throttling and 12 % downtime.  

**Task** – Design a unified *Authentication / Authorization / Rate‑Limiting* layer that protects the model endpoints, meets PCI compliance, and scales to 10⁶ requests/day.

**Action** –  
1. **Auth**: Integrated **Amazon Cognito User Pools** for OAuth2 token issuance (Customer Obsession). Tokens are short‑lived (15 min) and refreshed via **Cognito Identity Pools**, giving us fine‑grained IAM roles per user group.  
2. **Authorization**: Implemented a Lambda authorizer that reads the token’s `cognito:groups` claim, maps it to an *AWS Managed Policy* (`ml:InvokeModel`) stored in DynamoDB (Invent & Simplify).  
3. **Rate‑Limiting**: Leveraged **API Gateway**’s built‑in throttling (burst 200 req/s, steady 100 req/s) and a custom **DynamoDB TTL table** for per‑user quotas (Dive Deep).  
4. **Observability**: CloudWatch Alarms trigger SNS alerts when quota breaches exceed 5 % of the limit, automatically invoking an SQS‑driven Lambda to adjust limits.

**Result** – After deployment, we reduced unauthorized traffic by **99.8 %**, cut GPU idle time from 40 % to 12 %, and saved $18k/month in compute costs (Deliver Results).  

**Bar‑raiser notes** – The solution shows *ownership* of security and cost, *dive deep* into AWS services, quantifies impact, and includes a post‑mortem that refined the policy mapping after an initial false‑positive rate of 3 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
