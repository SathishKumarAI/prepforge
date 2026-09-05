---
qid: ing_ee33c44690__eli5__local
question: 'Explain: Example Workflow — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 215
total_tokens: 380
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:52:16-05:00'
sources: []
---

Imagine you’re building a **post‑office** that turns long, fancy letters (your original URLs) into tiny postcards (short links).  
1. **Collect the request** – A user hits “Shorten” and sends us their full address.  
2. **Create a unique code** – We generate a short ID (like stamping a postcard with a one‑letter code).  
3. **Store the pair** – In our database we keep *code → original URL* so later we can look it up, just like a post office keeps a ledger of which postcard goes where.  
4. **Redirect** – When someone clicks the short link, we read the code, find the long address in the ledger, and send them there—no extra cost or delay.  

That’s the whole workflow: request → encode → store → redirect, all kept simple so the system stays fast and reliable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
