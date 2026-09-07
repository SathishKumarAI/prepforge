---
qid: ing_65d6e3943d__aws__local
question: 'Explain: Data & context strategy — Ai System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 405
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:15:16-05:00'
sources: []
---

**Situation / Task**  
At my previous role I led the launch of a recommendation engine for an e‑commerce platform that had to scale to 10 M daily users and deliver real‑time insights while keeping costs under $2 M/yr.

**Action**  
I championed a *Data & Context Strategy* built on **Customer Obsession** and **Ownership**.  
1. **Context ingestion** – I designed an event pipeline using Kinesis Data Streams → Lambda → DynamoDB for stateful session tracking (latency < 200 ms).  
2. **Feature store** – A central Glue catalog fed into SageMaker Feature Store, ensuring every model had consistent, versioned features with audit logs.  
3. **Model serving** – I selected SageMaker Endpoint with autoscaling and a Spot‑Instance fallback to cap inference costs (10× cheaper than on‑demand).  
4. **Observability** – CloudWatch metrics + OpenTelemetry traces enabled real‑time drift alerts; we reduced model decay by 45 % within two weeks.

**Result**  
The system handled 12 M requests/day with <1 % error, boosted conversion by 18 %, and cut inference spend from $3.5 M to $2.0 M annually—meeting the $2 M budget target while keeping latency below 200 ms for 99.9 % of traffic.

**Bar‑raiser focus**  
- Demonstrated ownership: drove cross‑team alignment, resolved bottlenecks.  
- Dive deep: quantified trade‑offs (Spot vs On‑Demand), monitored feature drift.  
- Impact: concrete metrics on conversion and cost savings.  
- Learning: iteratively refined the pipeline after detecting model drift—showing continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
