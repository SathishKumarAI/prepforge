---
qid: ing_f5654d7c51__aws__local
question: 'Explain: Enterprise Sales Engineer, Financial Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 456
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:31:38-05:00'
sources: []
---

**Situation / Task**  
At a mid‑cap fintech I was hired as an **Enterprise Sales Engineer (ESE)** to help large banks adopt our AI‑driven fraud detection platform. The client had 12 M customers and needed real‑time, regulatory‑compliant models that could scale to 10⁶ transactions per day.

**Action**  
I first *dive deep* into their data pipelines: we mapped the on‑prem Oracle DB → **AWS Glue** ETL → **Amazon S3** landing zone. For inference I proposed a hybrid architecture—**SageMaker Endpoint** for model scoring, backed by **ElastiCache Redis** for stateful fraud flags and **Kinesis Data Streams** for 5 ms latency. I built a cost‑model in **AWS Cost Explorer**, showing a projected 35 % reduction in compute spend vs. their legacy Hadoop cluster. To satisfy compliance, I added **Amazon Macie** for data classification and **AWS CloudTrail** audit logs.

I then *bias for action* by running a pilot with 1 M transactions: the model achieved an F1‑score of 0.92 (vs. 0.78 baseline) and cut false positives by 27 %. I presented these results in a joint executive demo, framing the ROI as $4.8 M saved annually in fraud losses.

**Result**  
The bank signed a 5‑year contract worth **$12 M ARR**, and we scaled to 15 M daily transactions with <0.1 % downtime—meeting SLA guarantees. The success was measured by a 30 % lift in detection accuracy, 35 % cost savings, and a customer NPS jump from 68 to 82.

**Leadership Principles Highlighted**  
- **Customer Obsession**: Built the solution around their regulatory and latency needs.  
- **Ownership & Deliver Results**: Took end‑to‑end responsibility from design through deployment and ROI validation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
