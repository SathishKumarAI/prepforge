---
qid: ing_3445afba75__aws__local
question: How to setup the account and credentials for Google and Google Drive?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 408
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:23:05-05:00'
sources: []
---

**S**ituation  
When I joined a fintech startup, the data‑science team needed to ingest customer data from Google Drive into an ML pipeline on AWS. The only hurdle was getting secure, auditable access to the Google Cloud account without exposing credentials in code.

**T**ask  
I had to design a zero‑trust workflow that allowed our SageMaker notebooks to read files while satisfying compliance and cost‑control policies.

**A**ction  
1. **Create a dedicated GCP service account** (GCP IAM → Service Accounts). Grant it the *Storage Object Viewer* role on the relevant buckets.  
2. Export the key as a JSON file, store it in **AWS Secrets Manager** (`google-service-account-key`). Encrypt with KMS and enable automatic rotation every 90 days.  
3. In the SageMaker notebook, write a small Lambda that pulls the secret at runtime, uses `google-auth` to build an OAuth2 credential, and mounts the Drive via `pydrive`.  
4. Wrap this logic in a reusable Python package (`gcp_drive_loader`) and publish it to our internal PyPI repo for reuse across teams.  

**R**esult  
- Reduced credential exposure risk by 100 % (no hard‑coded keys).  
- Cut manual onboarding time from 2 days to < 30 min per analyst.  
- Cost impact: Secrets Manager storage <$0.02/month; no extra GCP charges beyond the existing bucket usage.  

**Reflection**  
I learned that *Ownership* means anticipating future scale (rotating keys, centralizing secrets) and *Dive Deep* requires understanding both AWS and GCP IAM intricacies to avoid security gaps. This pattern now powers all external‑cloud integrations in our ML stack.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
