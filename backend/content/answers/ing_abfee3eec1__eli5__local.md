---
qid: ing_abfee3eec1__eli5__local
question: 'Explain: Common Cache Key Choices — Content Delivery Network (CDN) | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 271
total_tokens: 436
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:10:17-05:00'
sources: []
---

Think of a CDN as a giant library that copies books from the main library (your server) and places them in branches all over the world so people can read them quickly.  
The *cache key* is like the book’s shelf label: it tells the branch which copy belongs to which request.  

**Common choices**

1. **URL only** – “/images/logo.png”. Works when the same image is always the same, but if two users get different logos because of a language setting, they’ll still share one copy.  
2. **URL + query string** – “/product?id=123&lang=en”. Adds more detail so each variation gets its own copy, at the cost of many more copies in the library.  
3. **URL + user‑segment header** – “/profile?user=456|premium”. Uses a piece of information that only the branch can see (like who’s logged in) to decide which shelf to use.

In short, the cache key is the label that balances *how many copies you keep* against *how accurately each request gets its own data*. Choosing the right key keeps your CDN efficient and your users happy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
