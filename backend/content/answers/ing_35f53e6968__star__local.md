---
qid: ing_35f53e6968__star__local
question: 'Explain: 👎 Disadvantages — data-engineering/ApacheHadoop at main \u00b7
  Anshul619/data-engineering \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 260
output_tokens: 419
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:16:11-05:00'
sources: []
---

**Situation:**  
While leading a migration project for a retail chain’s sales analytics platform, we had to move from an on‑premise relational database to a big‑data stack built around Apache Hadoop. The client expected near‑real‑time reporting and cost savings within six months.

**Task:**  
I was tasked with designing the new data pipeline, ensuring that it could ingest terabytes of daily transaction logs, transform them into a unified schema, and expose metrics for business users—all while keeping operational costs under budget.

**Action:**  
I began by setting up HDFS on an autoscaling cluster in AWS EMR, using YARN to manage resources. To address Hadoop’s batch‑centric nature, I integrated Apache Spark as the processing engine, writing ETL jobs in Scala that ran every 15 minutes. For schema evolution and data quality, I added Avro schemas and leveraged Hive Metastore for table definitions. However, we quickly discovered several pain points:  
1) **Latency:** Even with Spark, the end‑to‑end latency was ~30 minutes, unacceptable for real‑time dashboards.  
2) **Operational overhead:** Tuning YARN memory allocation required frequent manual intervention, and the cluster’s autoscaling lagged behind traffic spikes.  
3) **Cost volatility:** Running a large EMR cluster 24/7 pushed monthly spend to $12k, higher than anticipated.

**Result:**  
We delivered the platform on schedule but realized Hadoop’s batch‑oriented design limited our ability to meet real‑time reporting goals and drove up costs. Consequently, we migrated to a lakehouse architecture using Delta Lake on Databricks, cutting query latency to under 2 minutes and reducing monthly spend by ~35 %. The experience taught me that while Hadoop excels at massive batch ingestion, its operational complexity and latency constraints make it less suitable for near‑real‑time analytics without significant architectural adjustments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
