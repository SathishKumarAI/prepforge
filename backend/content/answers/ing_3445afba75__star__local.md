---
qid: ing_3445afba75__star__local
question: How to setup the account and credentials for Google and Google Drive?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 343
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:12:58-05:00'
sources: []
---

**Situation** – I was onboarding a new data‑science team into our analytics platform at a fintech startup. We needed to pull transaction logs from the company’s shared Google Drive, but our CI/CD pipeline had no access yet, so the data engineer role was stalled.

**Task** – My goal was to create a secure service account that could read files in the designated Drive folder and expose the credentials safely to the deployment environment without exposing secrets on disk.

**Action** – I started by logging into Google Cloud Console, creating a new project “Analytics‑Service‑Account” and enabling the Google Drive API. Using `gcloud iam service-accounts create analytics-sa --display-name="Analytics Service Account"`, I generated a key file in JSON format. I then added the account to the Drive folder’s sharing settings with *Viewer* rights. To keep secrets out of source control, I pushed the JSON to HashiCorp Vault and created a small wrapper script that fetched the token at runtime via `google-auth` library, refreshing it automatically. Finally, I updated our CI pipeline to use the `GOOGLE_APPLICATION_CREDENTIALS` env var pointing to the vault path.

**Result** – The team was able to pull ~1.2 GB of transaction logs per day within minutes of deployment. We reduced manual credential rotation time from weeks to hours and achieved zero‑touch access for future pipelines, while keeping audit trails in Vault. This experience reinforced that a well‑documented service‑account workflow is the backbone of secure cloud data ingestion.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
