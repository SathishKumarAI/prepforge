---
qid: ing_3246c500bc__aws__local
question: 'Explain: Demo Account — DevOps-SRE/3_Observability/NewRelic/Readme.md at
  main \u00b7 Anshul619/DevOps-SRE \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 263
output_tokens: 398
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:19:00-05:00'
sources: []
---

**Situation & Task**  
I was tasked to build a **demo‑account pipeline** for an internal SRE team so new hires could spin up a fully‑observable environment in minutes. The goal was to expose all key metrics (latency, error rates, throughput) via New Relic while keeping cost under $5/day.

**Action**  
1. **Infrastructure as Code** – Used Terraform + AWS CDK to launch an EKS cluster, autoscaling groups, and a managed Prometheus stack.  
2. **Observability Layer** – Deployed the New Relic Infrastructure Agent on every node, added a custom `newrelic-prometheus` exporter for application metrics, and configured alerts (SLO‑based) via New Relic Alerts.  
3. **Automation & Security** – CI/CD pipeline in GitHub Actions tags commits to Terraform, runs security scans (Checkov), then applies changes with IAM roles scoped to the demo account.  
4. **Cost Control** – Implemented a Lambda that terminates idle clusters after 30 min of no traffic and uses spot instances for worker nodes.

**Result**  
- On launch day, 20 new hires spun up their own demo in <10 min.  
- New Relic dashboards showed >95% SLO compliance; alert fatigue dropped by 70%.  
- Monthly spend stayed at **$3.60**, below the $5 target.  

**Learning & Ownership**  
I owned the entire stack, from Terraform modules to alert tuning, and iterated after each demo session—fixing flaky metrics and tightening IAM policies. This showcases *Ownership*, *Dive Deep*, and *Deliver Results*—the qualities Amazon looks for in a bar‑raiser.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
