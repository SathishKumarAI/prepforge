---
qid: ing_b3c49dc261__star__local
question: 'Explain: AWS Secrets Manager — AWS-Services/17_Security/1_DataProtection/AWSSecretsManager.md
  at main \u00b7 Anshul619/AWS-Services \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 270
output_tokens: 326
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:31:23-05:00'
sources: []
---

**Situation:**  
At my last company we were building a serverless analytics pipeline that pulled data from several third‑party APIs. Each API required its own key and password, and the team was storing them in environment variables on Lambda functions. A security audit flagged that credentials were exposed in logs and could be accessed by anyone with IAM read access to the deployment stack.

**Task:**  
I needed to centralise all secrets, enforce least‑privilege access, and ensure they rotated automatically without breaking the pipeline or increasing operational overhead.

**Action:**  
I introduced AWS Secrets Manager. First, I created a single secret per API, storing key/value pairs in JSON. Then I used IAM policies that allowed only the Lambda execution role to retrieve the secret value via `GetSecretValue`. I modified the Lambda code to call the Secrets Manager SDK at startup and cache the credentials in memory. For rotation, I set up a Lambda rotation function that automatically updated each secret every 30 days, using the built‑in rotation template for API keys. Finally, I added CloudTrail logging to monitor access patterns.

**Result:**  
Secrets were no longer exposed in logs; IAM permissions dropped by 70 % for developers. The automated rotation reduced manual credential updates from monthly to zero. After deployment, we saw a 90 % drop in security‑related incidents and gained compliance with SOC 2 data protection requirements. I learned that Secrets Manager not only secures credentials but also streamlines operational workflows when integrated thoughtfully.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
