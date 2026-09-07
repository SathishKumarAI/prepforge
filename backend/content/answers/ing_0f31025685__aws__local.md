---
qid: ing_0f31025685__aws__local
question: 'Explain: Related patterns — Pattern: Messaging'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 547
total_tokens: 775
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:00:00-05:00'
sources: []
---

**Situation (S)**  
At my previous company we built a real‑time recommendation engine for an e‑commerce platform that served 2 M users daily. The model needed fresh data from clickstreams and inventory updates, but our batch pipeline caused a lag of 30 min, hurting conversion rates.

**Task (T)**  
I was tasked to redesign the ingestion layer so the ML workflow could consume events in near‑real time while still supporting downstream batch training.

**Action (A)**  
1. **Pattern: Messaging** – I chose an event‑driven architecture using **Amazon Kinesis Data Streams** for raw click data and **SNS** for inventory updates, ensuring decoupling between producers and consumers.  
2. A **Lambda** function processed each shard record, performed lightweight enrichment (user profile lookup in DynamoDB), and pushed the transformed payload to an **SQS FIFO queue** that served as a buffer for the ML inference microservice.  
3. For batch training, I used **Glue ETL jobs** that consumed the same Kinesis stream via **Data Streams API**, aggregating data into **Amazon S3** partitions daily, then triggering a SageMaker training job on an **ml.m5.xlarge** instance.  
4. To guarantee availability, I enabled **Kinesis Multi‑Shard Auto Scaling** and **SQS DLQs** for error handling. Cost was controlled by using **Provisioned Throughput** for Kinesis during peak hours and spot instances for SageMaker.

**Result (R)**  
- Real‑time inference latency dropped from 30 min to <2 s, boosting conversion by **12%** and revenue by **$350k/month**.  
- Batch training time reduced from 4 h to 1.5 h, freeing up dev ops capacity for new features.

---

### Leadership Principles Highlighted
* **Customer Obsession** – Delivered faster recommendations that directly improved user experience and sales.  
* **Ownership & Dive Deep** – Took full responsibility for the data pipeline, dissected bottlenecks, and engineered a scalable solution across services.

### Bar‑raiser Signals
* Demonstrated ownership by leading cross‑functional coordination (data engineering, infra, ML ops).  
* Showed depth with concrete service choices and trade‑off analysis (throughput vs cost).  
* Quantified impact (12% lift, $350k/month) and reflected on learning—future iterations will explore **Kinesis Firehose** for even lower latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
