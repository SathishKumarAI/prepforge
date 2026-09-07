---
qid: ing_f1822cd358__aws__local
question: 'Explain: Full text queries — Full text queries | Elasticsearch Reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 420
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:23:16-05:00'
sources: []
---

**Situation / Task**  
At my last role I led a feature that let customers search across millions of product reviews with natural‑language queries. The goal was to drop the average query latency from **1.2 s** (SQL + full‑text index) to **<100 ms** while keeping cost under $0.05 per 10,000 searches.

**Action**  
I chose Amazon OpenSearch Service (managed Elasticsearch).  
* **Index design:** used a *dynamic mapping* with `analyzer: standard` for English and `tokenizer: ngram` for partial‑word matches.  
* **Querying:** leveraged the `_search` endpoint with a `multi_match` query across `title`, `body`, and `tags`. Added `minimum_should_match` to balance recall vs precision.  
* **Scalability & Availability:** provisioned 3 dedicated data nodes (m5.large.elasticsearch) in an AZ‑aware cluster, enabled auto‑scaling on CPU >70 %. Cross‑region read replicas reduced latency for global users.  
* **Cost control:** used `warm` tier storage for older indices and disabled index lifecycle management on hot nodes to keep write throughput high.  

**Result**  
Latency dropped to **78 ms** (average), a 93 % reduction, while cost fell from $0.12 to **$0.04 per 10k queries**. Search hit‑rate increased by 27 %, directly boosting conversion on the product page.

**Reflection**  
I learned that *“Dive Deep”* is essential—understanding analyzer behavior and shard allocation can make or break performance. I also practiced *Ownership* by automating node health checks with Lambda, ensuring zero manual intervention for a 24/7 search service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
