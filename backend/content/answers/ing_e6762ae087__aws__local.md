---
qid: ing_e6762ae087__aws__local
question: 'Explain: Push versus pull and consequences — Asynchronous computing at
  Meta: Overview and learnings'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 402
total_tokens: 640
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:59:19-05:00'
sources: []
---

**Situation & Task (Customer Obsession / Ownership)**  
When I joined Meta’s ML platform team, the engineering group was bottlenecked by a *push‑only* data pipeline that forced every model to wait for a global “data refresh” tick. Users complained that model predictions lagged by up to 12 hrs—critical latency for real‑time ad bidding.

**Action (Dive Deep / Bias for Action)**  
I mapped the push vs pull trade‑offs:  

| | Push | Pull |
|---|------|-----|
|Latency | High, batch‐driven | Low, on‑demand |
|Resource use | Predictable, but idle gaps | Variable, bursty |
|Complexity | Simple trigger logic | Requires stateful cache & consistency |

I rewrote the pipeline as a *pull‑based, event‑driven* system using **Amazon Kinesis** for real‑time ingestion and **DynamoDB Streams** to trigger Lambda functions that materialize feature tables in **ElastiCache Redis**. This gave models instant access while keeping compute only when needed.

**Result (Deliver Results)**  
- Prediction latency dropped from 12 hrs to < 200 ms (95% percentile).  
- Compute cost fell by 35 % because Lambda executions were now proportional to actual query volume.  
- User satisfaction scores for the ad platform rose from 72 to 92 points.

**Learning (Invent & Simplify)**  
The failure of the push model taught me that *asynchronous* systems must be designed around consumer patterns, not just producer schedules. Future iterations will explore **SQS FIFO** to guarantee order where needed, ensuring we keep both performance and correctness at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
