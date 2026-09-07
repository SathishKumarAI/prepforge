---
qid: ing_c3109c51a3__aws__local
question: 'Explain: Example — Retrypattern'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 457
total_tokens: 683
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:44:05-05:00'
sources: []
---

**Situation / Task**  
At my previous role I was responsible for a nightly model‑training pipeline that ingested data from an on‑prem Hadoop cluster and stored the resulting artifacts in S3. The training step ran as a Lambda triggered by an EventBridge rule. On the first run we hit intermittent network failures to the external feature store, causing 27 % of jobs to abort before completion.

**Action**  
I introduced a **retry pattern** built around *AWS Step Functions* and *SQS FIFO queues*.  
1. The Lambda writes its state to DynamoDB and pushes a retry message to SQS with an exponential back‑off delay (initial 30 s, max 5 min).  
2. A Step Function orchestrates the retry logic: it polls SQS, invokes the Lambda again, and checks a “success” flag in DynamoDB.  
3. After 4 consecutive failures we send an SNS alert to Ops.

This pattern uses *SQS FIFO* (to preserve order), *Step Functions* (for stateful retries), and *Lambda* (stateless compute). It scales automatically: if traffic spikes, SQS can queue thousands of retry messages without throttling. Availability is high because each component has at least 99.9 % SLA; the cost impact is negligible (<$1/day) compared to the avoided downtime.

**Result**  
The retry mechanism reduced job failures from 27 % to <2 %, increasing model availability by **15 %** and cutting manual intervention tickets by 80 %. It also surfaced a subtle bug in the feature store API, leading to a permanent fix that eliminated future failures.  

---

> **Leadership Principles Highlighted**  
> *Customer Obsession* – ensuring our ML models were reliably available for downstream analytics.  
> *Ownership & Dive Deep* – architecting a fault‑tolerant solution and digging into failure logs to root‑cause the issue.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
