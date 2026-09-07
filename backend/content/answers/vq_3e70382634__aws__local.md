---
qid: vq_3e70382634__aws__local
question: Is this real-time anomaly detection or batch analytics?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 469
total_tokens: 699
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:47:55-05:00'
sources: []
---

**Situation (S)**  
In my last role I built a fraud‑prevention pipeline for a global payments platform that processed ~10 M transactions per day. The business asked whether we should implement real‑time anomaly detection or rely on batch analytics to surface suspicious activity.

**Task (T)**  
I had to decide which approach would deliver the most customer value while staying within our cost and latency constraints, then propose a concrete architecture using AWS services.

**Action (A)**  
1. **Customer Obsession & Ownership** – I interviewed fraud analysts, customers who’d been impacted by delayed alerts, and engineering ops to surface pain points.  
2. **Dive Deep into Requirements** – We needed < 5 s latency for high‑risk flags, 99.9% availability, and the ability to retrain models on a nightly schedule without manual intervention.  
3. **Design & AWS Services**  
   * Real‑time: Kinesis Data Streams → Lambda (feature extraction) → SageMaker Edge Inference for anomaly scoring → SNS/SQS to fraud team.  
   * Batch: Glue ETL → Redshift Spectrum → scheduled EMR Spark jobs for nightly retraining, pushing updated models back to SageMaker Endpoint.  
4. **Cost & Scalability** – Calculated that the Lambda‑based real‑time path would cost ~$0.02 per 1 M transactions (≈$200/day) versus batch (~$100/day). Availability was ensured via cross‑region Kinesis replication and Lambda concurrency limits.  
5. **Bias for Action & Deliver Results** – I ran a 2‑week pilot; real‑time detection reduced fraud losses by 18% (from $1.2 M to $0.98 M) while batch alone only cut them by 7%.

**Result (R)**  
Implemented the hybrid solution: real‑time alerts for high‑risk events and nightly batch model updates. Achieved a 25% overall fraud loss reduction, 99.97% system uptime, and maintained under $350/day operating cost. Learned that a combined strategy delivers both immediate customer safety and long‑term model accuracy—an approach I’ll bring to any data engineering challenge at AWS.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
