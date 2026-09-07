---
qid: ing_cfe330d7b0__aws__local
question: 'Explain: Sharding in ES Cluster'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 413
total_tokens: 640
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:10:52-05:00'
sources: []
---

**Situation / Task**  
While leading the search platform for a global e‑commerce site, we hit a performance wall: query latency climbed to 300 ms on peak traffic (10k QPS) and the single‑node cluster couldn’t ingest new catalog data without downtime.

**Action**  
I owned the redesign, diving deep into Elasticsearch internals. I split the index into **shards**—small, independently searchable partitions—and deployed a 12‑node cluster (3 primary + 1 replica per shard). Leveraging **AWS EKS + Elastic Cloud on AWS**, I automated scaling with `Cluster Autoscaler` and used **Amazon OpenSearch Service** for managed backups. I also added **index lifecycle policies** to roll over hot shards every week, keeping them under 50 GB for fast access.

Key decisions:  
- *Shard size*: 30 GB (optimal per ES docs) → 40 primary shards total.  
- *Replication factor*: 1 → 2x data durability, no read bottleneck.  
- *Hardware*: m5.large instances; cost ≈ $0.096/hr ×12 = $1.15/day vs. previous $4/day.  

**Result**  
Latency dropped to **<80 ms** (−73%); throughput rose to 25k QPS (+150%). The cluster now self‑heals on node failure with no service interruption, meeting SLA 99.9%. I documented the architecture in a playbook that reduced onboarding time by 40%.

**Reflection**  
I learned that sharding isn’t just about scaling; it’s also about operational resilience and cost control. Future iterations will experiment with *shard rebalancing* using ILM to further trim storage costs.  

> **Leadership Principles:** Ownership, Dive Deep, Deliver Results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
