---
qid: ing_c589e6825a__aws__local
question: 'Explain: Realtime vs post-hoc split - the core architectural decision'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 399
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:49:39-05:00'
sources: []
---

**Situation** – I led a fraud‑detection team that had to shift from batch scoring (post‑hoc) to real‑time alerts for an e‑commerce platform with 2 M daily users.  
**Task** – Design the architecture that balances latency, cost and model freshness while keeping our SLA < 50 ms for high‑volume transactions.

**Action** – I scoped two options:  
1️⃣ **Post‑hoc split**: batch jobs on EMR → S3 → SageMaker training → DynamoDB updates. 2️⃣ **Realtime split**: Kinesis Data Streams → Lambda → SageMaker endpoint (Edge) → SNS alerts.  
I applied *Dive Deep* to profile latency, cost and data drift. The realtime pipeline added ~30 % compute but cut inference time from 8 s to 45 ms, enabling instant fraud blocking. Using **Amazon SageMaker Neo** for model compaction reduced Lambda memory usage by 40 %.  

I implemented *Bias for Action* by rolling out a canary on 5 % traffic; monitored with CloudWatch metrics and set automatic rollback thresholds.  

**Result** – After two weeks, the realtime split lowered fraud‑related chargebacks by **18 %** (≈$3 M annual savings) and increased user satisfaction scores by 12 pts (CSAT). The batch pipeline remained for long‑term analytics.  
**Learnings** – Ownership of model drift led to a scheduled retrain every 24 h, and the bar‑raiser noted my transparent cost/latency trade‑off analysis and rapid failure recovery plan.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
