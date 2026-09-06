---
qid: ing_7785081288__think__local
question: 'Explain: Missing values — Sort search results | Elasticsearch Reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 474
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T08:54:13-05:00'
sources: []
---

**1. Clarify the scope and assumptions**  
- Identify that the user wants an explanation of how *missing* values are handled when sorting search results in Elasticsearch.  
- Assume they are familiar with basic ES concepts (index, mapping, query DSL) but may not know the special `missing` option in a `sort` clause.  
- Note that we should cover both legacy and newer syntax (`"missing": "_last"`/`"_first"`, numeric defaults, and custom values).  

**2. Adopt the “Elasticsearch sort mechanics” framework**  
- Start with the general sort flow: field value → missing‑value handling → tie‑breaking.  
- Map this to the relevant parts of the ES documentation (Sort API, field data types, default ordering).  

**3. Step‑by‑step reasoning**  
a. Explain what “missing” means in a sorted context.  
b. Show how Elasticsearch substitutes a value for null/missing fields when sorting.  
c. Detail the two ways to specify this: via `"missing": "_last"`/`"_first"` or by providing an explicit numeric/string value.  
d. Illustrate with a concrete example (e.g., sort by `price`, missing → `_last`).  
e. Mention type‑specific defaults (numeric → `0`, string → empty string, date → epoch).  

**4. Common traps to avoid**  
- Forgetting that the default is *not* to include documents with null values; they are treated as if they had a minimal value for ascending sorts and maximal for descending.  
- Confusing `"missing": "_last"` with `"order": "desc"`.  
- Ignoring that specifying an explicit missing value must be compatible with the field’s data type.  

**5. Sanity‑check & communicate**  
- Re‑read the answer to ensure each bullet directly addresses the question.  
- Keep language concise but precise, using code snippets for clarity.  
- End with a quick recap: “So, when you sort on a field that may contain nulls, Elasticsearch lets you decide whether those docs appear first or last by setting `missing`.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
