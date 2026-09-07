---
qid: ing_7785081288__faang__local
question: 'Explain: Missing values — Sort search results | Elasticsearch Reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 486
total_tokens: 720
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:21:51-05:00'
sources: []
---

**Missing values – Sort Search Results in Elasticsearch**

---

### 1️⃣ Clarify  
*Problem:* When sorting query results, documents with missing field values can break the order or appear arbitrarily.  
*Assumptions to confirm:*  
- Which field(s) may contain nulls?  
- Desired placement of those docs (first, last, or a custom bucket).  
- Whether we’re using script‑based or native sorting.

---

### 2️⃣ Approach  
1. **Use `missing` option** in the sort clause.  
   - `"missing": "_last"` or `"missing": "_first"` to push nulls to end or start.  
   - Provide a custom value (e.g., `0`) if numeric ordering is needed.  
2. **Index-time handling** – replace nulls with sentinel values if domain logic demands it.  
3. **Script sort** for complex rules (e.g., rank nulls after positive but before negative).

---

### 3️⃣ Depth  
```json
{
  "sort": [
    {
      "price": {
        "order": "asc",
        "missing": "_last"
      }
    },
    { "_score": { "order": "desc" } }
  ]
}
```
- *Complexity:* O(n log n) for sorting, but Elasticsearch optimizes with pre‑sorted buckets.  
- *Trade‑offs:* `missing` is efficient; script sorts add overhead and may hurt cache locality.

---

### 4️⃣ Edge Cases  
- Mixed data types (string vs number).  
- Multi‑field sorting where one field has missing values.  
- Documents lacking the field entirely vs. field present but null.  
*Tests:* Query with known missing patterns, verify order matches expectations.

---

### 5️⃣ Optimize & Communicate  
- Prefer native `missing` over scripts for performance.  
- If custom logic is unavoidable, cache results or pre‑compute sentinel values during ingestion.  
- Explain to stakeholders that handling missing data at sort time keeps queries fast and predictable.  

This structured answer demonstrates clear problem framing, a pragmatic plan, technical depth with code, awareness of edge cases, and optimization insight—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
