---
qid: ing_76b53963d0__fp__local
question: 'Explain: Sort mode option — Sort search results | Elasticsearch Reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 452
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:16:44-05:00'
sources: []
---

### Why *sort_mode* exists

When an ElasticSearch query is executed over a distributed index, each shard independently computes the relevance score for its local documents.  
The master then **merges** these per‑shard scores into a single sorted list that satisfies the user’s `sort` clause.  
If a field is used for sorting but appears on different shards with varying values (e.g., a multi‑valued numeric field), we must decide how to combine those local values into one score for the final ordering.

### The mathematical problem

Let shard *i* return scores \(s_{ij}\) for its *j*‑th hit.  
We need an aggregation function \(f\) that maps \(\{s_{1j}, s_{2j}, …, s_{mj}\}\) → a single value used in the global sort.

- **Min**: guarantees that if any shard has a very high score, the final ranking reflects it (useful for “worst‑case” relevance).
- **Max**: favours shards with the best local evidence; often the default because relevance is typically *maximised*.
- **Avg**: smooths out extremes, useful when all shards should contribute equally.

### A non‑obvious insight

Most users assume *max* is always correct.  
However, in a **dense field scenario** (e.g., `price` with many duplicate values across shards), *min* can actually preserve the true global order because it eliminates artificially inflated scores that arise from shard‑level normalisation.  
In practice, choosing `sort_mode=avg` for numeric ranges often yields more stable pagination when combined with `search_type=dfs_query_then_fetch`.

### Bottom line

`sort_mode` is a lightweight, shard‑aware aggregation that resolves the distributed‑score dilemma. It ensures the final list respects the intended semantics of your sort key while allowing you to fine‑tune how shard diversity influences ranking.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
