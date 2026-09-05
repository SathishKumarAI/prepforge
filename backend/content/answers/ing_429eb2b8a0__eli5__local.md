---
qid: ing_429eb2b8a0__eli5__local
question: 'Explain: Clients — Design URL Shortener | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 229
total_tokens: 393
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:21:57-05:00'
sources: []
---

**Clients in a URL‑Shortener design**

Think of the service like a *mail delivery office*. The **clients** are the people who write letters (or, here, URLs) and send them to the office. They could be web browsers, mobile apps, or other services that need a short link. Each client talks to the office through a simple “request” – just as you’d hand your letter to a clerk.

When a client asks for a shortened URL, it sends its long address (the “letter”) over the network. The office (our system) creates a tiny code (like a stamp), stores the mapping in a database, and returns that code back to the client. The client can then share or use this short link as needed.

So, in design terms: **clients = any external program that calls our API**—they’re the front‑door users of your URL‑shortening service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
