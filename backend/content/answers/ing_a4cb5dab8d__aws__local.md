---
qid: ing_a4cb5dab8d__aws__local
question: 'Explain: company again in an event notification system'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 371
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:39:53-05:00'
sources: []
---

**Situation & Task**  
I was hired by a fintech startup to rebuild their real‑time event‑notification pipeline that had been crashing under peak load (10k events/s). The business required *zero missed alerts* for fraud detection and *sub‑1 s latency* for compliance.  

**Action**  
- **Ownership & Customer Obsession**: I scoped a new architecture in AWS, starting with **Amazon EventBridge** to ingest all event streams, then routing them via **AWS Lambda** (parallel execution) to **Amazon Simple Notification Service (SNS)** and **SQS** for downstream processing.  
- **Dive Deep & Bias for Action**: Implemented *Lambda Destinations* and *DLQs* to capture failures; added CloudWatch metrics and an auto‑scaling target on Lambda concurrency based on the 95th percentile latency.  
- **Invent & Simplify**: Replaced legacy polling with a serverless model, cutting operational overhead by 70 %.  
- **Deliver Results**: After deployment, we saw *99.999% event delivery*, latency dropped from 3 s to <0.8 s, and cost decreased from $2k/month to $650/month.

**Result**  
The new system handled peak traffic of 15k events/s with no data loss, enabling the company to meet regulatory SLAs and grow user base by 40 % in six months.

> **Bar‑raiser notes**: The candidate shows full ownership, a deep technical dive into serverless components, quantifies impact (latency & cost), and learned from prior failures by adding DLQs and scaling logic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
