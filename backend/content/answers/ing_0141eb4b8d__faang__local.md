---
qid: ing_0141eb4b8d__faang__local
question: 'Explain: Runtime fields — Mapping | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 438
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:47:10-05:00'
sources: []
---

**Clarify**

You’re asking how “runtime fields” work in Elasticsearch when you map a document type (e.g., `Mapping`) and later add dynamic fields at query time (“Elastic Docs”).  
*Assumptions:* the cluster is 7.x+, the index has a defined mapping, and we want to compute/derive values on‑the‑fly without reindexing.

**Approach**

1. Define base mappings for stored fields.  
2. Use `runtime` field definitions in the mapping or in the search request.  
3. At query time, Elasticsearch executes a script (Painless) to calculate the value per doc.  
4. The runtime field is not persisted; it’s computed only during that search.

**Depth**

- **Mapping example:**  
  ```json
  {
    "properties": {
      "price": {"type":"double"}
    },
    "runtime": {
      "discounted_price": {
        "type": "double",
        "script": { "source": "emit(doc['price'].value * 0.9);" }
      }
    }
  }
  ```  
- **Runtime fields** are read‑only, cannot be indexed for full‑text search but can be used in aggregations and sorting.  
- Complexity: O(n) per doc for the script; CPU cost depends on script length.

**Edge Cases**

- Scripts that reference missing fields → `NullPointerException`.  
- Heavy scripts may degrade query latency.  
- Runtime fields are not cached across queries, so repeated expensive calculations can hurt performance.

**Optimize & Communicate**

1. Cache results in a new field if reused often (re‑index).  
2. Keep scripts short; use built‑in functions.  
3. Test with large datasets to ensure CPU usage stays within SLA.  

*Summary:* Runtime fields let you compute derived values on the fly via Painless scripts, offering flexibility without re‑indexing, but at a runtime cost that must be managed carefully.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
