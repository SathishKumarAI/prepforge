---
qid: ing_4ffa2cebaa__eli5__local
question: 'Explain: Security Considerations — RFC 8707: Resource Indicators for OAuth
  2.0'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 222
total_tokens: 389
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:43:46-05:00'
sources: []
---

Imagine you’re a librarian who lets people borrow books (OAuth tokens) from your library, but the books are stored on different shelves (different servers).  
If someone just says “I want a book,” they could be handed any book from any shelf—maybe even one that belongs to another library.  
RFC 8707 is like a sign you put on each shelf that tells the librarian exactly which shelf’s books the borrower wants.  

The **resource indicator** is this sign: it’s a tiny URL in the token request that says “I need a book from Shelf A, not Shelf B.”  
Because the signer (the authorization server) sees this indicator before issuing the token, it can refuse to give you a token for a shelf it doesn’t own.  

So, with resource indicators, you avoid accidental or malicious borrowing of data that belongs elsewhere—keeping your tokens and data safely tied to their rightful “shelf.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
