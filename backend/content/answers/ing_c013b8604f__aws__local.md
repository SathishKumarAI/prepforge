---
qid: ing_c013b8604f__aws__local
question: 'Explain: When to Use Message Queues — Message Queues | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 513
total_tokens: 748
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:38:21-05:00'
sources: []
---

**When to use a message queue (e.g., SQS) in ML pipelines**

> **Leadership Principles:** *Ownership* – I took full responsibility for the end‑to‑end latency of the model training pipeline.  
> *Dive Deep* – I dissected every component’s throughput and failure mode.

### **S**ituation
Our recommendation engine ingested ~50 GB/day of clickstream data, processed it in near real‑time, and triggered nightly batch‑training jobs. The existing monolithic Spark job stalled when a burst of traffic hit the ingestion endpoint, causing downstream services to time‑out.

### **T**ask
Design a decoupled architecture that guarantees data durability, fault tolerance, and predictable latency for both streaming inference and batch training.

### **A**ction
1. **Ingestion → SQS (Standard) + Kinesis Data Firehose**  
   *Each click is enqueued; the queue buffers spikes up to 10× normal rate.*  
2. **Consumer Lambda** pulls messages, aggregates them into 5‑minute batches, writes to an S3 data lake.  
3. **Batch Training Trigger** – An EventBridge rule monitors S3 “new‐file” events and starts a SageMaker training job.  
4. **Inference** – A separate SQS queue feeds the real‑time inference Lambda that pulls from Redis cache.

*Why AWS services?*  
- **SQS** provides at‑least‑once delivery, dead‑letter queues for error handling, and scales automatically.  
- **Lambda** eliminates server management; pay per 100 ms execution.  
- **EventBridge** decouples triggers without polling overhead.  

### **R**esult
- Latency from ingestion to training job launch dropped from **15 min → 2 min** (90% improvement).  
- System cost fell by **$4k/month** thanks to serverless compute.  
- SLA of 99.9% for downstream services was achieved.

---

> **Bar‑raiser focus:** I demonstrated *ownership* by redesigning the pipeline end‑to‑end, *dive deep* into queue semantics and failure paths, quantified the impact with real numbers, and learned from a failed monolith that caused 30 % downtime during traffic spikes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
