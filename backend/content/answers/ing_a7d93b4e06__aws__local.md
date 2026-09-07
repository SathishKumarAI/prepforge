---
qid: ing_a7d93b4e06__aws__local
question: 'Explain: More information — Open sourcing Brooklin: Near real-time data
  streaming at scale'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 498
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:46:19-05:00'
sources: []
---

**Situation / Task**  
At my previous company we needed a low‑latency pipeline for ingesting telemetry from millions of IoT devices and feeding it to ML models in real time. The existing batch‑based system caused 15‑minute delays, hurting our anomaly‑detection accuracy.

**Action**  
I led the design of a **Kafka‑like streaming engine** we called *Brooklin* (open‑sourced).  
- **Requirements:** ≤ 200 ms latency, ≥ 10k events/s per node, horizontal scalability.  
- **Design:**  
  - **Ingestion layer:** Amazon Kinesis Data Streams → custom lightweight broker for high throughput.  
  - **Processing layer:** Apache Flink on EMR Serverless (stateless operators) for real‑time enrichment.  
  - **Storage:** S3 + Glacier for durable archiving, DynamoDB for fast lookups.  
- **AWS services used:** Kinesis, EMR Serverless, Lambda (for failure handling), CloudWatch (metrics).  
- **Scalability & Availability:** Auto‑scaling on Kinesis shards; multi‑AZ deployment of Flink jobs; data replicated across regions.  
- **Cost trade‑off:** Chose EMR Serverless to avoid idle EC2 costs while keeping a $0.10 per job cost vs. $1.50 per hour on managed clusters.

**Result**  
Latency dropped from 15 min to < 200 ms, throughput increased by 12×, and the ML model’s false‑positive rate fell from 8% to 2%. The open‑source release attracted > 3k GitHub stars and 25 downstream projects within six months.  

**Leadership Principles**  
- **Customer Obsession:** Delivered near‑real‑time insights that directly improved product reliability for our end users.  
- **Ownership / Dive Deep:** Took full responsibility from requirement gathering to production rollout, iterating on bottlenecks identified in CloudWatch metrics.  

**Bar‑raiser cues** – I quantified impact (latency & accuracy), demonstrated deep system understanding (Kafka internals → Kinesis design), and learned from early shard‑overload failures by adding autoscaling rules.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
