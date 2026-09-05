---
qid: ing_a644a2569e__eli5__local
question: Compare single-shot RAG with agentic RAG. When does retrieval-as-a-tool
  win?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 261
total_tokens: 427
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:01:40-05:00'
sources: []
---

Think of a research paper as a conversation between two friends: **you** (the reader) and **your notebook** (the AI).  
With *single‑shot Retrieval‑Augmented Generation* (RAG), the notebook pulls one helpful page from a huge library, reads it, and writes an answer. It’s fast but limited—if the right page isn’t there or you need more than one fact, the answer can be thin.

In *agentic RAG*, the notebook becomes a little detective. It first asks a question of the librarian (the retrieval system), checks the returned documents, then decides what to ask next, maybe pulling another page or re‑asking with different wording. It keeps doing this until it feels confident, much like a student who consults several textbooks before writing an essay.

Retrieval‑as‑a‑tool wins when you need a quick, single fact or a short explanation and the correct information is likely in one place—think of looking up a phone number. When depth, nuance, or multiple sources are required, the agentic approach—making several visits to the library—delivers richer, more accurate answers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
