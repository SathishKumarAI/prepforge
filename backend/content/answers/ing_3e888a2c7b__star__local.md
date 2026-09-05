---
qid: ing_3e888a2c7b__star__local
question: 'Explain: Memory considerations — Sort search results | Elasticsearch Reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 356
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:33:28-05:00'
sources: []
---

**Situation**  
In my last role I built a real‑time recommendation engine on top of Elasticsearch for an e‑commerce platform. The daily traffic hit 1 M queries per hour and each query had to return the top 50 products sorted by relevance plus a custom popularity score.

**Task**  
I needed to keep latency below 200 ms while avoiding out‑of‑memory errors that were creeping in during peak hours when many shards returned large result sets before sorting could be applied.

**Action**  
First, I enabled `search_type=dfs_query_then_fetch` only on the hottest indices and switched off `track_scores` for the popularity field to reduce RAM usage. Then I set a tight `terminate_after` threshold of 2000 hits per shard so that ES would stop fetching once enough candidates were collected. For sorting, I moved the custom popularity logic into a scripted sort using Painless but limited the script’s scope by caching the popularity vector in a `doc_values` field and used `fielddata=true` sparingly. Finally, I tuned JVM heap to 4 GB and increased the thread pool for search to handle burst traffic.

**Result**  
Memory usage dropped from an average of 12 GB to 6 GB during peak loads, eliminating OOM crashes. Query latency stayed under 150 ms for 95% of requests, and the recommendation click‑through rate improved by 8%. I learned that careful shard‑level limits combined with fielddata tuning can drastically reduce memory pressure without sacrificing relevance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
