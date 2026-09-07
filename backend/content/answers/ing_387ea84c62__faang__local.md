---
qid: ing_387ea84c62__faang__local
question: 'Explain: Why HBase — Apache HBase'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 477
total_tokens: 709
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:55:38-05:00'
sources: []
---

**Why HBase? – A FAANG‑style explanation**

| Step | What I’d say |
|------|--------------|
| **Clarify** | *Problem*: We need a horizontally scalable, low‑latency key/value store for time‑series or sparse data (e.g., user click logs). *Assumptions*: 1) Data is large enough to spill over single‑node HDFS. 2) Random read/write access is required with sub‑millisecond latency. 3) Schema can evolve and rows are sparsely populated. |
| **Approach** | 1️⃣ Pick a distributed NoSQL store that integrates natively with Hadoop. 2️⃣ Evaluate options (Cassandra, Bigtable, DynamoDB). 3️⃣ Choose HBase for its strong consistency + column‑family model + tight coupling to HDFS. |
| **Depth** | • **Scalability**: Automatic sharding via region servers; linear growth as nodes added. <br>• **Consistency**: Strong read/write guarantees (single‑row atomicity). <br>• **Schema flexibility**: Column families allow sparse data without wasted space. <br>• **Integration**: Native MapReduce/Spark APIs, HDFS storage, and HBase’s binary protocol for low‑overhead RPC. <br>Complexity: O(log N) for row lookups (B+tree index), linear write amplification with compaction. |
| **Edge Cases** | • High write bursts → hot region hotspots; mitigate by pre-splitting or load balancing.<br>• Very small rows (<1 KB) can cause I/O inefficiency; consider batching.<br>• Schema changes across column families may require careful migration to avoid downtime. |
| **Optimize & Communicate** | • Use coprocessors for server‑side filtering, reducing network traffic.<br>• Enable Bloom filters per region to skip disk reads.<br>In interviews I’d narrate: “We chose HBase because it gives us the right trade‑off between strong consistency, horizontal scalability, and Hadoop integration—exactly what our real‑time analytics pipeline demands.” |

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
