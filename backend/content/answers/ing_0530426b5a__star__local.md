---
qid: ing_0530426b5a__star__local
question: 'Explain: Simple Coherency Model — HDFS Architecture Guide'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 413
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:39:13-05:00'
sources: []
---

**Situation** – During a recent data‑engineering interview I was asked to explain the Simple Coherency Model in HDFS. The interviewer wanted to see if I could translate the theoretical part of the HDFS Architecture Guide into something concrete and understandable for someone who hasn’t read the guide.

**Task** – My goal was to describe how HDFS keeps file blocks consistent across NameNodes and DataNodes, what guarantees it offers, and why those guarantees matter for large‑scale analytics jobs.

**Action** – I started by framing HDFS as a master–slave system: one primary NameNode holds the namespace metadata while several secondary NameNodes replicate its state. I then walked through block replication: each file is split into 128 MB blocks (configurable), and replicas are stored on at least three DataNodes, spread across racks to avoid single points of failure. For coherency, I explained that HDFS follows a *write‑once, read‑many* model—once a block is written it never changes. During the write path, the client obtains a lease from the NameNode, writes the block to a chosen DataNode, and only after the DataNode acknowledges receipt does the NameNode commit the block’s location in its metadata. This guarantees *strong consistency* for reads: any read operation will see the most recent completed write because the NameNode’s namespace is authoritative.

**Result** – The interviewer nodded, confirming that I had captured the core of the Simple Coherency Model. I also highlighted that this design trades off real‑time updates for high throughput and fault tolerance—exactly what HDFS needs for big data workloads. This exercise reinforced my own understanding of how metadata coordination underpins HDFS reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
