---
qid: ing_330b785e50__eli5__local
question: 'Explain: Using Prompt Caching to reduce the costs of Contextual Retrieval'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 207
total_tokens: 368
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:56:49-05:00'
sources: []
---

Imagine you’re in a library that charges per page you read. Every time you ask the librarian for a book, she has to pull it out from the shelf and bring it back—costly work each time. Prompt caching is like having a “quick‑access shelf” where the most common books are already on display. When you need one of those, the librarian can hand it over instantly without digging through the entire collection.

In AI, **contextual retrieval** means pulling relevant information from a huge knowledge base to answer your query. Each retrieval costs compute time and money because the system must search and fetch data. By caching the prompts (the questions you send) that often appear, the model can reuse pre‑computed responses for those same prompts, skipping the expensive search step. Thus, fewer searches mean lower cost and faster answers—just like a well‑organized library saves both time and money.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
