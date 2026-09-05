---
qid: ing_107a222820__eli5__local
question: 'Explain: Resource Parameter — RFC 8707: Resource Indicators for OAuth 2.0'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 208
total_tokens: 374
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:01:27-05:00'
sources: []
---

Think of an online library that lets you borrow books (OAuth 2.0). The **resource parameter** is like a “book‑label” you attach to your request so the library knows exactly which book you want. In RFC 8707, this label—called a *Resource Indicator*—is a URL that names the target API or data service you’re asking for access to.

When you ask the library (the authorization server) for a key (an access token), you include the book‑label. The library checks that you have permission for that specific book, then gives you a key that only works there. If you try to use the same key at another library, it won’t open anything because the label didn’t match.

So the resource parameter is simply “which service I’m targeting,” ensuring the token is tied to that exact resource and preventing misuse on other services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
