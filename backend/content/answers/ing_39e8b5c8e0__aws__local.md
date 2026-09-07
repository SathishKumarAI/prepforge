---
qid: ing_39e8b5c8e0__aws__local
question: 'Explain: Getting Started — Welcome to Apache Solr - Apache Solr'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 535
total_tokens: 769
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:37:16-05:00'
sources: []
---

**Situation & Task**  
I was hired by a startup that needed instant, typo‑tolerant search for its e‑commerce catalog of 3 M SKUs. The product team asked me to prototype quickly using an open‑source engine—Apache Solr.

**Action (Technical Design)**  
1. **Requirements Clarification** – We defined: real‑time indexing, multi‑tenant schema, 99.9 % availability, and <200 ms query latency for 95 % of traffic.  
2. **Architecture** – Deployed a **SolrCloud** cluster on **Amazon EC2 (t3.large)** with **Elastic Block Store (EBS) gp3** for fast SSD I/O. Used **Auto Scaling Groups** to spin up nodes during flash sales, and **Amazon Route 53 health checks** for failover.  
3. **Data Model** – Designed a single core with *dynamic fields* for product attributes; enabled *schema auto‑update* via Solr’s REST API. Added *copyField* directives for full‑text search across name, description, and tags.  
4. **Indexing Pipeline** – Built an AWS Lambda that triggers on S3 object uploads, transforms JSON to Solr schema, and posts to the cluster using the **SolrJ** client (Java SDK). This achieved near‑real‑time indexing (~2 s per batch).  
5. **Scaling & Cost** – Leveraged **Spot Instances** for non‑critical nodes, reducing compute spend by 40 %. Implemented **Solr’s sharding** (8 shards) and **replication factor 3** to meet availability goals.

**Result**  
- Query latency dropped from 1.2 s to 180 ms (95 % percentile).  
- Indexing throughput increased to 15k docs/sec, enabling daily catalog refreshes.  
- Cost per query fell from $0.08 to $0.02, saving ~$12K/month.

**Learning & Ownership**  
I documented the full deployment in a Terraform module, exposing it as an internal IaC service. After a mid‑night outage caused by a mis‑configured health check, I added automated health‑check scripts and improved alerting—an example of *Ownership* and *Bias for Action*.  

> **Leadership Principles**: Ownership, Dive Deep (architecture & metrics), Deliver Results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
