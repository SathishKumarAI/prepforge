---
qid: ing_56733126d2__eli5__local
question: 'Explain: Create and manage ILM policies — Index lifecycle management (ILM)
  in Elasticsearch | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 214
total_tokens: 383
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:53:48-05:00'
sources: []
---

Imagine your data as a growing tree that needs different care at each stage.  
**Index Lifecycle Management (ILM)** is the gardener’s plan for that tree in Elasticsearch.

1. **Create a policy** – write a recipe that says what to do when the “tree” (an index) reaches certain ages: keep it fresh, move it to cheaper soil, or prune it away.
2. **Manage the policy** – adjust the recipe as your garden changes—add new stages, change when pruning happens, or delete old recipes no longer needed.

Key terms  
* **Index** – a container of related data (like a folder).  
* **Phase** – a stage in the tree’s life: hot (new), warm (used a bit), cold (rarely accessed), frozen (archived).  

With ILM, you automate moving indices through these phases so your storage stays efficient and your queries stay fast.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
