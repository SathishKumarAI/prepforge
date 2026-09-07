---
qid: ing_63933b912e__aws__local
question: 'Explain: Adding master-eligible nodes — Add and Remove Elasticsearch nodes
  | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 447
total_tokens: 683
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:10:16-05:00'
sources: []
---

**Situation (S)**  
At my previous company we migrated a production search layer from on‑prem Elasticsearch to Amazon OpenSearch Service. The cluster grew from 3 nodes to 15 over six months, but the master‑eligible pool stayed at 3, causing frequent master elections and degraded query latency during heavy write spikes.

**Task (T)**  
I was tasked with rebalancing the master‑eligible set to improve stability while keeping cost under $5k/month.  

**Action (A)**  
1. **Requirement Clarification:** Master nodes must be *odd* and *highly available*.  
2. **Design & AWS Services:**  
   - Spin up 5 dedicated OpenSearch master instances (t3.large) in a separate Auto Scaling group.  
   - Use **OpenSearch Dashboards** to monitor cluster health; set up CloudWatch alarms for `cluster.routing.allocation.cluster_concurrent_rebalance`.  
   - Configure **ElastiCache Redis** as an external node‑state cache to reduce coordination overhead.  
3. **Scalability/Availability:** With 5 masters, the cluster can tolerate 2 simultaneous failures (quorum = 3). Auto Scaling keeps the pool at optimal size during low traffic, saving ~30% on EC2 costs.  
4. **Cost Trade‑offs:** Added 2 extra master nodes (~$400/month) but avoided costly downtime and reduced query latency by 40%.

**Result (R)**  
After deployment, average search latency dropped from 250 ms to 150 ms during peak writes, and the cluster experienced zero master‑election outages in the first three months.  

> **Leadership Principles:** *Customer Obsession* – delivering a faster, more reliable search experience; *Ownership* – proactively redesigning the architecture and monitoring strategy.  
> **Bar‑raiser cues:** demonstrated ownership, deep dive into failure modes, quantified performance gains, and reflected on lessons learned (e.g., balancing cost vs. availability).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
