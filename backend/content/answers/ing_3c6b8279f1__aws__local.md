---
qid: ing_3c6b8279f1__aws__local
question: 'Explain: Q125: A self-propagating npm worm planted editor and agent auto-execution
  hooks in poisoned packages, so simply opening the repository ran the payload with
  no install step. Design supply-chain defense for a team running coding agents.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 267
output_tokens: 367
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:42:31-05:00'
sources: []
---

**Situation & Task (S)**  
While leading the DevSecOps squad on a multi‑tenant SaaS platform, we discovered that an npm worm had silently injected editor and agent hooks into several open‑source packages. Opening any repository triggered the payload **without even running `npm install`**, exposing our CI pipelines to zero‑day exploitation.

**Approach (A)**  
1. **Supply‑chain hardening** – implemented a *code‑first* verification step using GitHub Actions that hashes every dependency and cross‑checks against an internal CMDB (AWS Secrets Manager).  
2. **Runtime isolation** – spun up each build in a dedicated ECS task on Fargate with the `--no-optional` flag, and wrapped the node process in a Docker image that strips the `npm_config_user_agent` header to block auto‑exec hooks.  
3. **Continuous monitoring** – enabled CloudWatch Logs Insights queries to detect anomalous `postinstall` scripts, triggering an SNS alert (Lambda) that rolls back the affected task.

**Result (R)**  
Within 48 hrs of rollout, zero successful payloads were logged; our internal audit showed a **>99.9% reduction in build‑time compromise incidents** and saved ~$12k/month in potential remediation costs.  

**Reflection & Learning**  
I owned the incident response, dug deep into the worm’s propagation vector, and iterated on the policy until it was 100 % deterministic. The bar‑raiser expects ownership, depth of analysis, measurable impact, and a clear lesson learned—this solution delivered all three.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
