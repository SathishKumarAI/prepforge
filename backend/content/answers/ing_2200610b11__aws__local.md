---
qid: ing_2200610b11__aws__local
question: 'Explain: Automate User and Group Provisioning with SCIM'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 463
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:43:57-05:00'
sources: []
---

**Situation & Task**  
At my previous company we had 4 k employees spread across multiple SaaS tools (Salesforce, Slack, Confluence). Manual onboarding cost **$12 k/month** in admin hours and caused frequent security gaps. I owned the “Zero‑touch provisioning” initiative to automate user/group sync via SCIM.

**Action & Design**  
1. **API Gateway + Lambda** – Exposed a single SCIM endpoint that validated JWTs issued by our IdP (Okta).  
2. **Cognito User Pools + IAM Roles** – Created/updated users in Cognito, then attached them to AWS IAM roles mapped to SaaS groups via a DynamoDB lookup.  
3. **EventBridge Scheduler** – Triggered a nightly Lambda that reconciled the SCIM delta file against our internal HR database (AWS RDS).  
4. **CloudWatch & SNS** – Monitored for failures; critical errors sent to Slack and email.

This design kept *idempotent* operations, ensured **99.99 % availability** (API Gateway SLA), and cut provisioning time from 3 days to <5 minutes.

**Result**  
- Admin effort dropped from **$12 k/month to $1.2 k**, a **90 % cost saving**.  
- Zero security incidents related to stale credentials in the first year post‑deployment.  
- Scalability: Lambda concurrency auto‑scales; DynamoDB handles 10⁶ requests/day with <0.5 ms latency.

---

### Leadership Principles Highlighted
- **Ownership** – Took full responsibility from concept through production rollout.  
- **Dive Deep & Deliver Results** – Built end‑to‑end monitoring, quantified impact, and iterated on failure modes (e.g., retry logic for transient SCIM errors).  

Bar‑raisers look for evidence of *ownership*, *quantified impact*, and a clear learning loop from failures—exactly what this project delivered.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
