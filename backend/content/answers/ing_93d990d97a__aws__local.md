---
qid: ing_93d990d97a__aws__local
question: 'Explain: On-call playbook — Eval Gated Cicd'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 466
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:00:13-05:00'
sources: []
---

**Situation & Task**  
While leading a serverless e‑commerce platform at my last company, we noticed that every on‑call incident triggered a *manual* gate in our CI/CD pipeline (e.g., manual approval for new Lambda deployments). The result was a 25 % lag between bug fix and production rollout, hurting our **Customer Obsession** score.

**Action**  
I owned the issue: I re‑engineered the playbook into an automated “Eval Gated CICD” workflow.  
1. **Requirements:**  
   * Automatic rollback on failed health checks.  
   * Zero‑downtime blue/green deployments with API Gateway and CloudFront.  
   * Real‑time alerting via Amazon SNS + ChatOps (Slack).  

2. **Design & Services:**  
   * **AWS CodePipeline** → CodeBuild for unit tests, **CodeDeploy** for Lambda traffic shifting.  
   * **CloudWatch Alarms** monitor latency/5xx; if thresholds breached, pipeline auto‑cancels and triggers rollback.  
   * **Step Functions** orchestrate the gating logic (approval, canary checks).  

3. **Scalability & Cost:**  
   * Serverless components keep costs below $0.01 per deployment.  
   * Traffic shifting keeps 99.9 % availability during rollouts.

**Result**  
Deployment latency dropped from 12 h to under 30 min, while mean time to recovery (MTTR) fell by **40 %**. Customer satisfaction (CSAT) rose from 78 % to 92 %. I documented the playbook and trained four on‑call engineers—ensuring knowledge transfer.

**Learning & Bar‑Raiser Insight**  
I practiced *Ownership* by iterating the playbook post‑incident, and *Dive Deep* when diagnosing false positives in CloudWatch. The bar‑raiser would note my quantitative impact, proactive automation, and willingness to fail fast (the first iteration mis‑rolled a healthy build) but learned from it quickly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
