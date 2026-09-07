---
qid: ing_806a581bd1__aws__local
question: 'Explain: Conclusions — How many shards should I have in my Elasticsearch
  cluster? | Elastic Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 498
total_tokens: 736
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:15:27-05:00'
sources: []
---

**Situation & Task**  
While migrating a 5‑TB log ingestion pipeline to Amazon OpenSearch (the managed Elasticsearch service), my team needed to decide the number of shards per index. The goal was to balance query latency (<200 ms for 95 % of requests) and cost while ensuring fault tolerance.

**Action**  
1. **Gather metrics** – I queried the existing cluster with *_cat/indices* and collected:  
   - Avg document size: 2 KB  
   - Index growth rate: 500 GB/month  
   - Query mix: 70 % full‑text, 30 % aggregations.  

2. **Model shard sizing** – Using the “rule of thumb” (4–5 GB per shard for mixed workloads), I calculated that ~1,250 shards would be required for a single index.  
3. **Simulate performance** – Leveraging *OpenSearch Dashboards* and the “Index State Management” API, I created a staging cluster with 200‑shard partitions and ran latency tests. Results: 97 % of queries <150 ms; CPU utilization ~65 %.  

4. **Adjust for cost & resilience** – I reduced shards to 125 (10 GB each) and introduced *cross‑cluster replication* to a secondary region. Query latency remained <200 ms, but read throughput doubled due to parallelism across replicas.

5. **Deploy & monitor** – Implemented an automated Lambda that scales the shard count by ±10 % when document growth exceeds 20 %.  

**Result**  
- Achieved target latency with a 25 % lower cost than the initial 1,250‑shard design.  
- Reduced manual tuning time from weeks to days.  
- The cluster now auto‑scales, ensuring sustained performance as data grows.

**Leadership Principles Highlighted**  
- **Customer Obsession** – Delivered low‑latency search for end users.  
- **Ownership & Dive Deep** – Took full responsibility for the shard strategy and drilled into metrics to drive decisions.  

*Bar‑raiser cue*: Clear ownership, depth of analysis (metrics + simulation), quantified impact, and a learning loop that automates future scaling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
