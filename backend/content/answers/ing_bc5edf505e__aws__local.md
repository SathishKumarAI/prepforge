---
qid: ing_bc5edf505e__aws__local
question: 'Explain: Produce records in a batch — GitHub - confluentinc/kafka-rest:
  Confluent REST Proxy for Kafka \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 482
total_tokens: 734
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:29:43-05:00'
sources: []
---

**Situation & Task**  
While leading a data‑pipeline revamp for our analytics platform, I had to ingest high‑velocity telemetry into Kafka without overloading the cluster or incurring large network costs.

**Action (Technical)**  
I chose **Confluent REST Proxy** (`confluentinc/kafka-rest`) because it lets us batch records in a single HTTP POST and eliminates the need for native clients on every microservice.  
*Requirements:*  
- Batch up to 10 000 events per request, each ≤1 KB.  
- Preserve ordering within a topic partition.  
- Ensure at‑least‑once delivery.

**Design**  
```json
POST /topics/telemetry
{
  "records": [
    {"key":"user_123","value":{"event":"click",...}},
    ...
  ]
}
```
The proxy forwards the batch to the broker via `KafkaProducer` under the hood. I enabled **compression=gzip** and set a 5 s request timeout. For high availability, the REST Proxy runs behind an **Application Load Balancer** with two instances in different AZs; we use **ECS Fargate** for zero‑maintenance scaling.

**Results (Dive Deep)**  
- Reduced network traffic by **70%** (single HTTP call vs. 10 000 separate Kafka producers).  
- Latency dropped from ~120 ms to ~35 ms per event batch.  
- Cost savings: < $0.02/day on Fargate vs. a dedicated EC2 producer cluster.

**Leadership Principles**  
- **Customer Obsession** – Delivered faster, cheaper telemetry ingestion for downstream analytics teams.  
- **Ownership** – Took end‑to‑end responsibility from design to monitoring (CloudWatch metrics).  

**Bar‑raiser Checkpoints**  
- Showed *ownership* by automating rollbacks on failed batches.  
- Demonstrated *dive deep* with compression trade‑offs and latency profiling.  
- Quantified impact (70% traffic reduction, 35 ms latency) and learned that enabling gzip saved costs without compromising throughput.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
