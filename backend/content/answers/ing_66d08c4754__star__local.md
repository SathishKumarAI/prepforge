---
qid: ing_66d08c4754__star__local
question: 'Explain: Getting Started with SolrCloud | Apache Solr Reference Guide 6.6'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 380
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:53:31-05:00'
sources: []
---

**Situation:**  
When I joined a SaaS startup, our search feature was running on a single‑node Solr instance that couldn’t scale with the 10 M daily queries we were hitting during peak hours. The engineering team needed a highly available, horizontally scalable solution.

**Task:**  
My goal was to set up a production‑ready SolrCloud cluster, configure data sharding and replication, and get our search latency below 200 ms for 99 % of requests within the first month.

**Action:**  
I began by provisioning a ZooKeeper ensemble (3 nodes) on AWS EKS to handle cluster coordination. Then I created a SolrCloud core with 4 shards and 2 replicas each, using Solr’s “auto‑sharding” feature to balance load automatically. I scripted the deployment with Ansible, ensuring that each Solr node had consistent schema.xml and solrconfig.xml files. For indexing, I leveraged Solr’s bulk API and set up a nightly job that used Kafka streams to push new documents into the cluster in near real‑time. To monitor performance, I integrated Prometheus metrics (qps, latency, heap usage) and set alerts for any shard lagging behind.

**Result:**  
Within two weeks, search latency dropped from 650 ms average to 180 ms, with a 99.8 % success rate under peak load. The cluster handled a 300 % traffic increase without any downtime. I learned that careful ZooKeeper tuning and regular shard rebalancing are critical for maintaining stability in SolrCloud deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
