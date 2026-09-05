---
qid: ing_7a048b64fc__eli5__local
question: 'Explain: The Full Pipeline: Hybrid + Reranking — Contextual Retrieval'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 200
total_tokens: 362
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:49:55-05:00'
sources: []
---

Imagine you’re looking for a recipe in a huge cookbook that’s split into two parts: a quick index of ingredients (the **Hybrid** part) and a deeper, full‑text search (the **Reranking** part).  

1. **Hybrid Retrieval** – first, the system scans the fast ingredient list and also looks through every page of the cookbook. It pulls a short set of recipes that might match your request (“spicy chicken”).  
2. **Contextual Reranking** – next, it reads those recipe pages in detail, considering context like cooking time, dietary tags, or how often users liked them. The system then re‑orders the list so the most relevant recipes appear first.

The result is a quick initial grab followed by an intelligent “fine‑tuning” that uses full text and extra signals to surface exactly what you need.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
