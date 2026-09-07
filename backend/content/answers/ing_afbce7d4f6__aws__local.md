---
qid: ing_afbce7d4f6__aws__local
question: 'Explain: Enterprise search buyer’s guide — Learning lessons from building
  an enterprise AI assistant'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 463
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:02:43-05:00'
sources: []
---

**Situation / Task**  
I led a cross‑functional team that built an internal *Enterprise AI Assistant* for a 10 k‑employee SaaS company. The goal was to replace the legacy keyword search (≈ 4 % CTR) with a conversational agent that could surface data from CRM, knowledge bases, and real‑time analytics—boosting productivity by at least 15 %.

**Action**  
1. **Requirements & Design** – Defined intent hierarchy, fallback logic, and data access policies. Chose an architecture of *Amazon Lex* (NLU), *AWS Lambda* (business logic), *Amazon DynamoDB* (intent cache) and *OpenSearch* (search index). Integrated with *Amazon SageMaker* for continuous model tuning.  
2. **Scalability & Availability** – Enabled Lex slot‑type auto‑scaling, used Lambda provisioned concurrency to keep 99.9 % latency < 200 ms, and deployed OpenSearch across two AZs with cross‑region replication.  
3. **Cost Control** – Adopted spot instances for SageMaker training, reserved capacity for Lambda where traffic was predictable, and set a daily budget cap in Cost Explorer.  
4. **Bias for Action & Ownership** – Rolled out feature flags to enable A/B testing; iterated within 48 h based on user‑feedback loops.

**Result**  
- *CTR* rose from 4 % to **18 %** (× 4.5).  
- *Average task completion time* dropped by **30 %**, saving ~ 200 k employee hours per year.  
- Cost stayed within the allocated $12 k/month budget, with a 12 % margin after scaling.

**Reflection**  
The biggest learning was that *customer obsession* demands continuous data‑driven iteration: we deployed telemetry dashboards early and adjusted intent models weekly. The bar‑raiser will notice my ownership of the end‑to‑end pipeline, deep dive into latency trade‑offs, quantified impact on business metrics, and a clear plan for scaling while keeping cost under control.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
