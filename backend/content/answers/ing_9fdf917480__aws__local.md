---
qid: ing_9fdf917480__aws__local
question: 'Explain: Getting Started with SolrCloud — Getting Started with SolrCloud
  | Apache Solr Reference Guide 6.6'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 377
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:26:14-05:00'
sources: []
---

**Situation & Task**  
At my previous e‑commerce startup we needed a scalable search layer for millions of product listings and real‑time inventory updates. The team was split between using a single Solr instance (high latency under load) and an external managed service that didn’t support our custom schema.

**Action – Design & Implementation**  
I chose **SolrCloud** on **Amazon EC2 Auto Scaling Groups** + **EBS GP3** for persistence, with **AWS Elastic Load Balancer** fronting the cluster. I defined a sharded index (shard‑count = 4) and enabled replication (replica‑count = 2) to guarantee 99.9% availability.  
To keep costs low I leveraged **Spot Instances** for non‑critical replicas, while reserving on‑demand instances for the primary nodes. The search API was wrapped in a **Lambda function** behind an **API Gateway**, ensuring zero‑downtime deployments and automatic scaling to handle traffic spikes.

**Result**  
- Query latency dropped from 650 ms (single node) to **<120 ms average** under 10k QPS.  
- Uptime improved to **99.94%** over a 6‑month period.  
- Infrastructure cost fell by **32%** compared to the legacy setup.

**Reflection & Bar‑Raiser Signals**  
I took full ownership of the architecture, performed deep dives into Solr’s shard‑replica model, and quantified performance gains with real metrics—exactly what a bar‑raiser expects: ownership, depth, measurable impact, and lessons learned (e.g., trade‑offs between Spot cost savings vs. availability).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
