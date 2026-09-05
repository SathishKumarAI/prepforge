---
qid: vq_d1ba30a618__fp__local
question: What is the difference between UNION and UNION ALL?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 342
total_tokens: 512
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:57:37-05:00'
sources: []
---

**Union vs. Union All – a geometric‑information view**

Both clauses combine two result sets into one.  
*Why* they differ is best seen through the lens of *information loss*.  

| Clause | Operation on rows | Effect on cardinality | Information preserved |
|--------|------------------|-----------------------|------------------------|
| **UNION** | Projects onto the *set* of distinct tuples (duplicates are removed). | Cardinality ≤ sum of inputs. | Loses multiplicities; only the unique “shape” of the data remains. |
| **UNION ALL** | Keeps *all* input rows, including duplicates. | Cardinality = sum of inputs. | Retains full multiset information. |

From an optimization standpoint, a query engine can exploit the *idempotence* of UNION: after deduplication it need not materialize duplicate rows, allowing hash or merge‑sort elimination early. In contrast, UNION ALL requires preserving every row, often forcing a full materialization before downstream operators.

A subtle insight most overlook: **UNION acts like a projection onto the quotient space defined by equality of tuples**—it collapses the data into equivalence classes. This is precisely what a *set* does in mathematics; hence UNION behaves as a set‑union operation, while UNION ALL preserves the original multiset structure.

So, choose UNION when you only care about distinct records (e.g., deduplicating user IDs). Choose UNION ALL when multiplicities matter (e.g., counting total sales across partitions).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
