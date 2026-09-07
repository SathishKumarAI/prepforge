---
qid: ing_fbd377940e__aws__local
question: 'Explain: Stream Processing Use Cases — MongoDB: The World\u2019s Leading
  Modern Data Platform | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 495
total_tokens: 738
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:47:34-05:00'
sources: []
---

**Situation & Task (S)**  
While leading a data‑engineering team for a fintech startup, we needed real‑time fraud detection on every transaction (~10 k tx/s). The existing batch pipeline caused 30‑minute latency – unacceptable for our $12 B merchant network.

**Action (A)**  
I championed a **stream‑processing architecture** that leveraged MongoDB Atlas’s change streams and AWS Kinesis Data Streams.  
1. **Data Ingestion** – Every write to the `transactions` collection emitted a change event into a Kinesis stream.  
2. **Processing Layer** – A Lambda function (Python + PyOD) performed anomaly scoring, updating a per‑merchant “risk score” document in MongoDB.  
3. **Storage & Query** – Risk scores were indexed on `merchant_id` and TTL‑ed after 24 h to keep the dataset lean.

Key AWS services: Kinesis Data Streams (scalable, low‑latency), Lambda (pay‑per‑exec, auto‑scale), CloudWatch for metrics, S3 for audit logs.  
**Design Trade‑offs** – We chose serverless over EMR to reduce operational overhead and cost; latency remained <150 ms with a 99th percentile SLA.

**Result (R)**  
- **Detection Latency** dropped from 30 min → <200 ms.  
- Fraud losses reduced by **42%**, saving ~$3 M annually.  
- Operational cost fell 35% compared to the previous Spark batch run.

**Reflection**  
I practiced *Ownership* by owning the end‑to‑end pipeline, *Dive Deep* into MongoDB change streams, and *Bias for Action* by iterating on Lambda code in <2 weeks. The bar‑raiser will hear my quantified impact, cost trade‑offs, and how I learned from a failed first attempt that over‑provisioned Kinesis shards caused back‑pressure.

**Leadership Principles Highlighted**  
- **Customer Obsession** – Immediate fraud protection for merchants.  
- **Ownership & Deliver Results** – End‑to‑end solution delivering measurable savings.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
