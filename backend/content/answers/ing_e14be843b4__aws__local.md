---
qid: ing_e14be843b4__aws__local
question: 'Explain: F4: Wrong-tenant cross-bleed — Computer Use Agent Production'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 417
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:48:59-05:00'
sources: []
---

**Situation / Task**  
At a multi‑tenant SaaS platform we discovered “F4: Wrong‑Tenant Cross‑Bleed” – sensitive data from Tenant A was being exposed to Tenant B via the Computer Use Agent (CUA) in production. The breach risked regulatory fines and eroded customer trust.

**Action**  
1. **Own & Dive Deep** – I immediately formed a cross‑functional task force, pulled logs from CloudTrail, Athena, and X-Ray, and built a forensic map of the data flow.  
2. **Design Fix** – Implemented a tenant‑scoped Lambda authorizer that injects an encrypted `tenant_id` claim into every API call. Updated the CUA to validate this claim against DynamoDB’s tenancy table before accessing S3 objects.  
3. **AWS Services** – IAM roles per tenant, Cognito for authentication, KMS for encryption at rest, S3 Object Lock for immutable audit trails, and CloudWatch dashboards for real‑time alerts.  
4. **Bias for Action & Deliver Results** – Deployed the fix within 12 hrs, rolled back to a safe baseline, and ran an automated penetration test that returned 0% cross‑bleed incidents.

**Result**  
- Zero regulatory fines; customer churn dropped from 3.5 % to <0.1 %.  
- Operational cost increased by only **4 %** (new Lambda invocations) while achieving 99.999 % availability.  
- Learned that tenant isolation must be baked into the data‑access layer, not just a configuration flag.  

**Bar‑raiser cues** – clear ownership, deep technical diagnosis, quantified impact, rapid remediation, and post‑mortem learning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
