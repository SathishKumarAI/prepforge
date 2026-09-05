---
qid: ing_d36e30e3ab__star__local
question: How Hadoop works? — data-engineering/ApacheHadoop at main \u00b7 Anshul619/data-engineering
  \u00b7 GitHub
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 258
output_tokens: 373
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:32:18-05:00'
sources: []
---

**Situation**  
In my last role I had to migrate our real‑time ad‑click logs from a single MySQL instance that was choking on write traffic (average latency rose above 300 ms during peak hours). The team needed a scalable storage layer and batch processing engine that could handle terabytes of data nightly without breaking the existing ingestion pipeline.

**Task**  
I was tasked with designing an end‑to‑end Hadoop solution: ingesting the clickstream, storing it reliably on HDFS, and running nightly MapReduce jobs to generate daily user‑segment reports in under two hours.

**Action**  
First I set up a 10‑node Hadoop cluster (HDFS + YARN) on our private cloud, configuring NameNodes with HA and adding rack awareness for fault tolerance. For ingestion I used Flume agents streaming the click logs into HDFS via a Kafka topic, ensuring exactly‑once delivery by checkpointing offsets in ZooKeeper. The data was partitioned by date and hour to optimize MapReduce locality. I wrote a MapReduce job that parsed the JSON payloads, aggregated per user, and wrote Parquet files back to HDFS for columnar compression. Finally, I scheduled the job with Oozie and monitored it through Ambari.

**Result**  
The new pipeline processed 5 TB of logs nightly in ~90 minutes, reducing query latency on our BI dashboards from 10 minutes to under a minute. Storage costs dropped by 40% thanks to Parquet compression, and the system now tolerates up to two simultaneous node failures without downtime. I learned how HDFS’s block replication and YARN’s container scheduling work together to deliver both reliability and scalability in a data‑engineering context.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
