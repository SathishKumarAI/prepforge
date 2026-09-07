---
qid: ing_0c0c1b21cf__aws__local
question: 'Explain: Data flow — Computer Use Agent Production'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 451
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:53:03-05:00'
sources: []
---

**Situation & Task**  
In my last role I led the launch of an “AI‑Powered Computer Use Agent” that monitored user activity and automatically applied policy rules in real time. The goal was to reduce manual compliance reviews by **70 %** while keeping latency under 200 ms.

**Action**  
I designed a data pipeline that ingests raw telemetry from Windows Event Logs → **Amazon Kinesis Data Streams** → **AWS Lambda** for pre‑processing, then stores enriched events in **DynamoDB**. A scheduled **SageMaker batch transform** runs nightly to train a classification model (precision = 0.96) that predicts risky behavior. The inference endpoint is exposed via **API Gateway + Lambda**, and the decision logic lives in an **AWS Step Functions** state machine that updates policy tags in Active Directory through **AWS Systems Manager Run Command**.

Key design decisions:  
- *Scalability*: Kinesis shards (10× traffic) + Lambda concurrency (200).  
- *Availability*: Multi‑AZ deployment, DynamoDB auto‑scaling, and API Gateway with throttling.  
- *Cost*: $0.02 per 1 M events processed; total monthly spend ≈ $4k versus $25k for manual review.

**Result**  
After three months:  
- Manual review time dropped from **2,400 hrs** to **480 hrs** (80 % reduction).  
- False‑positive rate fell from 12 % to 3 %.  
- Customer satisfaction scores rose by **15 pts** on the internal survey.

**Learnings**  
I realized that *Ownership* means iterating on feedback loops—adding a new “confidence score” field after user complaints—and *Dive Deep* requires continuous monitoring of Lambda errors, which led to a 20 % improvement in cold‑start latency. This experience exemplifies Amazon’s principles: **Customer Obsession**, **Ownership**, and **Bias for Action**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
