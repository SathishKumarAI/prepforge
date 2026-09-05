---
qid: ing_3246c500bc__star__local
question: 'Explain: Demo Account — DevOps-SRE/3_Observability/NewRelic/Readme.md at
  main \u00b7 Anshul619/DevOps-SRE \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 269
output_tokens: 329
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:09:08-05:00'
sources: []
---

**Situation:**  
While leading the observability rollout for our cloud‑native service, I discovered that our New Relic dashboards were not reflecting real‑time traffic because the demo account we used for internal demos had limited data retention and missing API keys.

**Task:**  
I needed to create a fully functional demo environment that mirrored production metrics, enabling the team to test alerting rules, performance baselines, and incident response procedures without impacting live traffic.

**Action:**  
First, I forked the `Anshul619/DevOps‑SRE` repo and cloned the `Demo Account — DevOps-SRE/3_Observability/NewRelic/Readme.md` branch. I then scripted a Terraform module to spin up an isolated New Relic workspace with the same data model as production, injecting synthetic metrics via a lightweight Go agent. I set up Grafana dashboards that pulled from this workspace and automated API key rotation using Vault. Finally, I documented every step in the README, adding CI checks to ensure the demo config stayed in sync with upstream changes.

**Result:**  
The new demo account reduced setup time for sprint demos by 70 % (from 4 hrs to under 1 hr). Incident response drills ran twice as often, and we caught a critical alert misconfiguration that would have delayed our release by 3 days. I learned the importance of replicating production environments in dev tools and the value of infrastructure-as-code for observability demos.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
