---
qid: ing_bc4644c688__star__local
question: 'Explain: Attach a policy — AWS-Services/17_Security/1_DataProtection/AWSSecretsManager.md
  at main \u00b7 Anshul619/AWS-Services \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 270
output_tokens: 350
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:47:41-05:00'
sources: []
---

**Situation:**  
In my last role, we had an internal analytics pipeline that pulled credentials from AWS Secrets Manager into several Lambda functions. During a quarterly audit the security team discovered that one of our secrets was accessible to more IAM roles than intended—specifically, all developers could read it, which violated our data‑protection policy.

**Task:**  
I needed to restrict access so only the production environment’s Lambda role could read the secret while still allowing the CI/CD pipeline to rotate it automatically. The goal was to comply with the company’s Data Protection SOP and reduce attack surface without breaking automation.

**Action:**  
I drafted a custom IAM policy in JSON that granted `secretsmanager:GetSecretValue` only on the specific secret ARN for the Lambda role, and `secretsmanager:RotateSecret` for the CI/CD role. I attached this policy to the two roles using Terraform (`aws_iam_role_policy_attachment`). To verify, I ran AWS Config rules and a penetration‑testing script that attempted unauthorized reads; both failed as expected. I also updated our documentation in the GitHub repo (AWS-Services/17_Security/1_DataProtection/AWSSecretsManager.md) to include the policy template and an explanation of the rotation workflow.

**Result:**  
The audit passed with zero findings for Secrets Manager access. We reduced potential exposure by 90 % while keeping the automated rotation intact. I learned how fine‑grained IAM policies can be leveraged to enforce least privilege, and that documenting them in a shared repo ensures repeatability across teams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
