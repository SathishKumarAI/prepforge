---
qid: ing_bf29222c2f__aws__local
question: 'Explain: Context — Pattern: Saga'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 408
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:36:31-05:00'
sources: []
---

**Situation & Task**  
I was leading a cross‑functional ML team at a fintech that had to migrate an on‑prem fraud detection pipeline into a fully serverless AWS stack. The existing system used a monolithic “saga” pattern—each stage of the workflow (data ingestion, feature extraction, model inference, post‑processing) ran as separate services but were tightly coupled and difficult to scale independently.

**Action**  
I re‑architected the pipeline using **Amazon EventBridge** + **Step Functions** to orchestrate the saga. Each step became a Lambda function with its own retry/back‑off logic, so failures in one stage no longer stalled the entire flow. I introduced **AWS Glue** for incremental ETL and **SageMaker Pipelines** for model training/serving, storing feature data in **Amazon Timestream** (low latency) and predictions in **DynamoDB** (fast reads). To keep costs down, I enabled Lambda provisioned concurrency only during peak hours and used Spot Instances for SageMaker training. I also added CloudWatch metrics and X-Ray tracing to surface bottlenecks.

**Result**  
- Latency dropped from 4 s to **0.8 s** per transaction.  
- Throughput increased by **300%**, handling a 5× spike in fraud alerts during Q4.  
- Operational cost fell 40% year‑over‑year, and mean time to recovery for failures decreased from 2 h to under **15 min**.

**Learnings & Bar‑raiser cues**  
I practiced *Ownership* by taking end‑to‑end responsibility for the migration, *Dive Deep* through detailed telemetry, and *Deliver Results* with clear metrics. I also documented failure modes and conducted post‑mortem reviews, turning every incident into a learning loop that fed back into the design—exactly what a bar‑raiser expects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
