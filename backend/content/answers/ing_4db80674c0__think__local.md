---
qid: ing_4db80674c0__think__local
question: 'Explain: Index Templates — Indextemplates'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 392
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T06:11:25-05:00'
sources: []
---

**1️⃣ Clarify the context & assumptions**  
- Confirm we’re talking about *Elasticsearch* (or OpenSearch) index templates, not ML model indices.  
- Assume the reader knows basic Elasticsearch concepts: indices, mappings, settings.

**2️⃣ Adopt a mental model of “template as blueprint”**  
- Think of an index template like a class definition in OOP: it defines default *mappings* (fields), *settings* (shard count, analyzers), and optional *aliases*.  
- Two main kinds: **legacy templates** (`index.template`/`indices/template`) and **composable templates** (`_template`, `components`).  

**3️⃣ Step‑by‑step reasoning toward the answer**  
1. Explain what an index template is (JSON doc stored in cluster state).  
2. Show how it’s applied when a new index is created (match pattern or explicit call).  
3. Detail components: `index_patterns`, `settings`, `mappings`, `aliases`.  
4. Contrast legacy vs composable templates, highlighting the ability to reuse component templates.  
5. Mention versioning and overwrite behavior (`create` flag).  
6. Provide a simple example JSON snippet.

**4️⃣ Common traps to avoid**  
- Mixing up *index patterns* with *wildcards* in names.  
- Forgetting that legacy templates are deprecated; recommend composable ones.  
- Assuming templates auto‑update existing indices— they don’t, only new ones.  

**5️⃣ Sanity‑check & verbalize**  
- Recap: “Templates tell Elasticsearch how to build an index before data lands.”  
- Ask if the user wants a deeper dive into component reuse or versioning nuances.  
- Ensure tone stays concise yet thorough.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
