---
qid: ing_9b935f9d7a__aws__local
question: 'Explain: Remove a node from an Elasticsearch cluster'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 431
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:16:52-05:00'
sources: []
---

**Situation & Task**  
I was the owner of a production search platform on an Amazon‑managed Elasticsearch cluster (7 m nodes) that served a global e‑commerce site. One node had become CPU‑thrashing after a recent data ingestion spike, threatening query latency and SLA violations.

**Action**  
1. **Customer Obsession / Ownership** – I logged the incident in OpsGenie, notified stakeholders, and set up a live dashboard (Grafana + CloudWatch) to monitor impact.  
2. **Dive Deep & Bias for Action** – Using the *elasticsearch‑api* I fetched node stats (`/_cluster/health`, `/_nodes/stats`) to confirm CPU > 90 % and memory fragmentation.  
3. I issued a graceful decommission command:  
   ```bash
   POST /_cluster/voting_config_exclusions?node=NODE_ID
   POST /_cat/shards?v&h=index,shard,node,prirep,state,unassigned.reason
   ```
   then drained shards with `/_cluster/reroute` (force‑move).  
4. I removed the instance from the Auto Scaling group and terminated it via EC2 API.  
5. **Deliver Results** – Shards rebalanced within 3 minutes; query latency dropped from 250 ms to 120 ms (–52 %). Cost savings: $0.12/h per node, projected $90/month.

**Result & Learning**  
The cluster remained >99.9 % available, and I automated the decommission script in CI/CD (GitHub Actions → Terraform). Post‑mortem revealed that pre‑emptive shard allocation settings were misconfigured; I added a CloudWatch alarm to trigger auto‑scaling when CPU > 80 %. This reduced manual intervention by 70 % for future incidents.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
