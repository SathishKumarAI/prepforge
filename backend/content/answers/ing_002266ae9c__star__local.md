---
qid: ing_002266ae9c__star__local
question: 'Explain: Index Maintenance — Production Rag At Scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 370
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:28:47-05:00'
sources: []
---

**Situation:**  
At my previous company we built a real‑time recommendation engine that pulled user interactions from our data lake and served personalized content to millions of users each day. The system relied on an inverted index stored in Elasticsearch; by the time we hit 200 million documents, search latency had climbed to 350 ms, violating our SLA.

**Task:**  
I was tasked with restoring sub‑100 ms query performance while keeping the index available for writes and avoiding a costly rebuild during peak traffic.

**Action:**  
1. **Shard rebalancing:** I scripted a rolling migration of shards across nodes, using the `_reindex` API with `shard_size=2000` to keep hot shards isolated.  
2. **Index template tuning:** Adjusted `refresh_interval` from 30 s to 5 s for real‑time ingestion and lowered `merge.policy.max_merge_at_once` to reduce background merge contention.  
3. **Segment pruning:** Leveraged the `delete_by_query` API with a TTL on stale documents, then executed `forceMerge` nightly to keep segments small.  
4. **Monitoring & alerts:** Implemented Grafana dashboards tracking `search_latency`, `segments_count`, and `disk_usage`; set up PagerDuty alerts for thresholds.

**Result:**  
Query latency dropped from 350 ms to 78 ms, with a 40% reduction in segment count and 25% lower disk usage. The system handled 2× the traffic without downtime, and I learned that proactive shard management coupled with smart merge policies can keep large indices performant without full rebuilds.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
