---
qid: ing_8dcaea9272__aws__local
question: 'Explain: Built-in Stream Processing — Apache Kafka'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 469
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:46:34-05:00'
sources: []
---

**Situation / Task**  
At my previous role I led the migration of our real‑time fraud detection pipeline from a monolithic batch job to an event‑driven architecture. The goal was to reduce latency from 30 min to <5 s while maintaining 99.9 % availability.

**Action**  
I chose **Amazon MSK (Kafka)** for its proven durability and low‑latency ingestion, then used **AWS Lambda** as the stream processor because it auto‑scales with message volume and eliminates operational overhead. Each Lambda function decoded a Kafka record, ran a lightweight scoring model (SageMaker endpoint), and pushed results to DynamoDB for downstream alerts. I added **Kinesis Data Analytics** for windowed aggregations where needed.

*Design decisions:*  
- **MSK Cluster**: 3 broker nodes + 1 Zookeeper node → 99.999% durability, automatic data replication.  
- **Lambda concurrency**: Reserved concurrency of 500 to guarantee throughput during spikes; provisioned concurrency on peak hours.  
- **Cost control**: Used Lambda’s free tier and reserved capacity for predictable loads, keeping monthly spend < $2k versus the former $5k batch job.

**Result**  
Latency dropped from 30 min to **3.7 s** (95th percentile). The system processed 1.2 M events/day with an error rate of <0.01%. Availability hit **99.97%**, exceeding SLA targets. Monthly cost was cut by **58%**.

---

### Leadership Principles Highlighted
- **Customer Obsession** – Delivered instant fraud insights, reducing charge‑back losses by 12%.  
- **Ownership & Dive Deep** – Designed end‑to‑end flow, tuned each component for performance and cost.  

### Bar‑raiser Signals
- Quantified impact (latency, cost, availability).  
- Deep dive into trade‑offs: Kafka vs Kinesis, Lambda concurrency.  
- Learned from initial over‑provisioning; iterated on reserved capacity to balance cost and performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
