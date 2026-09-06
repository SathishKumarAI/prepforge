---
qid: ing_8281a642d7__fp__local
question: 'Explain: Nested sorting examples — Sort search results | Elasticsearch
  Reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 375
total_tokens: 547
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:42:54-05:00'
sources: []
---

**Why nested sorting is necessary**

In a document store, a *nested* field represents an array of sub‑objects that must be treated as atomic units (e.g., a product with many variants).  
When you query for “products priced below $10” and want the cheapest variant first, Elasticsearch cannot simply sort on the nested `price` field because the parent document is still one unit in the result set. Without a special mechanism, it would pick the *minimum* price across all variants but then keep the entire product as a single row—losing the per‑variant granularity that the user expects.

**How it works**

Elasticsearch builds a separate “nested” index for each nested type. During search it:
1. Executes the query on the nested index, yielding *matching nested documents* (each variant).
2. For each parent document, collects all matching nested docs and applies the requested sort (e.g., ascending price).
3. Projects the sorted nested doc back to its parent and returns the parent as a single hit.

Mathematically this is an *aggregation‑by‑parent* operation followed by an *ordering* on the child set—exactly what a join would do in SQL but without materialising a Cartesian product.

**Non‑obvious insight**

Because nested sorting materialises only the *sorted* child documents for each parent, it scales linearly with the number of matching variants rather than the total size of all nested arrays. This lazy evaluation is why nested sort can handle thousands of variants per product without exploding memory or CPU usage—something that naïve “flatten‑and‑sort” approaches cannot achieve.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
