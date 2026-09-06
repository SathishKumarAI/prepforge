---
qid: vq_00fc0dfb3f__faang__local
question: where does the data of hive table gets stored?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 465
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:54:52-05:00'
sources: []
---

**Clarify**  
You’re asking *where* a Hive table’s underlying data lives once you run `CREATE TABLE …` or `INSERT …`. I’ll assume: (1) the Hive metastore is configured to use HDFS (or an S3‑like object store), (2) we’re not talking about external tables that point elsewhere, and (3) the question concerns storage format (Parquet, ORC, etc.) after execution.  

**Approach**  
1. Explain Hive’s separation of metadata and data.  
2. Describe how the metastore records location.  
3. Note default HDFS path patterns.  
4. Touch on external tables.  

**Depth**  
- **Metadata**: Hive keeps schema, partitioning, serde info in a relational metastore (e.g., MySQL). The table’s *location* is stored as an absolute URI.  
- **Data storage**: By default, the data lands under `/user/hive/warehouse/<table_name>_0.db` in HDFS unless overridden with `LOCATION`. Inside that directory, each partition becomes a sub‑directory (e.g., `dt=2024-09`). Files are written in the table’s file format—Parquet, ORC, TextFile, etc.—and can be compressed.  
- **External tables**: For `EXTERNAL TABLE`, Hive only records the URI you supply; it does not move data into `warehouse`. The data remains wherever you pointed it (e.g., `/data/finance`).  

**Edge Cases**  
- Custom metastore URIs or non‑HDFS storage (S3, Azure Blob).  
- Partitioned tables with dynamic partitions—new directories appear on write.  
- Hive 4+ supports ACID; transaction logs live in `_txn` folders.  

**Optimize & Communicate**  
I’d diagram the flow: `DDL → Metastore record → HDFS path → File format`. Highlight that performance hinges on partition pruning and file size, not just location. Conclude by noting that understanding this separation is key for troubleshooting data lineage or migrating to cloud storage.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
