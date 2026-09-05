---
qid: ing_2b8b730009__eli5__local
question: 'Explain: URL Mappings Table — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 207
total_tokens: 374
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:44:17-05:00'
sources: []
---

Think of a URL shortener like a tiny post‑office that turns long, fancy addresses into one‑letter nicknames.  
The **URL Mappings Table** is the office’s address book: each row holds two columns—  

* **short_code** (the nickname) – a unique string you give to customers.  
* **long_url** (the real address) – the full web page they want to reach.

When someone creates a short link, the system writes a new entry in this table and gives back the short code. Later, when anyone clicks that code, the system looks it up, reads the long URL, and forwards the browser there.  
Because every code is unique, the table works like a dictionary: fast lookup (often with an index) and no duplicate nicknames. That’s all you need to map the “short” to the “long.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
