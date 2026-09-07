---
qid: ing_539108b9a3__aws__local
question: 'Explain: Serverless Computing – Amazon Web Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 458
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:33:38-05:00'
sources: []
---

**Answer (Amazon Way)**  

During my last role as a Machine‑Learning Engineer at a fintech startup, we needed to move from an on‑prem Spark cluster to a fully **serverless** pipeline that could scale with our monthly user base (≈ 50 k active users).  

- **Situation:** The legacy ETL job ran nightly on EC2, costing $3 K/month and often exceeded the 8‑hour limit.  
- **Task:** Design an end‑to‑end serverless workflow that reduced cost by ≥ 70% while maintaining 99.9% availability.  
- **Action:** I leveraged **Amazon EventBridge** to trigger the pipeline on new data arrival, invoked **AWS Lambda** (Python) for lightweight transformations, and used **Amazon S3** as a durable staging layer. For heavy‑weight training, I launched **Amazon SageMaker Processing Jobs** inside a Spot‑Instance fleet, passing hyperparameters via **SQS** queues. Finally, I stored model artifacts in **Amazon SageMaker Model Registry** and deployed them with **Amazon API Gateway + Lambda** for inference.  
- **Result:** Deployment time dropped from 4 h to < 30 min; monthly spend fell from $3 K to $600 (80% savings). Latency improved by 35%, and we achieved a 99.9% SLA thanks to built‑in retry logic in EventBridge and Lambda concurrency controls.

**Leadership Principles Highlighted**

- **Ownership & Deliver Results:** I owned the migration end‑to‑end, drove measurable cost reduction, and ensured high availability.  
- **Dive Deep:** I analyzed EC2 usage patterns, benchmarked Lambda cold‑start impacts, and optimized Spot‑Instance bidding strategies to balance cost vs. reliability.

**Bar‑raiser takeaways**

- Clear ownership of both technical design and business impact.  
- Quantified results (cost & latency).  
- Demonstrated deep knowledge of AWS services and trade‑offs between serverless compute, storage, and training workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
