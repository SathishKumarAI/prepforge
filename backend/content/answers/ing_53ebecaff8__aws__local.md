---
qid: ing_53ebecaff8__aws__local
question: 'Explain: Mapping metadata in the cluster state — Size your shards | Elastic
  Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 554
total_tokens: 789
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:34:37-05:00'
sources: []
---

**Customer Obsession + Ownership**

> *Situation:*  
> At my last role I led a migration of 5 TB of log data from an on‑prem ELK stack to Amazon OpenSearch Service (OSS). The business required real‑time analytics for compliance, so latency had to stay under **200 ms** per query while keeping cost below $2k/month.

> *Task:*  
> I was responsible for designing the shard strategy and mapping metadata so that the cluster could ingest ~30k events/sec without exceeding storage limits or hitting performance bottlenecks.

> *Action:*  
1. **Dive Deep into Mapping Metadata** – I audited every field, removing unused keys, converting high‑cardinality string fields to `keyword`, and normalizing date formats to UTC ISO‑8601.  
2. **Shard Sizing Calculation** – Using OpenSearch’s recommendation formula (`size = (index_size / 50 GB) * 3`), I projected a 6‑node cluster with **30 GB** of primary data per node, giving ~180 GB total.  
3. **AWS Services & Trade‑offs** –  
   - **Amazon OpenSearch Service** for fully managed scaling and snapshots.  
   - **EBS gp3 volumes (50 GB)** for cost‑effective throughput; I enabled burst credits to cover 30k events/sec spikes.  
   - Configured *index lifecycle policies* to rollover after 500 GB, keeping indices small (~10–12 GB) for fast search.  
4. **Monitoring & Iteration** – Implemented CloudWatch metrics (search latency, CPU, I/O). After the first week, I reduced shard count from 3 to 2 per node, cutting cost by **15%** while maintaining <200 ms latency.

> *Result:*  
> The new design handled 35k events/sec with **average search latency of 145 ms**, kept monthly spend at **$1.7k**, and the client reported a 40% improvement in compliance reporting turnaround. I documented lessons learned, highlighting that aggressive mapping pruning and shard sizing drive both performance and cost—key for any AWS‑based search solution.

**Bar‑raiser cues:**  
- Ownership: led end‑to‑end migration.  
- Dive Deep: meticulous field audit & shard math.  
- Quantified Impact: latency <200 ms, 15% cost savings.  
- Learning from failure: iterated after live monitoring to refine shard count.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
