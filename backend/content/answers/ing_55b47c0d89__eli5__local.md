---
qid: ing_55b47c0d89__eli5__local
question: 'Explain: Resource Parameter — RFC 8707: Resource Indicators for OAuth 2.0
  | RFC Editor'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 207
total_tokens: 376
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:52:39-05:00'
sources: []
---

Think of a library that lets you borrow books (OAuth 2.0) but now it has many branches—each branch holds different kinds of books, and each book can be accessed only from its own branch.  
The *resource parameter* is like the “branch code” you hand to the librarian when you ask for a loan. It tells the library exactly which branch’s catalog (which resource server) you want to talk to, so the librarian can give you the right key (access token).  

In technical terms, the RFC says that every request for an access token should include a *resource indicator*—a URI or identifier that names the target resource server. The server then checks whether the token is allowed for that particular branch before granting access. This keeps tokens from being misused on the wrong branch and makes it clear which part of the system you’re trying to reach.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
