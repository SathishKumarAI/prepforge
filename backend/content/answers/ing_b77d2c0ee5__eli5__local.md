---
qid: ing_b77d2c0ee5__eli5__local
question: 'Explain: Why DNS Based Global Server Load — Why DNS Based Global Server
  Load Balancing (GSLB) Doesn\u2019t Work'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 201
total_tokens: 377
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:27:19-05:00'
sources: []
---

Think of the internet like a huge library where each book (web site) has many copies stored in different branches around the world.  
When someone wants a copy, their phone asks “Which branch is closest?” and the library’s catalog (DNS) replies with one address.  

Now imagine the catalog only gives one answer at a time and does not update until it restarts. If that branch becomes overcrowded or closes, users still go there because they keep the old address in their pocket.  
DNS can’t see real‑time traffic or server health; it just hands out static names.  
So while DNS lets you point to many servers, it can’t balance load dynamically—hence “DNS based GSLB doesn’t work” for true round‑robin or failover.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
