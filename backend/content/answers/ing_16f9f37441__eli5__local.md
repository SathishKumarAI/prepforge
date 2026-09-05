---
qid: ing_16f9f37441__eli5__local
question: 'Explain: TTLs and Purging — Content Delivery Network (CDN) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 203
total_tokens: 369
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:12:01-05:00'
sources: []
---

Think of a CDN like a library that copies books from the main branch so readers can get them quickly no matter where they are.  
*TTL (Time‑to‑Live)* is the book’s “borrow time.” When a copy arrives, it gets a stamp saying how long it stays in the local shelf before it must be checked back to the main library. After that time, the copy is automatically removed—just as a borrowed book would be returned if you forget.

*Purging* is like an emergency return: if the main branch updates the book (new edition or correction), the library staff can instantly send a “remove all copies” order to every local shelf so readers get the fresh version right away, even before their normal TTL expires.  

So, TTLs give automatic freshness windows; purging lets you force instant updates when something urgent changes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
