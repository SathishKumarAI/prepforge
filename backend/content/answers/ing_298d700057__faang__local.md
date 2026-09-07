---
qid: ing_298d700057__faang__local
question: 'Explain: Sort order — Sort search results | Elasticsearch Reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 555
total_tokens: 789
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:20:18-05:00'
sources: []
---

**Clarify**  
We need to explain how *sort* works for search results in Elasticsearch – the syntax, ordering rules, and typical use‑cases. I’ll assume a reader knows basic query DSL but not the intricacies of `sort`.

---

### 1️⃣ Approach
1. **Explain the `sort` clause** (array of field/score objects).  
2. **Show default behaviour** (`_score`, then doc order).  
3. **Detail sorting by fields** (numeric, date, keyword, geo‑distance).  
4. **Mention missing values handling** and custom scripts.  
5. **Touch on performance considerations** (fielddata, `doc_values`).  

---

### 2️⃣ Depth
```json
GET /products/_search
{
  "query": { "match_all": {} },
  "sort": [
    { "price": { "order": "asc", "missing": "_last" } },
    { "created_at": { "order": "desc" } }
  ]
}
```
- **Order**: `asc` or `desc`.  
- **Missing values**: `_first`, `_last`, or a literal.  
- **Script sort**: `{ "_script": { "type":"number", "script":{"source":"doc['rating'].value * params.weight","params":{"weight":2}} }}`.  
- **Geo‑distance**: `{"_geo_distance": {"location": [40, -70], "order": "asc"}}`.  

Elasticsearch uses **fielddata** for text fields (memory heavy) and **doc_values** for numeric/date/keyword (disk‑backed). Sorting on large shards can cause I/O spikes; consider pre‑computing sort keys or using `index_sort`.

---

### 3️⃣ Edge Cases
- Missing field → falls back to `_last` unless overridden.  
- Mixed data types in a field → query fails.  
- Very high cardinality numeric sorts → slow due to many distinct values.  

Test with empty fields, nulls, and large result sets.

---

### 4️⃣ Optimize & Communicate
- Prefer **doc_values**; avoid `fielddata` on text.  
- Use **index_sort** for common static ordering (e.g., recency).  
- For dynamic multi‑field sorting, cache computed values or use a secondary index.  

When explaining, start with the high‑level purpose, give concrete examples, then dive into trade‑offs—exactly how FAANG interviewers expect structured, clear reasoning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
