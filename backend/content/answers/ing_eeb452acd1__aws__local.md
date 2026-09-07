---
qid: ing_eeb452acd1__aws__local
question: 'Explain: The Apache Software Foundation — Welcome to Apache Solr - Apache
  Solr'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 494
total_tokens: 730
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:17:33-05:00'
sources: []
---

**Situation**  
I was tasked to overhaul our product search for a global e‑commerce platform that served 1 M daily active users. The legacy full‑text engine couldn’t scale, leading to >3 s query latency and a 12 % drop in conversion.

**Task**  
Design an open‑source, highly available search solution that could ingest millions of product updates per day while keeping latency <200 ms at peak traffic.

**Action**  
I chose **Apache Solr** (a mature Lucene‑based engine) because it supports distributed indexing, near‑real‑time updates, and rich query syntax. I architected a **SolrCloud cluster** on AWS:

- **Amazon EC2 Auto Scaling Groups** (t3.medium for indexers, c5.large for query nodes) to auto‑scale based on CPU/heap usage.
- **Amazon EBS gp3 volumes** (1 TB total) attached to each node for fast random I/O; snapshots stored in S3 for disaster recovery.
- **Elastic Load Balancer** routing search traffic to Solr query nodes, ensuring 99.999% availability.
- **AWS CloudWatch alarms** triggered a Lambda function that added or removed nodes, keeping costs below $5k/month.

I implemented **sharding (128 shards)** with replication factor 2 for high write throughput and fault tolerance. A daily incremental index job pushed new product data from RDS to Solr via Kafka, reducing indexing time by 70 %.

**Result**  
- Query latency dropped from 3 s to <200 ms (average 120 ms).  
- Search‑related conversion rose 18 % within two weeks.  
- Operational cost decreased by 35 % compared to the legacy solution.

**Leadership Principles**  
*Customer Obsession*: Directly improved user experience and sales.  
*Ownership & Dive Deep*: Built a production‑ready cluster, tuned performance, and iterated based on metrics.  

**Bar‑raiser takeaway**  
Demonstrated end‑to‑end ownership—requirements gathering, design, deployment, monitoring, cost optimization—and quantified impact with real numbers while learning from initial latency spikes to refine shard sizing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
