---
qid: ing_936f029754__eli5__local
question: 'Explain: 2.2. Access Token Request — RFC 8707: Resource Indicators for
  OAuth 2.0'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 272
total_tokens: 444
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:31:24-05:00'
sources: []
---

Think of an online library that lets you borrow books (the “resource”). To get a book you first need a library card (an access token). RFC 8707 says the card can carry extra notes called *resource indicators* that tell the library exactly which book or section you want, so it can hand out the right copy quickly.

**Resource indicator** – a piece of information attached to an access‑token request that names the specific resource (e.g., “FinanceReports/2024”) you wish to reach.  
**Access token request** – the message you send to the library’s gatekeeper asking for a card that lets you read that book.

When you ask for a card, you include the resource indicator in your request. The gatekeeper checks that you’re allowed to see that particular book and, if so, issues a card that is valid only for that book. This keeps other people from using your card on different books, just as a library card with a “no‑borrow‑outside‑fiction” stamp limits where it can be used.

So, RFC 8707 adds a clear “book name” to the token request, making sure you get exactly the right key for the resource you need.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
