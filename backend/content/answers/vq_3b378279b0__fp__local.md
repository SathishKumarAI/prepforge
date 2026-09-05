---
qid: vq_3b378279b0__fp__local
question: How can you import large objects like BLOB and CLOB in sqoop?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 549
total_tokens: 725
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:31:32-05:00'
sources: []
---

**Why BLOB/CLOB needs special treatment**

A BLOB or CLOB can be gigabytes large while a typical Sqoop job reads rows one by one into memory, serialises them to HDFS and writes the whole record as a single Avro/Parquet row. If we naïvely load such columns, the JVM quickly exhausts heap space and the network becomes saturated. The problem is *streaming*: we must pull bytes directly from the database and push them to HDFS without buffering the entire object.

**How Sqoop solves it**

| DB | Strategy |
|---|---|
| MySQL, PostgreSQL, Oracle (via native driver) | `--direct` option: Sqoop bypasses JDBC’s ResultSet conversion and uses the vendor’s binary protocol. The driver returns a `Blob`/`Clob` as an `InputStream`; Sqoop streams this stream straight into the Hadoop output file. |
| Others or when `--direct` is unavailable | Use `--fetch-size 0` (or large) so the JDBC driver does not pre‑fetch rows; combine with `--split-by` to keep each mapper’s portion small. Then manually read the BLOB/CLOB via `ResultSet.getBinaryStream()` and write it in chunks. |

**Deeper principle**

This is a classic *streaming optimisation*: minimize memory footprint by keeping only a small window of data in RAM while transferring large byte streams between two systems. It leverages I/O back‑pressure to keep the producer (DB) and consumer (HDFS) in sync.

**Non‑obvious insight**

Most people forget that `--direct` is not a generic “big object” flag—it only works on databases whose native protocol supports streaming blobs. For others, you must explicitly set a large fetch size **and** use `InputStream` reads; otherwise Sqoop will still buffer the whole column in memory, defeating the purpose.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
