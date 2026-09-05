---
qid: ing_23eb5f9c6c__star__local
question: 'Explain: F7: Judge model deprecation — Eval Gated Cicd'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 412
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:40:58-05:00'
sources: []
---

**Situation**  
In my last role as a ML Ops engineer at a fintech startup, we had an automated trading model that was scheduled to roll out every Friday night. By the end of Q3, its precision on live data had slipped from 94 % to 88 %, while our risk team flagged increased false‑positives. The product manager demanded a quick fix without compromising uptime.

**Task**  
I needed to build a gate in our CI/CD pipeline that would automatically deprecate any model version whose evaluation score fell below a threshold, and trigger an alert for re‑training before deployment could proceed.

**Action**  
First, I added an “Eval Gated” step to the GitHub Actions workflow. After each pull request merge, a Docker container spun up our latest training script, ran it against a curated validation set, and outputted a weighted F1 score. The script compared this score to the historical baseline stored in S3; if it dropped below 90 %, the job emitted a JSON payload that marked the build as “deprecated” and blocked the deploy stage. I also hooked up PagerDuty alerts for any deprecation events and updated our Terraform scripts to automatically roll back to the last stable model in ECS if a deployment was attempted from a deprecated build.

**Result**  
Within two weeks, we eliminated three failed deployments that would have cost us $12 k in manual intervention. The new gate reduced false‑positive trades by 35 % and cut our mean time to recovery (MTTR) from 4 h to under 30 min. I learned how a simple evaluation gate can turn a fragile release process into a robust, data‑driven workflow.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
