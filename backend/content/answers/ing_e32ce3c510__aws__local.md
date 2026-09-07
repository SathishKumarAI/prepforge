---
qid: ing_e32ce3c510__aws__local
question: 'Explain: Observability: tracing LLM apps — Evaluation And Observability'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 427
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:53:02-05:00'
sources: []
---

**Situation / Task**  
In my last role I led a team that built an LLM‑powered recommendation engine for a global e‑commerce platform. The model served ~200 k requests per second and any latency spike caused $2M of lost revenue weekly. I was tasked with designing an observability framework that could detect, diagnose, and remediate issues in real time.

**Action**  
*Customer Obsession & Ownership*: I mapped every user‑facing metric (latency, error rate, token usage) to business impact.  
*Dive Deep*: Implemented end‑to‑end tracing with **AWS X‑Ray** on the Lambda inference layer and **Amazon CloudWatch Logs Insights** for model‑level metrics. Traces were enriched with request context (user ID, product category).  
*Bias for Action*: Added an automated anomaly detector in **Amazon Lookout for Metrics** that raised alerts when latency exceeded 95th percentile by >30 ms.  
*Invent & Simplify*: Created a single **Grafana dashboard** backed by **AWS Timestream** to visualize real‑time throughput, cost per token, and error buckets.  

**Result**  
Within two weeks of deployment we reduced mean time to recovery (MTTR) from 45 min to <5 min, cutting downtime costs by **$1.8M/month**. Latency variance dropped 40%, improving NPS by 12 points. The observability stack also cut debugging effort by 70 % and provided data that guided a $3M investment in model compression.

**Bar‑raiser check**  
- Demonstrated ownership of cross‑team impact.  
- Deep dive into trace structure, cost/latency trade‑offs.  
- Quantified business outcome and lessons learned (e.g., need for real‑time anomaly detection).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
