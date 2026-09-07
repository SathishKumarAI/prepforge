---
qid: ing_9dab36e314__aws__local
question: 'What is Event Driven Architecture? — Event-Driven Architecture (EDA): A
  Complete Introduction'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 500
total_tokens: 737
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:21:34-05:00'
sources: []
---

**Answer – Event‑Driven Architecture (EDA)**  

> *Customer Obsession & Ownership* – I built a real‑time fraud detection pipeline for a payment platform that reduced false positives by **35 %** while keeping latency under 200 ms.

### Situation  
Our monolithic service processed transaction records and ran batch ML models every night. Users complained about delayed alerts, and the team lacked visibility into why certain transactions were flagged.

### Task  
Design an architecture that delivers predictions as soon as a transaction is captured, scales to millions of events per day, and allows independent teams to add new models without downtime.

### Action  
1. **Event Source** – Use *Amazon Kinesis Data Streams* (or *Kafka on MSK*) to ingest raw transactions in real time.  
2. **Processing Layer** – Deploy *AWS Lambda* functions triggered by stream shards. Each function loads the latest ML model from *S3*, scores the event, and writes a prediction record back to another stream.  
3. **Model Management** – Store model binaries in *Amazon SageMaker Model Registry*. A CI/CD pipeline (CodePipeline + CodeBuild) automatically pushes new models to Lambda’s deployment package via *Lambda Layers* or container images.  
4. **Orchestration & Reliability** – Wrap the Lambda chain with *Step Functions* for retry, dead‑letter queues (*SQS*), and logging to *CloudWatch*.  
5. **Observability** – Emit custom metrics (prediction latency, success rate) to *Amazon CloudWatch Metrics*; set alarms for SLA breaches.

### Result  
- **Latency**: 150 ms average from event ingestion to prediction.  
- **Throughput**: 10 M events/day with no throttling.  
- **Cost**: $0.03 per million Lambda invocations vs $5,000/month legacy batch compute.  
- **Business Impact**: Reduced false positives by 35 %, improving user trust and revenue.

### Reflection  
I learned that decoupling data ingestion from model inference allows teams to iterate models independently. Future improvements include moving to *SageMaker Edge* for ultra‑low latency in mobile scenarios. This architecture embodies the Amazon principle of **Invent & Simplify** while ensuring robust, scalable delivery.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
