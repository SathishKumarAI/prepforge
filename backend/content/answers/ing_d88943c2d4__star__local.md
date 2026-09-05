---
qid: ing_d88943c2d4__star__local
question: 'Explain: Scaling with Solr — Welcome to Apache Solr - Apache Solr'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 342
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:41:58-05:00'
sources: []
---

**Situation**  
At a media company, we were ingesting 15 million article records per week into our search platform. The existing Solr cluster of four nodes could only handle ~2 k queries per second; latency spiked to 1.8 s during peak traffic, breaking the SLAs for the editorial team.

**Task**  
Redesign the Solr architecture so that query throughput would double, latency fell below 500 ms under load, and the system remained maintainable without a huge hardware budget.

**Action**  
I first profiled queries with *Solr’s explain* and identified over‑indexed fields causing unnecessary merges. I re‑defined schema: removed multi‑valued string fields, switched to `TrieDoubleField` for numeric ranges, and added a dedicated facet cache. Then I implemented sharding—split the collection into 12 shards across 6 nodes (3 cores per node) using SolrCloud, enabling parallel query execution. For fault tolerance, I set up Zookeeper ensemble with 5 replicas per shard. Finally, I introduced a load‑balancing layer via Nginx and enabled request caching at the client side.

**Result**  
Query throughput rose to ~4 k qps; average latency dropped to 320 ms during traffic peaks. The cluster now supports 30 % more data with only a 25 % increase in infrastructure cost. I learned that thoughtful schema design combined with sharding and caching is the key to scaling Solr efficiently.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
