---
qid: ing_f956747c15__eli5__local
question: 'Q55: Your RAG system works great on test data but fails in production.
  What do you check?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 256
total_tokens: 425
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:09:31-05:00'
sources: []
---

Imagine your RAG (Retrieval‑Augmented Generation) model as a chef who learns recipes from a cookbook (the retrieval part) and then creates dishes (the generation part). In the kitchen of testing it has all the right ingredients, but in the busy restaurant it runs out or gets the wrong ones.  
What to check?  

1. **Data drift** – Are the real‑world documents different from those you used for training?  
2. **Index freshness** – Did you rebuild the search index so the chef sees up‑to‑date pages?  
3. **Latency and throttling** – Is the retrieval engine slow or blocked, giving stale or no snippets?  
4. **API keys/permissions** – Do production services still have access to the knowledge base?  
5. **Version mismatch** – Are you running the same code (model weights, tokenizer) as in test?  

If any of these “ingredients” change, the dish will taste off. Fixing them brings your RAG back from the kitchen to the dining room.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
