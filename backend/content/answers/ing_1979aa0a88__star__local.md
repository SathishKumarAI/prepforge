---
qid: ing_1979aa0a88__star__local
question: How it works? — AWS-Services/17_Security/1_DataProtection/AWSSecretsManager.md
  at main \u00b7 Anshul619/AWS-Services \u00b7 GitHub
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 269
output_tokens: 306
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:20:18-05:00'
sources: []
---

**Situation** – When I was building a recommendation engine for an e‑commerce client, the training pipeline required access to a PostgreSQL database and an S3 bucket with user logs. The credentials were hard‑coded in several Docker images that were being pushed to ECR, so any leak could expose sensitive data and violate GDPR.

**Task** – I had to secure those secrets, ensure they rotated automatically, and give the training job read‑only access without exposing them on disk or environment variables.

**Action** – I created a Secrets Manager secret containing the DB connection string and S3 bucket ARN. Using Terraform I provisioned an IAM role for the SageMaker notebook instance with `secretsmanager:GetSecretValue` permissions. In the training script, I called the AWS SDK (`boto3`) to fetch the secret at runtime, parsed the JSON, and used the values to establish a database connection via SQLAlchemy. I also enabled automatic rotation every 30 days with a Lambda function that updates both the DB user password and the Secrets Manager entry.

**Result** – The pipeline now runs securely on SageMaker without hard‑coded credentials; we reduced potential attack surface by 100 %. After deployment, no credential exposure incidents were logged in the last six months. I learned how to couple Secrets Manager with IAM roles and rotation policies to keep ML workloads compliant and auditable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
