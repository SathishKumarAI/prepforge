---
qid: ing_0141eb4b8d__think__local
question: 'Explain: Runtime fields — Mapping | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 430
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T02:49:19-05:00'
sources: []
---

**1. Clarify the ask & set assumptions**

* What exactly is a “runtime field” in Elasticsearch?  
  - A field that isn’t stored on disk but computed at query time from other data.  
* Do we need only the definition or also examples (JSON mapping, usage)?  
  - Assume the user wants a concise explanation plus a sample mapping.

**2. Pick a mental model**

Think of two layers:

| Layer | Purpose |
|-------|---------|
| **Index mapping** | Defines how documents are stored & indexed. |
| **Runtime field definition** | Adds virtual fields that are derived on‑the‑fly during search. |

Use this diagram to anchor the explanation.

**3. Step‑by‑step reasoning**

1. Start with a quick recap of normal mappings (fields, types).  
2. Introduce runtime fields as “computed columns” – they’re not persisted.  
3. Explain the syntax: `runtime` keyword inside the mapping, `type`, and a `script`.  
4. Mention that scripts can use Lucene’s `ctx._source` or Painless functions.  
5. Show how to reference them in queries (e.g., `field_name.keyword`).  
6. Note performance implications: runtime fields are evaluated per document during query time, so they’re ideal for rarely‑used, derived data.

**4. Common traps**

* Forgetting that runtime fields can’t be used for indexing or aggregations unless scripted correctly.  
* Assuming they replace stored fields; they only add virtual ones.  
* Mixing up `runtime` with `scripted_metric` or `runtime field scripts`.  

**5. Sanity‑check & verbalize**

- Verify the sample mapping compiles in Kibana Dev Tools.  
- Recount: “Runtime fields let us compute a value at query time from existing data without storing it.”  
- Keep language short, avoid jargon unless defined.

This structured approach ensures clarity and makes the answer reusable for similar questions about Elasticsearch features.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
