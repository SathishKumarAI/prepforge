---
qid: vq_83f4d43751__eli5__local
question: Why hdfs is not used by hive metastore for storage?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 205
total_tokens: 366
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:18:24-05:00'
sources: []
---

Think of a library that keeps a catalog (the *metastore*) and the books themselves in shelves (HDFS). The catalog is a tiny, fast‑access database—just a few tables with text and numbers. It needs to be read and written very quickly, often by many users at once, and it must survive crashes without losing data. HDFS is built for large, sequential files that are written once and read many times; it’s not designed for the tiny, frequent updates that a catalog requires.

So Hive stores its metastore in a lightweight relational database (like MySQL or PostgreSQL). That database can lock rows, run transactions, and answer “who owns this table?” instantly—exactly what the catalog needs. The heavy books stay on HDFS where they belong. This separation keeps the catalog snappy while letting HDFS handle big data files.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
