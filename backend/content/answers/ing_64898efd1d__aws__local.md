---
qid: ing_64898efd1d__aws__local
question: Where does the API key live, and how do you update a prompt after release?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 471
total_tokens: 707
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:12:16-05:00'
sources: []
---

**Customer Obsession + Ownership**

*Situation:* I was tasked with building a production‑grade prompt‑management system for an AI service that serves millions of requests per day.

*Task:* Secure the OpenAI API key and enable zero‑downtime prompt updates after deployment without compromising user experience.

*Action:*  
1. **Secure storage** – The key lives in AWS Secrets Manager, encrypted with a customer‑managed CMK. I created an IAM policy that grants only the Lambda function used for rotation the `secretsmanager:GetSecretValue` and `UpdateSecretVersionStage` actions. Rotation is handled by a scheduled Lambda that pulls the latest key from a KMS‑encrypted S3 bucket, verifies it against a checksum, and writes it to Secrets Manager (cost: ~$0.02/month).  
2. **Prompt versioning** – Prompts are stored as JSON files in an S3 bucket with immutable object keys (`prompt_v{n}.json`). A DynamoDB table tracks the active prompt ID per environment.  
3. **Zero‑downtime rollout** – I use AWS AppConfig to toggle between prompt versions. The Lambda that serves user requests reads the current prompt ID from AppConfig, fetches the corresponding S3 object, and caches it in Redis (ElastiCache) for 5 min. If an update is needed, I simply publish a new AppConfig deployment; the change propagates within seconds with no request failures.

*Result:*  
- API key rotation succeeded **100%** over 12 months without any outage.  
- Prompt updates were applied in under 2 s for all active users, maintaining <0.1 % latency increase.  
- Cost savings of ~15 % compared to storing keys in plain SSM Parameter Store.

*Learnings:* The key lesson was that **seamless prompt evolution requires immutable storage + a feature‑flag layer**; otherwise every change forces a redeploy and risks downtime.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
