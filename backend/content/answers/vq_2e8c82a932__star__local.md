---
qid: vq_2e8c82a932__star__local
question: What are the destination types allowed in Sqoop Import command?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 368
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:53:50-05:00'
sources: []
---

**Situation:**  
During a migration project for our e‑commerce analytics team, we had to pull nightly sales data from an on‑prem Oracle database into the Hadoop ecosystem. The data was needed in multiple downstream systems: raw storage, structured tables for BI, and real‑time dashboards.

**Task:**  
I had to design a Sqoop import pipeline that could load the same source table into three different destinations—HDFS, Hive, and HBase—while ensuring schema consistency and minimal downtime.

**Action:**  
I used `sqoop-import` with the `--target-dir`, `--hive-import`, and `--hbase-table` options. For HDFS I specified a partitioned directory structure (`/sales/raw/year=YYYY/month=MM/day=DD`). For Hive, I leveraged `--create-hive-table` to auto‑generate the schema and added `--hive-overwrite` for nightly refreshes. Finally, for HBase I mapped columns to column families using `--hbase-column-family` and a composite key strategy. I also scripted conditional checks to skip import if the source table size had not changed.

**Result:**  
The pipeline processed 2 million rows in under 12 minutes each night, with 99.9% data fidelity across all three destinations. The team could now run batch reports from Hive and serve near‑real‑time queries via HBase, while raw logs stayed safely in HDFS for archival. I learned how to balance performance, consistency, and flexibility when choosing Sqoop destination types.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
