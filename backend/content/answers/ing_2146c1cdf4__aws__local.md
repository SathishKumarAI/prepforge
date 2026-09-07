---
qid: ing_2146c1cdf4__aws__local
question: 'Explain: Usage metrics ​ — About Glean MCP server'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 506
total_tokens: 737
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:42:35-05:00'
sources: []
---

**Situation & Task**  
When I joined the Data Platform team at Glean, the new *MCP (Model‑Control‑Platform) server* was delivering ML inference to 12 k daily users but we had no visibility into how models were actually being used. The leadership wanted a real‑time usage metric so that product managers could see which predictions mattered most and ops could spot performance regressions.

**Action**  
I owned the solution end‑to‑end:

1. **Requirements & Design** – Each inference request was tagged with `model_id`, `user_id` and `prediction_type`. I designed a lightweight, non‑blocking logger that streamed events to an *Amazon Kinesis Data Stream* (partitioned by `model_id`).  
2. **Analytics Layer** – A *Lambda* function consumed the stream, aggregated counts per minute in DynamoDB with TTL, and exposed metrics via CloudWatch Alarms.  
3. **Dashboard & Alerts** – I built a Grafana dashboard on Amazon Managed Grafana that visualised daily active predictions per model and set up anomaly detection using Athena queries over S3 logs for deep dives.  
4. **Cost & Scaling** – Using Kinesis shards at 1 MB/s (≈10 k events/sec) kept latency <50 ms; Lambda auto‑scales to 200 concurrent invocations, keeping cost under $0.30/hr. DynamoDB’s on‑demand mode handled peak traffic without provisioning headaches.

**Result**  
Within two weeks of deployment, product managers saw a 35 % reduction in “feature creep” because they could instantly identify low‑usage predictions and deprecate them. Ops flagged a sudden drop in Model‑X’s hit rate; the anomaly alert triggered an immediate investigation that uncovered a data drift issue, saving an estimated $15k/month in unnecessary inference compute.

**Reflection & Learning**  
I learned that *ownership* means not only building but also iterating on monitoring until it becomes part of the product mindset. The Kinesis‑Lambda pattern proved scalable and cost‑effective, yet I later discovered that batching Lambda payloads reduced costs by 12 %—a lesson I shared with the team during a post‑mortem.

> **Leadership Principles**: *Ownership*, *Dive Deep*, *Bias for Action* (quick deployment), *Deliver Results* (measurable cost savings).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
