---
qid: vq_ad80c87a75__aws__local
question: How to update record in Hbase table?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 478
total_tokens: 707
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:08:54-05:00'
sources: []
---

**Situation / Task**  
In my last role I led the migration of our click‑stream analytics from a legacy RDBMS to an **HBase** cluster on AWS (EMR + EMRFS). The business required that user profile updates be reflected in real time for downstream recommendation jobs. My goal was to design a robust, low‑latency update path that could handle 50 k writes per second while keeping the system cost‑effective.

**Action**  
I implemented an **Apache Flink** streaming job that ingests change events from Kinesis Data Streams and writes them to HBase via the **HBase client API**. To guarantee atomicity, each update is performed with a `Put` that includes a `CheckAndMutate` on the record’s timestamp column; if the incoming event is older than the stored value it is discarded.  
I used **AWS Keyspaces (Cassandra‑compatible)** as an alternative for higher write throughput and added a **DynamoDB Streams** fallback to catch any missed events during EMR cluster restarts. For monitoring, I leveraged CloudWatch metrics (`HBase:WriteLatency`, `Kinesis:PutRecord.Success`) and set alerts at the 95th percentile latency threshold.

**Result**  
The new pipeline achieved < 30 ms average write latency with a 99.9 % success rate during peak traffic, reducing downstream recommendation lag from 10 min to under 2 min. Cost savings were 18 % compared to the previous Hadoop‑MapReduce batch approach. The design also proved resilient: during an accidental EMR shutdown, the DynamoDB fallback ensured zero data loss.

**Leadership Principles**  
*Customer Obsession*: Delivered real‑time updates that directly improved recommendation relevance.  
*Ownership*: Took end‑to‑end responsibility for the pipeline, from ingestion to failure handling and cost optimization.  

**Bar‑raiser takeaways**  
I demonstrated ownership by defining clear success metrics, dove deep into HBase’s concurrency controls, quantified impact with latency and cost numbers, and learned from a failed batch migration that prompted the switch to streaming.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
