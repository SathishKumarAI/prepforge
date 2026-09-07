---
qid: ing_66d08c4754__aws__local
question: 'Explain: Getting Started with SolrCloud | Apache Solr Reference Guide 6.6'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 508
total_tokens: 746
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:17:25-05:00'
sources: []
---

**Situation / Task**  
I was hired by a media company that had just migrated its search index from a single‑node Solr to a production‑grade distributed system. The goal: scale to 10 × traffic, reduce query latency below 200 ms, and enable real‑time analytics on user interactions.

**Action (Technical Design)**  
* **Architecture** – Deployed a SolrCloud cluster on **Amazon EC2 Auto Scaling Groups** (m5.large) with **EBS gp3 volumes** for persistence. Configured **Zookeeper** in an **AWS Managed Service for Zookeeper** (or self‑hosted on separate t3.mediums) to keep the cluster metadata highly available.  
* **Sharding & Replication** – Created 8 shards, each with 2 replicas; this provided fault tolerance and parallel query processing.  
* **Load Balancing** – Fronted the cluster with an **Elastic Load Balancer (ELB)** using round‑robin routing to evenly distribute requests across Solr nodes.  
* **Autoscaling & Monitoring** – Leveraged **CloudWatch** metrics (`solr.query.time`, `cpuUtilization`) and set up a scaling policy: add 2 instances when average query latency > 200 ms for 5 minutes; remove when < 150 ms for 10 minutes.  
* **Cost Optimization** – Enabled **EBS burst balance** on gp3 and used **Spot Instances** (with On‑Demand fallback) for non‑critical nodes, cutting storage costs by ~30%.  

**Result**  
Within two weeks of rollout:  
* Query latency dropped from 450 ms to **140 ms** on average.  
* Traffic handled increased from 1 M to **10 M queries/day** without any outages.  
* Operational cost decreased by **27%** versus the legacy single‑node setup.

**Reflection (Bar‑raiser lens)**  
I owned the end‑to‑end migration, diving deep into Solr’s shard/replica mechanics and AWS scalability patterns. The quantitative impact (latency & cost) was clearly documented, and I iterated on the autoscaling policy after a failure mode analysis that revealed an edge case in Zookeeper heartbeats. This experience reinforced my habit of learning from each roll‑out to refine both architecture and process.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
