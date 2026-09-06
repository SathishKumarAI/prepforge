---
qid: ing_bc4644c688__fp__local
question: 'Explain: Attach a policy — AWS-Services/17_Security/1_DataProtection/AWSSecretsManager.md
  at main \u00b7 Anshul619/AWS-Services \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 204
output_tokens: 343
total_tokens: 547
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:43:53-05:00'
sources: []
---

**Why you attach a policy to an AWS Secrets Manager secret**

A secret is just data; by itself it has no access control.  
To decide *who* may read or rotate it, AWS relies on the same IAM‑policy
machinery that protects every other resource.  The policy is evaluated
every time an API call is made, ensuring that only authorized principals
can reach the secret’s value.  

**How it works**

1. **Policy format** – JSON with `Effect`, `Action`, and `Resource`.  
2. **Evaluation order** – IAM checks *identity‑based* policies first,
   then any *resource‑based* policy attached to the secret itself.
3. **Least‑privilege enforcement** – Each statement grants a specific
   action (`secretsmanager:GetSecretValue`, `RotateSecret`, etc.) on
   that secret’s ARN.

The system is essentially an *access control matrix* embedded in
the resource, allowing granular delegation without touching the
principal’s own policies.  

**Non‑obvious insight**

Because Secrets Manager supports **resource‑based policies**, you can
grant cross‑account access by attaching a policy directly to the secret,
rather than creating a role or user in every account.  This reduces
management overhead and eliminates the need for “role assumption” steps,
yet still keeps the secret protected by IAM’s standard evaluation engine.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
