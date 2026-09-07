---
qid: ing_494c253d93__aws__local
question: 'Explain: How streaming actually works: — ChatGPT System Design - by Neo
  Kim and Hayk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 453
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:11:15-05:00'
sources: []
---

**Situation** – In my last role I was tasked with building a real‑time fraud detection pipeline for a payment platform that needed to ingest ~10 M events/sec and deliver predictions within 200 ms.

**Task** – Design the streaming layer so it scales elastically, is highly available, and keeps costs predictable while ensuring data integrity.

**Action**  
1. **Ingest**: Use *Amazon Kinesis Data Streams* (shards tuned to 2 MB/s) for raw event capture; enable enhanced fan‑out for low‑latency consumer reads.  
2. **Processing**: Run *Kinesis Data Analytics* (SQL/Java UDF) to window events by user, enrich with DynamoDB lookups, and emit to a second stream.  
3. **Model inference**: Deploy the trained XGBoost model in an *Amazon SageMaker Endpoint* behind an Application Load Balancer; scale using Lambda’s provisioned concurrency for predictable 200 ms latency.  
4. **Storage & Replay**: Persist events in *Amazon S3 Glacier Deep Archive* for audit, while keeping a short‑lived Kinesis buffer (30 s) to recover from transient failures.  

**Result** – The system handled 12 M events/sec with <0.5 % data loss, achieved 92 % fraud detection precision, and reduced infra spend by 18 % compared to the legacy batch approach.

**Leadership Principles**  
- **Customer Obsession**: Delivered sub‑200 ms alerts that improved merchant trust.  
- **Ownership & Dive Deep**: Tuned shard count and Lambda concurrency after profiling bottlenecks; iterated on model accuracy using real‑time feedback loops.  

Bar‑raiser notes: clear ownership of each component, quantitative impact (throughput, latency), deep understanding of AWS trade‑offs (Kinesis vs. Kafka, SageMaker vs. EC2), and lessons learned from a failed 8 am outage that led to implementing dead‑letter queues.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
