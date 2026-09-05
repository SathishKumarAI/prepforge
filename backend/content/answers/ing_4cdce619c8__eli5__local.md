---
qid: ing_4cdce619c8__eli5__local
question: 'Explain: Endpoint: POST /shorten — Design URL Shortener | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 244
total_tokens: 413
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:38:50-05:00'
sources: []
---

Think of a URL shortener like a *mailroom in a huge office building*.  
When someone wants to send a letter (the long URL), they hand it to the mailroom clerk (your POST /shorten endpoint). The clerk writes down a tiny, unique code on an envelope—this is the **short code**. That code becomes the new address people will use.  

The clerk’s job has two parts:  
1. **Generate a short code** that never repeats and fits in a few characters (just like giving each letter a one‑word label).  
2. **Store the mapping** between the short code and the original long URL in a quick lookup table (the clerk keeps a list of who sent what).  

When someone later “opens” the envelope, they send the short code back to the mailroom (a GET request). The clerk looks it up in the list and forwards them straight to the original letter’s destination—just as your system redirects the user to the full URL. This simple, reliable process keeps the office running smoothly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
