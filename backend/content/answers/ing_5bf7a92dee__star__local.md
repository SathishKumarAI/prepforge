---
qid: ing_5bf7a92dee__star__local
question: 'Explain: Create an index | Elasticsearch API documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 321
total_tokens: 556
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:31:26-05:00'
sources: []
---

**Situation:**  
At my last gig I was tasked with improving search latency for a product catalog that had grown to over 4 million documents. Our existing setup returned results in ~350 ms, which was unacceptable for the mobile app.

**Task:**  
I needed to design and deploy an index that reduced query time below 120 ms while keeping data freshness and storage costs reasonable.

**Action:**  
First I reviewed the Elasticsearch docs on “Create an Index” to understand mapping types and settings. I defined a custom analyzer using `edge_ngram` for partial‑word search, set `number_of_shards` to 5 (matching our cluster size) and `number_of_replicas` to 1 for resilience. I also enabled the `index.routing.allocation.require.box_type: data_hot` setting so hot nodes handled writes. Using the REST API (`PUT /products_v2`) I scripted the index creation, then re‑indexed the catalog with bulk API calls that included `refresh_interval:-1` to speed up ingestion. Finally, I added a runtime field for price ranges to avoid storing redundant data.

**Result:**  
Query latency dropped from 350 ms to 95 ms on average, and CPU usage fell by ~30%. The index size was only 12 % larger than the previous one. I learned that careful mapping and shard planning can outweigh raw hardware upgrades, and that leveraging Elasticsearch’s API documentation directly leads to faster, more maintainable solutions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
