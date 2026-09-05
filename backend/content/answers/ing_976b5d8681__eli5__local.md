---
qid: ing_976b5d8681__eli5__local
question: 'Explain: Use case: User views the user timeline — system-design-primer/solutions/system_design/twitter/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 210
total_tokens: 403
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:37:52-05:00'
sources: []
---

Imagine a giant library where every book is a tweet and each reader has their own personalized shelf.  
When you “view your timeline,” the system asks two questions:

1. **Which books belong to me?** – It looks up all the people I follow (the *following list*).  
2. **What’s the newest version of those books?** – For every author on that list, it pulls their latest chapters (the *tweets*) and orders them from newest to oldest.

The result is a single page that feels like a fresh scroll of your friends’ stories. In system‑design terms, this means fetching a user’s following set, then retrieving recent tweets for each followed user, merging them, and returning the top N items. It’s like pulling the latest pages from many books and lining them up in one tidy stack for you to read.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
