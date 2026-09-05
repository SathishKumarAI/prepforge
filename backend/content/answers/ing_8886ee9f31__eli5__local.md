---
qid: ing_8886ee9f31__eli5__local
question: 'Explain: Summary — HTTP/HTTPS | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 222
total_tokens: 380
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:12:47-05:00'
sources: []
---

Think of a machine‑learning model as a kitchen that prepares recipes (predictions) from ingredients (data).  
When you want to order food, you send an *order* through the **HTTP** “doorway”: it’s like writing a letter in plain paper—easy to read but anyone who sees it can read what you’re ordering.  
If the doorway is upgraded to **HTTPS**, that letter gets wrapped in a *sealed envelope*. Only the kitchen and you can open it; outsiders can’t peek at your order or tamper with it.  

In system design, HTTP/HTTPS are the protocols that let front‑end apps talk to back‑ends (model servers).  
*HTTP* is simple but insecure; *HTTPS* adds encryption (TLS) so data stays private and intact while traveling across networks. This matters when sensitive inputs or model weights move between services—just like keeping a secret recipe safe from prying eyes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
