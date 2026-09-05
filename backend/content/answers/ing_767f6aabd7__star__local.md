---
qid: ing_767f6aabd7__star__local
question: 'Explain: Ashish Pratap Singh — Course Introduction | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 368
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:30:53-05:00'
sources: []
---

**Situation**  
During my second year of the Master’s in Data Science, I enrolled in Ashish Pratap Singh’s “Course Introduction – System Design” to bridge the gap between ML models and production systems. The semester project required me to deploy a real‑time fraud detection model for a fintech client, but the team struggled with scaling and latency.

**Task**  
I needed to design an end‑to‑end pipeline that could ingest millions of transactions per hour, run inference in under 200 ms, and log results for audit, all while keeping costs below $5k/month.

**Action**  
I mapped out a microservices architecture using Docker Compose, then containerized the model with TensorFlow Serving. For data ingestion I set up Kafka topics on Confluent Cloud, and used AWS Lambda functions to preprocess streams in real time. The inference service was deployed behind an Application Load Balancer, auto‑scaling based on CPU usage. I added Prometheus and Grafana dashboards for latency monitoring, and implemented S3 event triggers to store raw logs.

**Result**  
The system processed 1.2 million transactions per hour with average inference latency of 170 ms, meeting the SLA. Operational costs dropped by 30% compared to our baseline monolith. I learned that thoughtful system design—decoupling ingestion, processing, and serving layers—is critical for ML production reliability and scalability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
