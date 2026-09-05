---
qid: ing_c6dcbf74da__eli5__local
question: Design the memory and personalisation layer for an assistant serving millions
  of users. What do you store, when do you summarise versus retrieve, and how do you
  evaluate memory quality?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 256
total_tokens: 439
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:51:04-05:00'
sources: []
---

Think of the system as a huge library that keeps every user’s “story book.”  
**What to store:** Each interaction becomes a page—what was said, the assistant’s reply, and any tags (topic, sentiment).  
**When to summarize vs retrieve:**  
- *Retrieve* when a user asks for something fresh: pull the last few pages of that book.  
- *Summarize* after many pages have piled up: condense them into a short “chapter summary” that keeps key facts and context but drops trivial details, saving space and speeding future look‑ups.  

**Evaluating memory quality:**  
1. **Recall test** – ask the assistant to reproduce a detail; if it remembers correctly, the page is good.  
2. **Relevance score** – check whether retrieved pages actually answer the current question (e.g., by measuring overlap of keywords).  
3. **Freshness metric** – older pages get lower weight unless they contain timeless facts.  

By treating user history as a book that’s regularly edited and compressed, the assistant can serve millions while keeping memory fast, accurate, and tidy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
