---
qid: ing_941a753330__eli5__local
question: 'Explain: Caching — system-design-primer/solutions/system_design/twitter/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 201
total_tokens: 388
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:32:41-05:00'
sources: []
---

Imagine you’re a librarian who always has to pull books from a deep shelf whenever someone asks for them. That’s slow and tiresome. Caching is like keeping the most‑requested books on a small, front desk table so anyone can grab them instantly.  

In Twitter’s system design, “caching” means storing recent tweets or user data in fast memory (like Redis) instead of repeatedly querying the database. The cache sits between users and the database; it answers quick requests and only goes to the slower storage when a book isn’t on the desk.  
*Cache*: A temporary storage spot for frequently accessed data.  
*TTL (time‑to‑live)*: How long a cached item stays before it’s refreshed or removed.  

By using caching, Twitter reduces load on its databases, speeds up replies, and keeps users scrolling smoothly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
