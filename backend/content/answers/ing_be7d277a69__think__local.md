---
qid: ing_be7d277a69__think__local
question: 'Explain: Sort mode example usage — Sort search results | Elasticsearch
  Reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 478
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:32:25-05:00'
sources: []
---

**1️⃣ Clarify the goal & context**  
   *What exactly is “Sort mode” in Elasticsearch?*  
   - Confirm that we’re talking about the `sort` parameter used when querying a search index, not the internal sorting algorithm.  
   - Assume the reader knows basic REST API calls but may be new to advanced query syntax.

**2️⃣ Adopt a mental model**  
   *Think of a search as a two‑step process*:  
   1. **Filtering** – find all documents that match the query terms.  
   2. **Sorting** – order those results according to one or more criteria (date, score, custom fields).  
   Sort mode is the “ordering” part.

**3️⃣ Step‑by‑step reasoning**  
   a. **Identify the field(s)** you want to sort by (e.g., `publish_date`, `price`).  
   b. Decide the *direction*: ascending (`asc`) or descending (`desc`).  
   c. Build the JSON body:  
      ```json
      {
        "query": { ... },
        "sort": [
          { "publish_date": { "order": "desc" } },
          { "_score": { "order": "desc" } }
        ]
      }
      ```
   d. Send via `POST /index/_search` and inspect the `_source` order in the response.

**4️⃣ Common pitfalls to avoid**  
   - Mixing up field names or using a non‑indexed field → error or slow query.  
   - Forgetting that Elasticsearch always returns hits sorted by relevance first unless you explicitly override with `sort`.  
   - Using too many sort fields can degrade performance; keep it minimal.

**5️⃣ Sanity‑check & communicate**  
   *Ask*: “If I want the newest articles first, which field and order do I specify?” → `publish_date` with `"order":"desc"`.  
   • Test in Kibana Dev Tools or curl.  
   • Verify that the returned `_score` values are irrelevant when a deterministic sort is applied.  

By framing sorting as an explicit “ordering” step after filtering, you can quickly construct and debug Elasticsearch queries that deliver results exactly how you want them.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
