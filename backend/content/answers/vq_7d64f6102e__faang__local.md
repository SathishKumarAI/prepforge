---
qid: vq_7d64f6102e__faang__local
question: What are the types of metastore available in Hive ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 518
total_tokens: 752
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:19:06-05:00'
sources: []
---

**Clarify**

You’re asking about *Hive metastore* options—where Hive stores table metadata (schema, location, partitions).  
Assumptions: the interviewee is familiar with Hive’s architecture and needs a concise list of storage back‑ends.

---

### 1️⃣ Approach

List each supported metastore type, give a one‑sentence description, then note any caveats or common use cases. Keep it under ~200 words.

---

## Metastore Types in Apache Hive

| # | Metastore | Storage Medium | Key Characteristics |
|---|-----------|----------------|---------------------|
| 1 | **Local (Embedded) Metastore** | H2/Derby DB bundled with Hive | • Fast, single‑node deployment.<br>• Not suitable for multi‑user or HA environments. |
| 2 | **Remote (Standalone) Metastore** | MySQL/PostgreSQL/MySQL‑compatible RDBMS | • Centralized metadata store.<br>• Supports multiple Hive clients and clusters.<br>• Requires network connectivity & admin for scaling. |
| 3 | **Amazon Glue Data Catalog** | Managed AWS service | • Fully managed, scalable, integrates with EMR, Athena, Redshift Spectrum.<br>• Supports cross‑region replication. |
| 4 | **Apache Atlas / HDP Metastore** | HDFS + Hive metastore tables (Hive+Atlas) | • Adds governance, lineage, and metadata enrichment on top of the standard RDBMS store. |
| 5 | **Custom/Plugin Metastores** | Any JDBC‑compliant DB or NoSQL via Hive plug‑in | • Allows integration with proprietary systems (e.g., Oracle, Cassandra). |

---

### Edge Cases & Testing

- **High Availability:** Local metastore fails on node crash → test failover by restarting HiveServer2.
- **Schema Evolution:** Verify that adding columns doesn’t corrupt existing partitions in remote stores.
- **Security:** Ensure Kerberos/SSL is enforced when using remote Metastores.

---

### Optimize & Communicate

Explain why the *remote* (MySQL/PostgreSQL) is the default for production—balanced performance, durability, and multi‑tenant support. Mention Glue as the go‑to in AWS workloads because it eliminates ops overhead. Wrap up by highlighting that choosing a metastore depends on cluster size, governance needs, and cloud strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
