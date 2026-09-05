---
qid: ing_bfa95a7535__eli5__local
question: 'Explain: 1.2. Terminology — RFC 8707: Resource Indicators for OAuth 2.0
  | RFC Editor'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 215
total_tokens: 389
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:40:40-05:00'
sources: []
---

Think of an online library that lets you borrow books (OAuth 2.0).  
Before you can check out a book, the librarian must know which exact shelf (resource server) it belongs to.  
RFC 8707 is like a “shelf‑identifier” card that travels with your borrowing request.  

**Resource Indicator**: a tiny URL or identifier that tells the authorization server exactly *which* resource you want to access.  
When you ask for a book, you attach this card; the librarian (auth server) reads it and knows whether you’re allowed to borrow from that shelf.

If no card is attached, the librarian assumes you mean the default shelf—just as OAuth 2.0 without an indicator defaults to its “home” resource server.  
So, a Resource Indicator is simply a way to point out the target resource in a request, ensuring the right permissions are checked for the right place.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
