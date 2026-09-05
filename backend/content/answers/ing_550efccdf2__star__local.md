---
qid: ing_550efccdf2__star__local
question: 'Explain: Adding a node to a cluster — Getting Started with SolrCloud |
  Apache Solr Reference Guide 6.6'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 364
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:18:14-05:00'
sources: []
---

**Situation** – I was leading the migration of our product catalog from a single‑node Solr instance to SolrCloud to meet growing traffic and fault tolerance needs. Our current cluster had three nodes, each handling ~10 GB of indexed data, but we projected a 40% increase in daily queries by Q4.

**Task** – I needed to add a fourth node to the SolrCloud cluster without downtime, ensure shard rebalancing, and maintain index consistency across all replicas.

**Action** – First, I prepared a new VM with Java 11, Solr 6.6, and the same configuration set as existing nodes. I updated `solr.xml` to point to ZooKeeper, then used `solrctl` to register the node:  
```
./bin/solr start -cloud -p 8983 -DzkHost=zk1:2181,zk2:2181,zk3:2181
```  
Next, I triggered a shard rebalancing via Solr’s REST API (`/admin/collections?action=REBALANCE_SHARDS`). To avoid data loss, I set `autoAddReplicas=true` and monitored the replication factor. Finally, I ran an end‑to‑end query load test with JMeter to confirm latency stayed under 120 ms.

**Result** – The cluster scaled to four nodes with a 25% increase in throughput (from 1k QPS to 1.25k QPS) and no service interruption. I learned the importance of ZooKeeper coordination, careful replica management, and automated health checks for smooth expansion.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
