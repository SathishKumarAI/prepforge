---
qid: ing_0438e2f6b3__eli5__local
question: 'Explain: Browser DNS caching — Why DNS Based Global Server Load Balancing
  (GSLB) Doesn\u2019t Work'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 235
total_tokens: 408
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:42:07-05:00'
sources: []
---

Think of the web as a big phone book that tells your browser where to find a website.  
**DNS (Domain Name System)** is like that phone book – it translates the site’s name into an IP address (the “phone number”).  
When you use **DNS‑based Global Server Load Balancing (GSLB)**, the phone book decides which server’s number to give you based on where you’re calling from.  

The problem is that once your browser has a number, it keeps it in its own little memory cache for minutes or hours. It doesn’t ask the phone book again until the cache expires.  
So if the chosen server goes down or gets overloaded, everyone still calls the old number until their cache clears – they’re stuck with the bad server.  

Because DNS answers only once and browsers don’t refresh often, GSLB can’t react quickly to real‑time traffic changes. A more dynamic system (like a live traffic monitor) is needed for true load balancing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
