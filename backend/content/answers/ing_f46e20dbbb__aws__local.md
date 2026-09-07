---
qid: ing_f46e20dbbb__aws__local
question: 'Explain: Avoid node hotspots — Size your shards | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 488
total_tokens: 720
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:29:17-05:00'
sources: []
---

**Scenario (S):**  
While leading a data‑science team for a recommendation engine, we noticed that one shard of our Elasticsearch cluster was consistently the slowest, causing 3 % of all user requests to time out.

**Task (T):**  
I had to eliminate the hotspot without disrupting production or inflating costs.

**Action (A):**  

1. **Dive Deep & Ownership:**  
   * Ran `cat.shards` and `searchable_snapshots` to confirm that hot shard held ~70 % of traffic for a single product category.  
   * Checked mapping: the index had 30 M documents with a single “category” field that was heavily queried.

2. **Design & AWS Services:**  
   * Introduced **shard re‑partitioning** by adding an additional hash key (`user_id`) to the routing field, creating a two‑dimensional shard key: `category + user_id`.  
   * Deployed this change via a rolling index migration using **AWS OpenSearch Service** (managed Elasticsearch) and leveraged **Index Lifecycle Management (ILM)** for automated rollover.  

3. **Scalability & Cost:**  
   * The new shard distribution reduced per‑shard document count by 60 %, lowering query latency from 350 ms to <80 ms.  
   * Added only one extra data node, keeping the overall cluster size unchanged; monthly spend stayed within the 5 % budget cap.

4. **Bias for Action & Deliver Results:**  
   * Implemented monitoring dashboards in CloudWatch; set alerts for shard latency >100 ms.  
   * Within two days of rollout, hotspot queries dropped to <1 %, and overall request success rate improved from 97 % to 99.8 %.

**Result (R):**  
By re‑sharding the index, we cut average query latency by **78 %**, reduced timeouts by **90 %**, and maintained cost parity—demonstrating ownership, deep technical insight, and measurable impact.

> *Bar‑raiser focus:* Ownership of data pipelines, depth in diagnosing shard imbalance, quantitative ROI, and learning loop (automated monitoring for future hotspots).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
