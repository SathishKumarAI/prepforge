---
qid: ing_e539ed1464__star__local
question: 'Explain: Elasticsearch Cluster — Design Spotify | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 443
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:06:15-05:00'
sources: []
---

**Situation:**  
While leading the search‑engineering team at a mid‑size streaming startup, we were tasked with scaling our recommendation engine from handling 5 k concurrent users to 500 k without compromising query latency. Our existing Elasticsearch cluster was a single node; it hit CPU limits and had >200 ms average response time during peak hours.

**Task:**  
Design an elasticsearch architecture that supports high read/write throughput, near‑real‑time indexing of user listening history, and sub‑100 ms search latency for personalized playlists, all while keeping cost under the existing budget.

**Action:**  
I proposed a three‑tier cluster:  
1. **Master‑only nodes (3)** for cluster coordination with dedicated heap (4 GB) to keep discovery fast.  
2. **Data nodes (6)** partitioned by user ID using a custom routing shard strategy, each with 16 GB RAM and SSD storage; we enabled *indexing throttling* and *refresh interval* of 5 s to batch writes.  
3. **Coordinating nodes (4)** in front of the data tier for load balancing and query caching. I added a *dedicated cache node* with 32 GB RAM to hold hot segments for the top 10k users, reducing disk seeks. We also leveraged *fielddata cache limits* and *doc values* on numeric fields to keep memory usage predictable.

I scripted automated scaling via AWS Auto Scaling groups tied to CPU utilization metrics (threshold 70 %) and used Kibana dashboards for real‑time monitoring of shard allocation and query latency.

**Result:**  
After deployment, peak read latency dropped from 200 ms to 65 ms, write throughput increased by 4×, and the cluster handled 450 k concurrent users during a promotional launch. Cost stayed within 12% of the original budget thanks to efficient node sizing. I learned that proactive shard allocation and caching strategies are critical for balancing latency and resource usage in large‑scale recommendation systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
