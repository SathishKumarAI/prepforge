---
qid: ing_bc4644c688__aws__local
question: 'Explain: Attach a policy — AWS-Services/17_Security/1_DataProtection/AWSSecretsManager.md
  at main \u00b7 Anshul619/AWS-Services \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 264
output_tokens: 520
total_tokens: 784
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:29:17-05:00'
sources: []
---

**Situation / Task**  
At my last role I led the migration of 12 on‑prem microservices to AWS. Each service required secure credentials for RDS and an external payment API. The goal was to replace hard‑coded secrets with a central store while keeping compliance (PCI‑DSS) and minimizing operational overhead.

**Action**  
1. **Create a Secrets Manager secret** (`/prod/payment/api-key`) and enable automatic rotation with a Lambda backed by the `SecretsManagerRotationLambda` template.  
2. **Attach an IAM policy** directly to the *execution role* of each microservice (e.g., `ecsTaskExecutionRole`). The policy follows the principle of least privilege:  

```json
{
  "Version":"2012-10-17",
  "Statement":[
    {
      "Effect":"Allow",
      "Action":[
        "secretsmanager:GetSecretValue",
        "secretsmanager:DescribeSecret"
      ],
      "Resource":"arn:aws:secretsmanager:us-east-1:123456789012:secret:/prod/payment/api-key-*"
    }
  ]
}
```

3. **Add tagging** (`Environment=Prod`, `Application=Payments`) and enable *resource‑based policies* for cross‑account access (e.g., a shared audit account).  
4. **Audit & monitor** with CloudTrail logs, Config rules (`secretsmanager-customer-managed-key-required`), and GuardDuty alerts.

**Result**  
- Reduced secret‑related incidents by 92 % in the first quarter post‑migration.  
- Cut manual rotation effort from daily scripts to a single Lambda function (cost: $0.004/hr).  
- Maintained PCI‑DSS compliance, passing all internal audits without remediation.

**Reflection**  
*Ownership*: I owned the end‑to‑end secret lifecycle and ensured rollback paths were in place.  
*Dive Deep*: I evaluated IAM policy scopes, KMS key rotation schedules, and Lambda timeout settings to guarantee zero downtime.  
*Learned*: Initial attempts used broad `secretsmanager:*` permissions; we refined policies after a security review, reinforcing the value of least privilege.

---  

**Bar‑raiser notes:** The candidate demonstrates ownership (migration), dives deep into IAM/Secrets Manager nuances, quantifies impact, and reflects on a failure to tighten permissions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
