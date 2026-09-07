---
qid: ing_732b69542f__faang__local
question: 'Explain: Aggregations | Elasticsearch: The Definitive Guide [2.x] | Elastic'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 471
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:11:47-05:00'
sources: []
---

**Clarify**

You’re asking how *aggregations* work in Elasticsearch (v2.x) – the mechanism for summarizing and analyzing data at query time (e.g., counts, sums, histograms).  
Assumptions:  
- You have a JSON‑indexed dataset with numeric/keyword fields.  
- You want to compute metrics or groupings without retrieving raw docs.

**Approach**

1. **Define the aggregation type** (terms, stats, histogram, etc.).  
2. **Specify the field** it operates on.  
3. **Optionally nest sub‑aggregations** for multi‑level summaries.  
4. **Send a search request** with `aggs` in the body; Elasticsearch returns buckets/metrics.

**Depth**

- *Terms agg*: groups by distinct values → bucket per term, can sort/count.  
- *Stats/Avg/Sum/Agg*: compute numeric metrics on a field.  
- *Histogram/Date Histogram*: bucket ranges over numbers/dates.  
- *Nested* & *Filter* aggs: refine scope before aggregation.  
- Result format: JSON with `buckets` (for buckets) or single value fields.  

Complexity is linear in the number of documents scanned plus any sort overhead; heavy aggregations can be costly, so use filters to reduce shard load.

**Edge Cases**

- Empty field → bucket with key `_missing_`.  
- Too many unique terms → `terms` agg caps buckets (default 10k).  
- Numeric overflow in stats if values are huge.  

Test by varying doc counts, field cardinality, and nesting depth.

**Optimize & Communicate**

1. **Shard‑level aggregation**: let each shard compute locally, then merge – reduces network traffic.  
2. **Use `composite` agg (v2.x+)** for pagination over large buckets.  
3. **Cache results** if the same query runs often.  

Explain to interviewers that aggregations are first‑class in Elasticsearch, enabling real‑time analytics with minimal latency, but they must be designed mindful of cardinality and shard distribution to keep performance predictable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
