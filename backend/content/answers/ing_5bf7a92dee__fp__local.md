---
qid: ing_5bf7a92dee__fp__local
question: 'Explain: Create an index | Elasticsearch API documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 481
total_tokens: 650
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:19:37-05:00'
sources: []
---

**Why Elasticsearch needs an “index”**

An *index* is the smallest unit of data that can be searched, filtered or aggregated on a cluster.  
From first principles, think of a database table: it must have a schema (field names and types), storage layout (shards/replicas) and metadata (refresh interval, analyzers).  Without an index you cannot map documents to the inverted‑text structures that power full‑text search.

**How the API builds one**

1. **Endpoint** – `PUT /<index_name>`  
   The HTTP verb `PUT` expresses *idempotent creation*: if the name exists it can be re‑created with new settings; otherwise a brand‑new index is made.

2. **Body** – JSON of three parts  

   | Section | Purpose |
   |---------|---------|
   | `settings` | How many shards/replicas, merge policy, refresh interval. These control *resource allocation* and *latency*. They are part of the optimisation problem: shard count = (total docs / ideal shard size). |
   | `mappings` | Field definitions – data types, analyzers, indexing options. This is the *schema inference* step that converts raw JSON to a trie‑based inverted index. |
   | `aliases` | Optional logical names pointing at one or more indices, enabling zero‑downtime roll‑overs. |

3. **Cluster state update** – The master node validates the body, allocates shards across data nodes, and writes a *persistent* configuration.  
   If any shard allocation fails, Elasticsearch rolls back the entire operation (atomicity), ensuring you never end up with a half‑created index.

**Non‑obvious insight**

The same API that creates an index also *tells the cluster how to trade off write throughput vs query latency*. By adjusting `refresh_interval` and `number_of_replicas`, you are solving a classic optimisation: more replicas → faster reads, fewer shards → lower merge overhead. Most people treat indices as static; in reality they encode the entire *cost function* of your search workload.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
