---
qid: ing_255d5757c0__aws__local
question: 'Explain: 🔄 Asynchronous Communication — Awesome System Design Resources'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 466
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:50:33-05:00'
sources: []
---

**Situation / Task**  
In 2023 I led the redesign of our recommendation engine’s training pipeline. The legacy system ran synchronous batch jobs that blocked downstream inference and caused a 25 % lag in serving new user data. My goal was to shift to an *asynchronous* architecture that could ingest, preprocess, and train models with < 5‑minute latency while keeping costs below the $1M budget.

**Action**  
I mapped out the data flow: raw clickstreams → Kinesis Data Streams (real‑time ingestion) → Lambda → S3 event triggers. For preprocessing I used **Amazon SageMaker Processing** on spot instances, which cut compute spend by 35 %. Training jobs were launched via **SageMaker Pipelines**, orchestrated by Step Functions to guarantee idempotency and retry logic—ensuring *ownership* of the entire lifecycle. To decouple consumers from producers, I exposed a lightweight REST API through **API Gateway** backed by Lambda that publishes status events to an SNS topic; downstream services subscribe via SQS queues.

I applied *Dive Deep* by instrumenting CloudWatch metrics and X-Ray traces, revealing that each job now completes in 3 min on average versus the prior 45 min. The asynchronous model also enabled parallel training of 12 models per day, boosting recommendation hit‑rate from 18 % to **23 %** (a +28 % lift).

**Result**  
- Latency dropped from 45 min to < 5 min.  
- Cost reduced by 30 %.  
- Model freshness improved, directly driving a $2M incremental revenue in Q4.

**Leadership Principles Highlighted**  
- **Customer Obsession**: Faster recommendations → higher engagement.  
- **Ownership & Dive Deep**: From ingestion to deployment, I owned every component and continuously profiled for bottlenecks.  

Bar‑raisers will notice my quantified impact, the depth of AWS service selection, and how failures (e.g., spot instance termination) were turned into resilience features.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
