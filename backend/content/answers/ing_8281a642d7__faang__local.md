---
qid: ing_8281a642d7__faang__local
question: 'Explain: Nested sorting examples — Sort search results | Elasticsearch
  Reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 609
total_tokens: 844
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:48:24-05:00'
sources: []
---

**1️⃣ Clarify**

> *Problem*: How does **nested sorting** work in Elasticsearch when we want to order documents based on a field inside an inner‑document (e.g., sort products by the price of their cheapest variant)?  
> *Assumptions to confirm*  
> - The index uses the `nested` type for child objects.  
> - We need stable ordering even if some nested docs are missing or have null values.  

**2️⃣ Approach**

1. **Define a nested query** that matches the inner documents we care about.  
2. Use `sort` with `"nested"` options: specify the path, sort field, and optionally an aggregation (e.g., `min`, `max`).  
3. Optionally add `inner_hits` to retrieve the sorted child docs.

**3️⃣ Depth**

```json
GET /products/_search
{
  "query": {
    "match_all": {}
  },
  "sort": [
    {
      "_script": {                     # alternative: use nested sort directly
        "type": "number",
        "script": {
          "source": "doc['variants.price'].size() > 0 ? doc['variants.price'].min() : null"
        }
      }
    },
    { "name.keyword": { "order": "asc" } }
  ],
  "aggs": {
    "cheapest_variant": {
      "nested": { "path": "variants" },
      "aggs": {
        "min_price": { "min": { "field": "price" } }
      }
    }
  }
}
```

- **Complexity**: Sorting by nested field incurs a per‑doc O(k) scan over its children (`k` = number of nested docs).  
- **Trade‑offs**: Using `_script` gives flexibility but is slower; native `nested.sort` is faster but limited to simple ordering.

**4️⃣ Edge Cases**

| Case | What breaks? | Test |
|------|--------------|------|
| No nested docs | Script returns null → document placed last | Index doc without variants |
| Multiple matches | Must decide which child wins (min/max) | Vary `price` across children |
| Large number of nested docs | Performance hit | Generate 10k variants per product |

**5️⃣ Optimize & Communicate**

- Prefer **nested sort** over scripts for speed.  
- Cache the aggregation if you’ll reuse it frequently (`index.max_result_window`).  
- Explain to interviewers: “We’re leveraging Elasticsearch’s ability to traverse nested paths, applying an aggregate (min) so that each parent doc is ordered by its child’s lowest price. The script fallback is a last‑resort for custom logic.”  

This concise plan shows clear reasoning, complexity awareness, and practical trade‑offs—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
