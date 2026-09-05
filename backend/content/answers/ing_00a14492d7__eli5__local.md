---
qid: ing_00a14492d7__eli5__local
question: 'Explain: Cost estimate (rough token math) — Content Moderation Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 254
total_tokens: 415
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:36:12-05:00'
sources: []
---

Imagine your AI is a librarian who checks every book before it’s shelved.  
Each “book” is a user post, and the librarian reads it word‑by‑word (a *token*).  

1. **Read the book** – The model looks at about 200 tokens per post.  
2. **Check for problems** – A quick scan costs roughly $0.0004 per 1 k tokens.  
3. **Decide** – If something smells off, a second pass (a more careful filter) adds another 50 tokens and the same cost.

So for one post:  
- First read: 200 tokens × $0.0004/1 k = **$0.08**.  
- Extra check if needed: 50 tokens × $0.0004/1 k = **$0.02**.  

That’s about **$0.10 per post** on average, a tiny fraction of a cent for every word the librarian reads. The total cost scales linearly with how many posts you let through.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
