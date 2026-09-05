---
qid: ing_5ab9187b84__star__local
question: 'Explain: III. Config — The 12-Factor App'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 266
total_tokens: 504
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:29:05-05:00'
sources: []
---

**Situation**  
When I joined a startup building an image‑recognition service, the deployment pipeline was flaky – each new model version would overwrite environment variables and break downstream inference jobs.

**Task**  
I had to standardize how configuration is managed so that any team member could deploy or roll back a model without touching code or scripts.

**Action**  
I introduced the 12‑Factor App “Config” principle: keep all runtime settings in environment variables. I refactored the inference service to read its GPU quota, batch size, and S3 bucket paths from `$CONFIG_*` vars. For secrets (API keys, DB creds) I added a lightweight Vault integration that injects values at container start. I also created a `config.yaml` template with defaults so new developers could see the expected shape of the config file.

**Result**  
Deployment time dropped from 15 minutes to under 3, and the failure rate due to mis‑configured environments fell by 80 %. The clear separation between code and config made CI/CD pipelines simpler and reduced human error. I learned that treating configuration as a first‑class resource is critical for scaling ML workloads reliably.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
