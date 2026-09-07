---
qid: ing_08a43ea623__aws__local
question: 'Explain: Staff and principal engineers — Mobile System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 597
total_tokens: 828
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:45:41-05:00'
sources: []
---

**Scenario – Designing a mobile‑first recommendation engine for an e‑commerce app**

> *Situation:* My team was tasked to add real‑time product recommendations on the Android/iOS app while keeping latency under 200 ms and traffic spikes of 10× during Black Friday.

### **Action (Design & AWS stack)**

| Layer | Solution | Key AWS services |
|-------|----------|------------------|
| Data ingestion | Kafka streams from click events → Kinesis Data Streams | Amazon Kinesis, AWS Glue |
| Feature store | Persist engineered features in DynamoDB + S3 for batch updates | DynamoDB (fast reads), S3 (cold storage) |
| Model training | SageMaker Pipelines with Hyperparameter Tuning; versioned models in ECR | SageMaker, ECR, Step Functions |
| Inference | Lambda@Edge on CloudFront + API Gateway edge cache → low‑latency model inference via SageMaker Endpoint | Lambda@Edge, API Gateway, SageMaker RealTime endpoint |
| Monitoring | CloudWatch metrics + X-Ray traces; automated rollback if latency > 250 ms | CloudWatch, X-Ray |

*Scalability:* Kinesis shards auto‑scale with throughput; DynamoDB auto‑scales read capacity. Lambda@Edge runs in edge locations, keeping round‑trip <100 ms.

*Availability:* Multi‑AZ Kinesis + DynamoDB global tables ensure 99.999% uptime; SageMaker endpoints are deployed across regions.

*Cost trade‑off:* Using Lambda@Edge eliminates the need for a dedicated EC2 fleet (≈30 % savings). We keep model size ≤50 MB to fit into edge cache, reducing inference cost.

### **Result (STAR)**

- **S**: Implemented the above stack within 4 weeks.
- **T**: Deployed to production ahead of Black Friday.
- **A**: Latency dropped from 450 ms to 120 ms; click‑through rate on recommendations rose by 18% (+$2.3M incremental revenue).  
- **R**: The system handled a 12× traffic spike with no outages and maintained 99.98% SLA.

### **Leadership Principles Reflected**

- **Ownership:** Took full responsibility from data ingestion to inference, continuously iterating on the pipeline after real‑world feedback.
- **Dive Deep & Deliver Results:** Analyzed latency bottlenecks, tuned Kinesis shard count, and validated that each AWS service met our SLAs; quantified impact in revenue.

**Bar‑raiser takeaways:**  
1. Clear ownership of end‑to‑end flow.  
2. Depth: explicit trade‑offs (Lambda@Edge vs EC2) backed by cost/latency numbers.  
3. Quantified business outcome + learning loop for future improvements.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
