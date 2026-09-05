---
qid: ing_85a0dacbd9__star__local
question: 'Explain: Automating Kerberos Keytab Rotation at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 349
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:00:19-05:00'
sources: []
---

**Situation** – At Uber I was on the infra team managing the authentication stack for our microservices fleet. One of the critical pain points was that each service had a Kerberos keytab stored in a shared secret store; we rotated these manually every 90 days, which led to outages when an engineer forgot to update a keytab before its expiry.

**Task** – I needed to build an automated pipeline that would detect expiring keytabs, generate fresh ones using the Kerberos KDC, securely distribute them to all affected services, and verify successful deployment—all without human intervention.

**Action** – I wrote a Python orchestrator that ran on a Kubernetes CronJob every 12 hours. It queried the KDC via `kadmin.local`, filtered keytabs with less than 48 h left, and used the `kinit` command to create new tickets. Fresh keytabs were pushed into HashiCorp Vault as secret versions; a sidecar in each service’s pod watched for changes and reloaded the keytab on receipt. I added idempotent checks and alerting via PagerDuty if any step failed.

**Result** – The rotation cycle dropped from 90 days to one week, eliminating manual errors and reducing authentication‑related incidents by 95%. I also documented a “keytab health” dashboard that now shows real‑time expiry status for all services. This experience taught me how to combine Kerberos primitives with modern secret management to build resilient infra automation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
