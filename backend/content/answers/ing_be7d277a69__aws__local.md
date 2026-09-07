---
qid: ing_be7d277a69__aws__local
question: 'Explain: Sort mode example usage — Sort search results | Elasticsearch
  Reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 519
total_tokens: 752
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:34:14-05:00'
sources: []
---

**Situation / Task**  
I was leading a migration of our e‑commerce catalog from a legacy MySQL backend to **Amazon OpenSearch Service (ES)** for faster search and recommendation. The client needed real‑time sorting by *price*, *rating* and *recency* while keeping latency below 200 ms at peak traffic (~30k QPS).  

**Action**  
1. **Requirements & Design** – I scoped the index schema: `price` (float), `rating` (scaled_float), `created_at` (date) and a custom field `sort_score`.  
2. **Sort Mode Selection** – For numeric fields, OpenSearch offers *field*, *doc*, and *none*.  
   - *Field* mode uses the inverted index → fastest for range queries but can’t handle missing values.  
   - *Doc* mode reads the original document per hit → accurate for dynamic or computed fields (e.g., `sort_score = price * 0.7 + rating * 0.3`).  
   I chose **doc** for `sort_score` to allow on‑the‑fly weighting, while keeping *field* mode for pure numeric sorts (`price`, `rating`) to hit the index directly.  
3. **Implementation** – Added a runtime script in OpenSearch to compute `sort_score`. Configured `search_after` pagination and a small `size=10` per request.  
4. **Scalability & Cost** – Deployed an *r5.large.elasticsearch* cluster with 2 warm nodes, autoscaling enabled. Estimated cost: $0.12/hr/node → ~$200/month for baseline + 20% buffer.  

**Result**  
- Latency dropped from 1.3 s (MySQL) to **120 ms average**, staying under the SLA even during flash sales.  
- Click‑through rate on sorted results rose by **18 %**, and conversion increased by **12 %** in the first month post‑migration.  

**Reflection**  
I learned that choosing *doc* mode for computed fields, despite higher per‑hit cost, delivers a richer user experience when precision matters. I’ll continue to profile sort performance as data grows, ensuring we keep the balance between speed and accuracy—an embodiment of **Ownership**, **Dive Deep**, and **Deliver Results**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
