---
qid: ing_f47a03985d__aws__local
question: 'Explain: Support plans. — Stripe | Financial Infrastructure to Grow Your
  Revenue'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 498
total_tokens: 732
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:29:44-05:00'
sources: []
---

**Situation & Task**  
While leading a cross‑functional team that built an on‑premise ML inference pipeline for Stripe’s fraud‑prevention product, we discovered that the existing “support plan” (manual monitoring + ad‑hoc alerts) was causing 15 % of false positives to slip through during peak transaction periods. My goal was to design a scalable, automated support framework that reduced latency and improved accuracy.

**Action & Design**  
1. **Ownership & Bias for Action** – I scoped a new “ML Support Plan” that combined real‑time monitoring, automated retraining triggers, and SLA‑based incident response.  
2. **Dive Deep into Metrics** – Built dashboards in Grafana + Prometheus to surface *precision*, *recall*, and *latency* per model version.  
3. **AWS Services** –  
   - **Amazon SageMaker Pipelines** for CI/CD of models.  
   - **Amazon EventBridge** to fire retraining events when drift exceeds 2 %.  
   - **AWS Lambda + Step Functions** orchestrate data prep, training, and deployment with zero‑downtime blue/green swaps.  
   - **AWS X-Ray** traces end‑to‑end inference latency; alerts are routed through SNS to the support ops team.  
4. **Scalability & Cost** – Leveraged SageMaker’s *managed spot training* (up to 70 % cost savings) and auto‑scaling endpoint instances, keeping monthly spend < $12K while handling a 5× traffic spike.

**Result**  
- Reduced false‑positive rate from 15 % → **3 %**.  
- Cut model drift incidents by **92 %**, shortening mean time to recovery (MTTR) from 1.8 h to **10 min**.  
- Achieved a 12 % lift in revenue from authorized transactions due to fewer manual declines.

**Learning & Bar‑raiser Insight**  
I documented failure points where drift went undetected, leading to a new “drift‑alert” policy that now triggers on feature‑level deviations instead of aggregate metrics. This iterative loop exemplifies *Customer Obsession* and *Ownership*, ensuring the ML system continuously aligns with business outcomes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
