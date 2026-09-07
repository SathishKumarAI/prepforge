---
qid: ing_d6a73e4cb2__faang__local
question: 'Explain: Data types supported — Elasticsearch'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 470
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:58:25-05:00'
sources: []
---

**Clarify**  
The interviewer asks which *data types* Elasticsearch can index and search on, and how they behave. I’d confirm whether they’re interested in the low‑level field mapping types (e.g., `keyword`, `text`) or higher‑level concepts like nested objects and scripts.

**Approach**  
1. List core primitive types (`integer`, `float`, `boolean`, `date`, `ip`).  
2. Cover string handling: `text` (analyzed, full‑text) vs. `keyword` (not analyzed, exact match).  
3. Mention compound types: `object`, `nested`, `geo_point`, `completion`.  
4. Highlight dynamic mapping and custom analyzers.  

**Depth**  
Elasticsearch stores data in Lucene indexes; each field type maps to a specific Lucene token stream or numeric range structure.  
- **`text`** → analyzed by an analyzer (tokenizer + filters) for full‑text search.  
- **`keyword`** → stored verbatim, used for aggregations and exact matches.  
- **Numeric types (`long`, `float`, etc.)** → indexed as sorted numeric doc values for range queries.  
- **`date`** → parsed into milliseconds since epoch; supports date math.  
- **`geo_point`** → stores latitude/longitude, enabling geohash grids and distance queries.  
- **`nested`** preserves parent‑child relationships, allowing per‑document array semantics in aggregations.  

**Edge Cases**  
- Mixing `text` and `keyword` on the same field (multi‑field).  
- Overly long string values exceeding Lucene’s 2 GB limit.  
- Incompatible analyzers causing unexpected tokenization.

**Optimize & Communicate**  
Explain trade‑offs: `text` gives rich search but consumes more storage; `keyword` is lean but limited to exact matches. Recommend using multi‑field mapping for fields that need both full‑text and keyword semantics, and advise on index templates for consistent schema across shards. This concise yet thorough response showcases structured thinking and depth expected in FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
