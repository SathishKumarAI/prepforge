---
qid: ing_f6ecb75e7f__eli5__local
question: 'Explain: Cookies and Sessions — Cookies vs Sessions vs JWT vs PASETO'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 243
total_tokens: 406
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:05:41-05:00'
sources: []
---

Think of a library that lets you borrow books online.  
*Cookies* are like sticky notes you leave on your desk—small pieces of text (≤4 KB) that the browser stores and sends back with every request so the server remembers “you’re me.”  
*A session* is the librarian’s ledger entry: once the server sees your cookie, it creates a unique ID in memory or a database and keeps all the details (user name, permissions). The cookie just carries that ID.  

*JWT* (JSON Web Token) is a self‑contained passport: it holds user data inside an encrypted JSON string and signs it so the server can verify it without looking up the ledger each time. It’s stateless but still uses a cookie or header to transport it.  

*PASETO* is a newer, safer passport format that follows the same idea as JWT but avoids common pitfalls (like weak signing algorithms).  
In short: cookies store a key, sessions keep data on the server, JWT/PASETO bundle data in the token itself for statelessness and easier scaling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
