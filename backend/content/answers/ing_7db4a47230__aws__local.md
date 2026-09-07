---
qid: ing_7db4a47230__aws__local
question: 'Explain: Sorting numeric fields — Sort search results | Elasticsearch Reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 500
total_tokens: 732
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:09:35-05:00'
sources: []
---

**Situation** – I was tasked to improve the ranking of e‑commerce listings in our global catalog. The existing ElasticSearch query returned 10 k results per search; customers complained that price and rating fields were not properly ordered, hurting conversion.

**Task** – Deliver a solution that sorts numeric fields (price, rating) efficiently, scales to millions of documents, and reduces latency by >30 %.

**Action**  
1. **Requirements & Design** –  
   * Use the `sort` clause on numeric fields; ensure they are mapped as `double`.  
   * Add a custom `script_score` for composite sorting (price ASC, rating DESC).  
   * Enable `fielddata=true` only on these two fields to avoid memory blow‑up.  
2. **AWS Services** –  
   * **Amazon OpenSearch Service** (managed ES) with dedicated master nodes and warm nodes for hot data.  
   * **Lambda@Edge** to rewrite incoming queries, injecting the sort clause automatically.  
   * **CloudWatch Metrics** to track `search_latency` and `hit_rate`.  
3. **Scalability & Cost** –  
   * Autoscale the data nodes based on CPU/heap usage; keep shard size < 5 GB.  
   * Use `doc_values` for numeric fields (default) to keep disk I/O low.  
4. **Trade‑offs** –  
   * Adding a script increases CPU cost but keeps sorting logic in one place.  
   * Setting `fielddata=true` on only two fields limits memory usage while allowing fast numeric sort.

**Result** – After deployment, average search latency dropped from 450 ms to 310 ms (31 % improvement). The click‑through rate for sorted results rose by 18 %, translating to $1.2M incremental revenue in the first quarter. I documented the pattern in our internal design guide and mentored two new SDEs on ElasticSearch best practices.

**Reflection** – I learned that a small mapping tweak (enabling `fielddata` on specific numeric fields) can have outsized impact when combined with proper autoscaling. The bar‑raiser will note my ownership of the end‑to‑end pipeline, deep dive into ES internals, and quantified business benefit.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
