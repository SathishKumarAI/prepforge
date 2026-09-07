---
qid: ing_e114fce77f__aws__local
question: 'Explain: Apache Hadoop — Batch vs Stream Processing - What''s the Difference?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 372
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:48:20-05:00'
sources: []
---

**Answer (Amazon‑style)**  

**Leadership Principles:** *Customer Obsession*, *Dive Deep*.  

**Situation / Task**  
In my last role I led a data‑engineering team that had to migrate an on‑prem Hadoop cluster to AWS while meeting the customer’s SLA of < 1 s for real‑time fraud alerts and batch analytics nightly.  

**Action**  
I mapped “batch” to **Hadoop MapReduce / Amazon EMR + Athena** and “stream” to **Amazon Kinesis Data Streams + Lambda / Glue Streaming**. For batch I designed a partitioned S3 data lake, leveraged EMR Spot for cost control, and scheduled nightly Spark jobs that produced aggregated metrics stored in Redshift (cost ≈ $1k/month).  
For stream I set up Kinesis with 2 shards (capacity 5MB/s) feeding a Lambda function that writes to DynamoDB. The lambda auto‑scales with shard count; we added an Auto Scaling policy to add shards when throttling exceeded 20 %.  

**Result**  
Batch jobs finished 25 % faster and cost 30 % less than the legacy system, while stream processing achieved < 1 s latency for alerts, reducing fraud losses by $120k in the first quarter.  

**Reflection**  
I learned that “batch” is suited for large, scheduled transformations where throughput outweighs latency, whereas “stream” excels when every event must be acted on immediately. The key trade‑off is cost vs. latency; we balanced it by using spot instances for batch and autoscaling shards for stream.  

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
