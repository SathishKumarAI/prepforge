---
qid: vq_4090e1b716__fp__local
question: Is the data structured, semi-structured, or unstructured?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 332
total_tokens: 505
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:32:15-05:00'
sources: []
---

**Why we classify data that way**

At its core, a dataset is a *mapping* from an identifier (row key) to a set of values.  
When the mapping has a fixed schema—every row must contain the same columns in the same order—we get **structured data**. The schema acts like a contract: it guarantees that any query can be compiled into a deterministic plan, which is why relational databases thrive on it.

If the mapping allows optional or variable fields but still preserves a clear hierarchy (e.g., JSON objects with nested key‑value pairs), we call it **semi‑structured**. Here the schema is *latent*: the database must infer column names and types at query time, which leads to flexible joins and aggregations but also to higher parsing overhead.

When there is no recognizable key–value pattern—think raw audio, video, or free‑text documents—the data is **unstructured**. The only way to extract useful information is through *feature extraction* (e.g., embeddings), turning the raw stream into a structured representation before it can be queried.

**Non‑obvious insight**  
Semi‑structured data sits at the *boundary of structure*. Its performance hinges on how efficiently we can *discover* and *cache* the latent schema. A well‑designed inference engine that learns column types incrementally turns a semi‑structured store into a quasi‑relational system, blurring the line between structured and unstructured in practice.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
