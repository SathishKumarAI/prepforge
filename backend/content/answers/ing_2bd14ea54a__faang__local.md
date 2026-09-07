---
qid: ing_2bd14ea54a__faang__local
question: 'Explain: System design and distributed systems — Technical interviewing
  | Microsoft Careers'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 446
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:24:48-05:00'
sources: []
---

**Clarify**

> *“Explain how you would design a distributed machine‑learning pipeline.”*  
I’d ask:  
1. What data volume and velocity?  
2. Are we training once or online learning?  
3. Which models (batch vs streaming)?  
4. SLA for latency, throughput, fault tolerance, cost.

**Approach**

1. **Data ingestion layer** – Kafka/​Kinesis → topic partitions per feature set.  
2. **Feature store** – Redis‑Graph + Parquet on S3 for fast lookup and historical replay.  
3. **Training cluster** – Spark on EMR or Ray for distributed training; use MLflow to track experiments.  
4. **Serving layer** – TensorFlow Serving / TorchServe behind a CDN, autoscaling via Kubernetes.

**Depth**

- *Data pipeline*: batch jobs pull from S3 → transform in PySpark → write back as Parquet + publish feature updates to Kafka.  
- *Model training*: use Horovod for synchronous SGD across 8 GPU nodes; checkpoint to EBS and replicate to S3 for durability.  
- *Serving*: expose a gRPC endpoint; cache predictions in Redis for cold‑start latency <10 ms.  
- **Complexity**: O(N log N) for training with data shuffling; serving is O(1).  
- **Trade‑offs**: batch gives consistency but higher latency vs streaming (Kafka Streams + online learning).

**Edge Cases**

- Data skew → re‑partition, dynamic work stealing.  
- Node failures → Ray’s fault tolerance, Spark checkpointing.  
- Model drift → scheduled retraining or A/B testing in serving.

**Optimize & Communicate**

Explain how autoscaling policies tie CPU/memory usage to request rates; highlight cost savings by spot instances for training. End with a diagram (not shown) and summarize that the architecture balances throughput, latency, reliability, and cost—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
