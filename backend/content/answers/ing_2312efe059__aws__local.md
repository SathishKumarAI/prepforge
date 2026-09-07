---
qid: ing_2312efe059__aws__local
question: 'Explain: Path parameters — Create an index | Elasticsearch API documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 431
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:45:59-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
In my last role I led the migration of a legacy search layer to **Amazon OpenSearch Service** for an e‑commerce catalog that served 3 M daily page views. The existing solution had 400 ms query latency and was difficult to scale, which hurt our customers’ ability to find products quickly.

**Action (Dive Deep + Bias for Action)**  
I designed a *path‑parameter* based indexing strategy:  
1. **Index name** = `products-{region}-{year}` – separates data by geography and time, enabling targeted roll‑ups.  
2. **Document ID** = `{product_id}_{locale}` – guarantees uniqueness across locales while keeping the document size small.  
3. I used **OpenSearch Index Templates** to enforce field mappings (keyword for IDs, text with custom analyzer for names).  
4. Implemented *sharding* based on `region` using the `hash` routing function, ensuring even distribution and reducing cross‑shard traffic.

The API call became a simple `PUT /products-us-2024/_doc/{product_id}_{locale}` – eliminating the need to query multiple indices.

**Result (Deliver Results + Quantified Impact)**  
After deployment:  
* Query latency dropped from **400 ms → 70 ms** (average).  
* Indexing throughput increased by **2×**, allowing us to handle a projected 5 M daily page views without new clusters.  
* Operational cost fell by **18 %** due to more efficient shard usage and reduced data duplication.

**Learnings & Bar‑Raiser Signals**  
I documented failure scenarios (e.g., shard rebalancing) and created automated rollback scripts, showing ownership and a deep understanding of the system’s trade‑offs. The solution is simple yet powerful—an embodiment of *Invent & Simplify*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
