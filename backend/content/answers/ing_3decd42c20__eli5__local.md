---
qid: ing_3decd42c20__eli5__local
question: 'Explain: The browser DNS caching issue — Why DNS Based Global Server Load
  Balancing (GSLB) Doesn\u2019t Work'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 234
total_tokens: 409
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:14:08-05:00'
sources: []
---

Imagine you’re sending a postcard to a friend who lives in a city that has several post offices (servers).  
**DNS** is the phonebook that tells your computer which post office to use for an address.  
Because people don’t want to look up every time, the phonebook is *cached* on your computer and the local network for a while (the “cache”).  

With **Global Server Load Balancing (GSLB)** the phonebook is clever: it gives you the nearest or least busy post office each time.  
But if your computer still holds an old copy of the phonebook, it will keep sending postcards to the same post office even after that office closes or a better one opens.  

So GSLB “doesn’t work” when DNS caching is too long‑lived: the browser thinks the address hasn’t changed and ignores the new load‑balancing decision until its cache expires.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
