---
qid: ing_e4cb1e0186__aws__local
question: 'Explain: Add enough nodes to stay within the cluster shard limits'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 485
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:55:17-05:00'
sources: []
---

**Situation & Task**  
While expanding our search service (OpenSearch) for a new product line, we hit the *shard‑per‑node* ceiling—each node can host only ~30 shards before performance degrades. The goal was to keep queries <200 ms while staying under the shard limit.

**Action**  
1. **Dive Deep into Metrics** – Collected `cluster.stats` and `nodes.stats` via CloudWatch, noting a 28‑shard average per node with CPU at 65 % and disk I/O at 70 %.  
2. **Design Horizontal Scaling** – Deployed an *Auto‑Scaling Group* of OpenSearch nodes (t3.medium) behind an Application Load Balancer, adding one node whenever the average shards/node exceeded 25 or CPU > 60 %.  
3. **Leverage AWS Services** – Used Amazon OpenSearch Service for managed cluster control, CloudWatch Alarms to trigger scaling, and S3 lifecycle policies to archive cold indices.  
4. **Cost & Availability Trade‑off** – Added nodes in a single AZ initially; after stability tests we spread them across two AZs for 99.9 % availability while keeping cost within the $0.12/hr per node budget.

**Result**  
- Shard count stayed ≤27 per node, query latency dropped from 350 ms to **190 ms** (30 % improvement).  
- Auto‑scaling added 3 nodes during peak traffic, reducing manual ops by **90 %** and saving ~$200/month on idle capacity.  

**Learnings & Ownership**  
Tried a “shard‑per-node” fix via reindexing first; it failed to meet latency goals. Pivoted quickly, demonstrating *Bias for Action* and *Ownership*. The solution remains modular, allowing future expansion without hitting shard limits again.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
