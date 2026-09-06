---
qid: ing_492bb02afe__fp__local
question: 'Explain: Track scores — Sort search results | Elasticsearch Reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 447
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:41:17-05:00'
sources: []
---

### Why `track_scores` matters in an Elasticsearch sort

When a query is executed, every matching document receives a *relevance score* (e.g., BM25).  
If the client asks to **sort by that score**, Elasticsearch must compute and cache the
score for each hit so it can order them. This incurs extra CPU work and memory use.

`track_scores: true` tells ES to preserve these scores even if you’re not explicitly
sorting on `_score`. Why? Some aggregations or scripts need the original relevance value;
without tracking, they’d be forced to recompute it, breaking deterministic ordering.
If you only sort by a field (`sort: [{date: asc}]`) and never refer to `_score`,
setting `track_scores` to **false** lets ES skip score calculation entirely,
yielding a measurable performance boost—especially for deep pagination.

#### Deeper principle

Sorting is an *optimization* over the raw relevance ranking.  
Elasticsearch treats sorting as a second‑pass operation: first, it builds a priority
queue of candidate documents based on the query’s filter and scoring; then it orders
that queue by the requested sort keys. Tracking scores simply keeps the first pass
information available for later stages.

#### Non‑obvious insight

Even when you *don’t* request sorting by `_score`, enabling `track_scores` can
improve **reproducibility**: if two queries differ only in a filter but share the same
scoring function, cached scores ensure that the relative order of hits remains stable.
Disabling it may lead to subtle ordering changes across shards, especially when the
query uses field‑norms or script‑based scoring. Thus, `track_scores` is not just a
performance knob—it also guarantees deterministic result ordering in distributed
search.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
