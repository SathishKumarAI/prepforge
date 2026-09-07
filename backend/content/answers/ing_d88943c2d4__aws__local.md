---
qid: ing_d88943c2d4__aws__local
question: 'Explain: Scaling with Solr — Welcome to Apache Solr - Apache Solr'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 523
total_tokens: 759
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:29:05-05:00'
sources: []
---

**Scenario – Scaling an ML‑enabled search platform with Solr on AWS**

**Situation:**  
Our recommendation engine (built in Python) returned a list of 10,000 products per query to the front‑end. When we added a new “similarity” feature that required re‑scoring every document with a deep learning model, latency spiked from **120 ms → 4 s** and the Solr cluster crashed under peak traffic (3k QPS).

**Task:**  
Re‑architect the search layer to keep <200 ms response time while still supporting real‑time ML scoring for millions of items.

**Action:**  
1. **Partitioned Solr cores by user segment** – 10 shards, each on an **Amazon EC2 Auto Scaling group (m5.large)** with **Elastic Load Balancer** and **CloudWatch alarms** to spin up/down during traffic spikes.  
2. **Off‑loaded ML inference to Amazon SageMaker endpoints** (batch transform) and cached scores in **Amazon ElastiCache for Redis**; Solr only fetched the top‑k scored IDs.  
3. **Implemented a “late‑fusion” pipeline**: Solr returned 1,000 candidate docs → Lambda triggered async scoring → results written back to an SQS queue, then merged with Solr’s ranking via a custom query component.  
4. Used **AWS Cost Explorer** and **X-Ray** to monitor cost per request; achieved a 60 % reduction in EC2 spend while keeping the same throughput.

**Result:**  
- Query latency dropped to **<180 ms** (3× faster).  
- Throughput sustained **5,000 QPS** with zero downtime.  
- Operational costs fell by **$12k/month**.  

**Reflection:**  
Ownership drove us to re‑design the whole pipeline; diving deep into Solr’s sharding and custom query components revealed hidden bottlenecks. We learned that decoupling compute (ML) from search (Solr) can dramatically improve scalability—an insight now applied across all data‑centric services in our portfolio.  

**Leadership Principles:**  
- **Customer Obsession** – deliver lightning‑fast, accurate recommendations.  
- **Ownership & Dive Deep** – re‑architect end‑to‑end for performance and cost efficiency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
