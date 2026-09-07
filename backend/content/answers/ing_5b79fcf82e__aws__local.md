---
qid: ing_5b79fcf82e__aws__local
question: 'Explain: At-most once — Delivery Semantics'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 351
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:52:04-05:00'
sources: []
---

**Situation & Task**  
While leading the data‑pipeline team for our recommendation engine, we needed to guarantee that each user interaction was processed *exactly once* before training new models. A duplicate or lost event could skew model accuracy and inflate costs.

**Action**  
I designed a **single‑write, idempotent queue** using Amazon SQS FIFO queues (deduplication ID) fed into an AWS Lambda function that writes to DynamoDB with a conditional write (`ConditionExpression` on `processed = false`). The Lambda also publishes a “processed” event to SNS for downstream analytics.  
To handle retries and failure paths, I added CloudWatch alarms that trigger an SQS DLQ; a separate Lambda re‑processes DLQ items after a back‑off period.

**Result**  
After deployment, we achieved **99.999% at‑most‑once delivery**, reducing duplicate training samples by 97 %. Model drift dropped from 12 % to <2 %, and we cut data‑storage costs by $18K/month.  

**Leadership Principles**  
- *Customer Obsession*: Ensured model accuracy directly improved user experience.  
- *Ownership & Dive Deep*: Built a fault‑tolerant, cost‑efficient system that I own end‑to‑end.  

**Bar‑raiser takeaways**  
I demonstrated ownership, deep technical understanding (SQS FIFO + DynamoDB conditional writes), quantified impact, and an iterative learning loop from initial duplicate spikes to the final robust design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
