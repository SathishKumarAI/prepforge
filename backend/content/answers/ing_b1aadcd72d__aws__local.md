---
qid: ing_b1aadcd72d__aws__local
question: 'Q: What triggers should cause automatic rollback?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 548
total_tokens: 776
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:06:44-05:00'
sources: []
---

**Situation / Task**  
I led a production‑grade recommendation engine for a global e‑commerce platform that served ~30 M requests/day. Our goal was to roll out new ML models continuously while guaranteeing no degradation in customer experience.

**Action – Design of Auto‑Rollback Triggers**  

| Trigger | Metric | Threshold | AWS Service |
|---------|--------|-----------|-------------|
| **Accuracy drift** | F1‑score on real‑time validation set | < 0.92 (5% drop) | SageMaker Model Monitor + CloudWatch Alarms |
| **Latency spike** | 95th percentile latency | > 200 ms increase | CloudWatch Application Insights |
| **Error rate surge** | HTTP 5xx count | > 2× baseline | CloudWatch Logs Insights |
| **Data drift** | Feature distribution shift (KS‑stat) | > 0.15 | SageMaker Model Monitor |
| **Unplanned failures** | Lambda health check errors | > 10% of invocations | AWS Lambda + SNS |

The pipeline uses **SageMaker Endpoint Auto Scaling** for traffic routing, a **Step Function** that checks the above metrics every 5 min, and if any threshold is breached it triggers an **automatic rollback** to the previous stable endpoint. Rollback itself is just a `CreateEndpointConfig` call pointing to the last known good model, executed in < 30 s.

**Result**  
After deployment, we saw a **0.4% lift in conversion rate** and avoided 3 potential outages that would have cost ~$12k/month in lost revenue. The rollback latency averaged 18 s, keeping SLA > 99.9%.

**Reflection (Bar‑raiser focus)**  
*Ownership*: I set up end‑to‑end monitoring rather than relying on ad‑hoc alerts.  
*Dive Deep*: We quantified each trigger with statistical thresholds and validated them in A/B tests before production.  
*Learned from Failure*: Early rollbacks were too conservative; after observing a false positive, we refined the KS‑stat threshold to reduce unnecessary traffic shift.

**Leadership Principles Anchored**  
- **Customer Obsession** – protecting user experience by preventing degradations.  
- **Ownership & Dive Deep** – building robust monitoring and fast rollback mechanisms.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
