---
qid: ing_3a5d1ceb57__faang__local
question: 'Explain: Query parameters — Create an index | Elasticsearch API documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 414
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:00:04-05:00'
sources: []
---

**Clarify**  
You’re asking how to create a field‑level index in Elastic Search via the query API—i.e., add or modify an index mapping so that a specific field becomes searchable/aggregatable. I’ll assume: *ES cluster is up, you have write access to the index, and you want to avoid downtime.*

**Approach**  
1. **Check current mapping** (`GET /idx/_mapping`) to see if the field exists.  
2. If absent, use **PUT mapping API** to add it (or **PUT index** with a new mapping).  
3. For an existing field you want to change (e.g., make it keyword), create a **reindex** workflow: build a new index with desired mapping, copy docs (`POST /_reindex`), then alias swap.  

**Depth**  
```http
PUT my-index/_mapping
{
  "properties": {
    "user_id": { "type": "keyword" }
  }
}
```
- *Complexity*: O(1) API call; mapping changes are immediate for new docs.  
- *Trade‑offs*: Changing an existing field’s type requires reindexing, which is heavy and can lock writes.

**Edge Cases**  
- Field already exists with a conflicting type → fails.  
- Cluster in read‑only mode → cannot modify mappings.  
- Multi‑tenant indices: aliasing required to avoid downtime.

**Optimize & Communicate**  
Explain that for large datasets we use *partial reindex* or *fielddata cache* if needed, and monitor shard allocation after changes. Summarize: validate mapping, apply PUT, handle reindex when changing types, watch for errors, and use aliases for zero‑downtime swaps. This concise plan shows clear structure, technical depth, and practical trade‑offs—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
