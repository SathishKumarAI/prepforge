---
qid: ing_5a458017fc__aws__local
question: 'Explain: Level Up — Welcome to Apache Solr - Apache Solr'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 610
total_tokens: 844
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:49:49-05:00'
sources: []
---

**Situation & Task**  
During my last project I was tasked with boosting search relevance for a large e‑commerce catalog (≈ 15 M SKUs). The team decided to migrate from an in‑house Lucene‑based engine to **Apache Solr** on AWS, aiming to support real‑time personalization using ML‑generated ranking signals.  

**Action – Technical Design**  
1. **Architecture** – Deployed a **SolrCloud** cluster (3 shards × 2 replicas) behind an Application Load Balancer, with nodes running on **m5.large** instances for compute‑intensive scoring and **EBS gp3** for fast I/O.  
2. **ML Integration** – Exported Solr query logs to Kinesis Data Streams → Lambda → SageMaker endpoint that predicts a *relevance score* per query‑product pair. The Lambda writes back the score as a `user_score` field via Solr’s JSON update API.  
3. **Indexing & Schema** – Leveraged Solr’s *copyField* to keep raw text and stemmed tokens; used *function queries* (`sum`, `pow`) to blend ML scores with BM25 in the `score()` function, enabling on‑the‑fly re‑ranking without re‑indexing.  
4. **Scalability & Availability** – Employed Solr’s built‑in sharding for horizontal scaling; enabled automatic failover via ZooKeeper ensemble running on separate R5 instances.  
5. **Cost Control** – Applied Spot Instances for indexers and reserved instances for query nodes, achieving a 35 % cost reduction vs. all‑on‑demand baseline.

**Result (Dive Deep)**  
- Click‑through rate (CTR) rose from **3.2 % to 6.8 %** within 90 days—doubling revenue per search session.  
- Query latency stayed under **120 ms** for 99th percentile, meeting SLAs.  
- The ML pipeline processed **> 1M predictions/day**, with Lambda concurrency throttling tuned to avoid over‑provisioning.

**Leadership Principles**  
- **Customer Obsession**: Delivered a faster, more relevant search experience that directly increased customer engagement.  
- **Ownership & Bias for Action**: Took full responsibility for end‑to‑end design, from Solr configuration to ML inference integration, and iterated rapidly based on real‑time metrics.

**Bar‑raiser Takeaway**  
I demonstrated ownership by architecting a fault‑tolerant, cost‑effective solution; I dove deep into Solr’s scoring mechanics and AWS services; I quantified impact with clear metrics; and I learned from early latency spikes—shifting from on‑disk to SSD storage—and applied that knowledge immediately.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
