---
qid: ing_bcda6bb66d__star__local
question: 'Explain: Features — Welcome to Apache Solr - Apache Solr'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 350
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:48:46-05:00'
sources: []
---

**Situation:**  
At my previous company we were building a real‑time product search for an e‑commerce platform that had over 2 million SKUs and needed to serve millions of daily queries with sub‑second latency.

**Task:**  
I was tasked with migrating from our legacy MySQL full‑text engine to a scalable search solution that could handle high query volume, support faceted navigation, and allow us to add new fields without downtime.

**Action:**  
I chose Apache Solr for its robust feature set. First, I used Solr’s **schema.xml** to define dynamic fields (e.g., `price`, `brand`) and leveraged the **copyField** directive so that a single indexed field could be searched across multiple facets. To meet our latency goals, I implemented **sharding** with 4 shards and enabled **replication** for high availability. For relevance tuning, I created custom **boost queries** and used Solr’s **function queries** to weight price proximity in results. Finally, I set up the **SolrJ** client library to perform near real‑time indexing via the **updateHandler**, ensuring new products appeared within 30 seconds.

**Result:**  
The migration cut search latency from ~350 ms to <70 ms and increased query throughput by 4×. Faceted navigation became richer, boosting conversion rates by 12%. I learned that Solr’s flexible schema, sharding/replication model, and powerful query DSL are key to scaling complex search workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
