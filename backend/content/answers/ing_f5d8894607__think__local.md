---
qid: ing_f5d8894607__think__local
question: 'Explain: Sorting within nested objects. — Sort search results | Elasticsearch
  Reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 517
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:13:38-05:00'
sources: []
---

**1️⃣ Clarify the problem & assumptions**  
- What *nested objects* mean in ES (objects inside a parent doc).  
- We’re sorting *search results* by a field that lives in those nested docs.  
- Assume we have a single nested path, no multiple nesting levels, and the index is already mapped with `nested` type.

**2️⃣ Mental model / framework**  
- Think of each document as a “parent” with an array of “child” objects.  
- Sorting by a child field requires *joining* the parent to its children in the query.  
- Elasticsearch provides a *nested sort* clause that internally performs this join.

**3️⃣ Step‑by‑step reasoning**  

1. **Define mapping** – ensure `path` is set to `nested`.  
2. **Choose sort criteria** – e.g., `sort_by: "ratings.score"` (child field).  
3. **Add a nested sort clause** in the query body:  
   ```json
   {
     "sort": [
       {
         "ratings.score": {
           "order": "desc",
           "mode": "max",          // pick max score if multiple children
           "nested_path": "ratings"
         }
       }
     ]
   }
   ```
4. **Optional** – add `inner_hits` to fetch the child that determined the sort order.  
5. **Execute & verify** – check that results are ordered by the chosen nested field.

**4️⃣ Common traps to avoid**  

- Forgetting `nested_path`; ES then treats the field as top‑level and fails.  
- Using `mode: min`/`avg` incorrectly when you actually want a specific child’s value.  
- Expecting the *first* child in the array; by default it uses an aggregate (`max`, `min`).  
- Mixing nested sort with other sorts on parent fields without understanding precedence.

**5️⃣ Sanity‑check & communicate**  

- Run a small query with known data and inspect `_source` to confirm which child was used.  
- Explain that the nested sort essentially performs a left‑outer join between parents and children, then applies the chosen aggregation (`mode`).  
- Highlight performance: nested sorts can be expensive; use them only when necessary or consider flattening if possible.

---  

Follow this pattern whenever you need to order search results by fields inside nested objects in Elasticsearch.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
