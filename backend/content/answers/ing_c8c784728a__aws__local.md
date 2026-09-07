---
qid: ing_c8c784728a__aws__local
question: 'Explain: F6: Cost runaway in training plane — Multi Tenant Fine Tuning
  Platform'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 396
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:55:47-05:00'
sources: []
---

**Situation / Task**  
At my previous company we launched a multi‑tenant fine‑tuning platform for custom AI models. Early adopters reported that GPU usage surged unexpectedly, driving training costs from an agreed $0.50 per hour to over **$15/hour** on a single tenant’s job – a 3,000 % cost runaway.

**Action**  
*Ownership & Dive Deep*: I formed a cross‑functional squad and performed a root‑cause analysis of the billing logs, spot‑instance utilization, and model‑card metadata.  
1. **Quota Guardrails** – Added per‑tenant GPU quota (max 4 GPUs) via AWS Service Quotas + Lambda enforcement.  
2. **Dynamic Spot Pooling** – Switched to `g5.xlarge` spot instances with a 30 % on‑demand fallback, reducing average cost by **65 %**.  
3. **Auto‑Scaling & Cost‑Alerting** – Implemented CloudWatch Alarms that trigger Lambda to pause jobs when spend exceeds $1/hour; integrated SNS + Slack alerts for tenants.  
4. **Cost Attribution** – Tagged all resources with `TenantID` and enabled AWS Cost Explorer budgets per tenant, giving transparent billing.

**Result**  
Within two weeks:  
* Avg. GPU cost per training job dropped from **$12.80 → $2.10** (84 % savings).  
* Total monthly spend on fine‑tuning fell from **$48K to $9K** while throughput remained unchanged.  
* Tenants now receive real‑time cost dashboards, increasing satisfaction scores by 27 %.  

**Learnings** – Early guardrails and automated scaling are essential; always tie cost controls back to the customer’s ROI.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
