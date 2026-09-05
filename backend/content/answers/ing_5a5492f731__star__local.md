---
qid: ing_5a5492f731__star__local
question: 'Explain: Removing master-eligible nodes — Add and Remove Elasticsearch
  nodes | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 392
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:28:23-05:00'
sources: []
---

**Situation:**  
In a fraud‑detection project I was managing an Elasticsearch cluster that stored over 30 GB of transaction logs. The cluster had four data nodes and two dedicated master‑eligible nodes, but the masters were consistently underutilized while the data nodes were overloaded during peak hours.

**Task:**  
I needed to reduce operational costs by removing one of the master‑eligible nodes without compromising cluster stability or query latency, all while keeping data safe for a 12‑month retention policy.

**Action:**  
First I ran `GET _cluster/settings` and confirmed that the cluster still had two master‑eligible nodes (minimum 2). I then executed a rolling restart:  
1. Set `node.master: false` on one master node via its config file, restarted it, and verified it demoted to data node (`GET /_cat/nodes?v`).  
2. Updated the cluster’s allocation awareness with `PUT _cluster/settings` to exclude that node from master elections (`"master_candidate": ["node1","node3"]`).  
3. Used `DELETE _cluster/blocks` to ensure no read/write blocks, and ran a full health check (`GET /_cluster/health?wait_for_status=yellow&timeout=30s`).  
4. Finally removed the demoted node from the deployment (uninstalled ES, cleaned data dir) after confirming all shards were re‑balanced.

**Result:**  
The cluster maintained 99.9 % uptime, query latency dropped by 15%, and we cut infra costs by ~25 %. I learned that careful use of `node.master` flags combined with rolling restarts can safely shrink a master pool while preserving data integrity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
