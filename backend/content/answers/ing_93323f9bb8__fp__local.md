---
qid: ing_93323f9bb8__fp__local
question: 'Explain: Secondary Indexes - DynamoDB — AWS-Services/1_Databases/AmazonDynamoDB/SecondaryIndexes.md
  at main \u00b7 Anshul619/AWS-Services \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 208
output_tokens: 332
total_tokens: 540
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:18:18-05:00'
sources: []
---

**Why Secondary Indexes?**  
A DynamoDB table is a *partition‑key* (and optionally a *sort key*) index. Every query must know that key pair; otherwise it would need to scan the entire table—a linear, expensive operation. A secondary index gives the database an alternative “road map” so that queries can target a different attribute without scanning.

**How they work**  
When you create a **global secondary index (GSI)** or a **local secondary index (LSI)**, DynamoDB builds a separate key schema: a new partition key (and optional sort key). Behind the scenes it materialises a *shadow table* that stores only the indexed attributes plus the primary key of the original row. Writes to the base table trigger asynchronous replication into each shadow table; reads hit the appropriate shadow table and return results in O(log N) time, just like the primary index.

**Fundamental principle – “denormalisation for speed”**  
The cost of maintaining these shadow tables is the price paid for logarithmic lookup time. This trades extra storage (and write amplification) against query latency, embodying a classic *space–time* optimisation: more space → less time.

**Non‑obvious insight**  
Because each GSI can specify *different read/write capacities*, you can give a hot index its own throughput budget while keeping the base table cheap. This decouples traffic patterns and lets a single table serve multiple access patterns without costly re‑architecting.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
