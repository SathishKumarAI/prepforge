---
qid: ing_bd08649111__faang__local
question: 'Explain: Index per Time Frame — Time-Based Data | Elasticsearch: The Definitive
  Guide [2.x] | Elastic'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 483
total_tokens: 729
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:02:11-05:00'
sources: []
---

**Clarify**  
You’re asking how the “index‑per‑time‑frame” pattern works in Elasticsearch and why it’s useful for time‑based data (logs, metrics, events). I’ll assume we’re dealing with a high‑volume ingestion pipeline that needs fast queries on recent data and long‑term retention.

**Approach**  
1. **Create one index per period** (day, week, month).  
2. **Define an alias** (`current_logs`) pointing to the latest index for writes.  
3. Use rollover/alias updates to shift writes to a new index when the current one hits size or age limits.  
4. Configure ILM (Index Lifecycle Management) policies for hot‑warm‑cold tiers and automated deletion.

**Depth**  
- **Performance**: Queries against a single recent index avoid scanning older shards, reducing I/O.  
- **Maintenance**: Deleting an entire old index is O(1).  
- **ILM policy example**:  
  ```json
  {
    "policy": {
      "phases": {
        "hot": {"actions":{"rollover":{"max_size":"50GB","max_age":"7d"}}},
        "warm": {"min_age":"7d","actions":{"allocate":{"include_tier":"warm"}}},
        "cold": {"min_age":"30d","actions":{"allocate":{"include_tier":"cold"}}},
        "delete": {"min_age":"365d","actions":{"delete":{}}}
      }
    }
  }
  ```
- **Search**: Use `time_range` queries; the alias automatically routes to the correct index.

**Edge Cases**  
- Time‑zone drift if timestamps aren’t UTC.  
- Skewed data bursts can overflow a daily index—use size or document count thresholds.  
- Cross‑index aggregations need the same mapping; otherwise, reindexing is required.

**Optimize & Communicate**  
Explain that this pattern balances query speed and storage cost, scales horizontally by adding shards per index, and integrates cleanly with Kibana dashboards. Highlight ILM’s role in automating lifecycle, reducing ops overhead, and keeping cluster health optimal.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
