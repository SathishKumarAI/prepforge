---
qid: ing_444fd2c131__eli5__local
question: 'Explain: Introduction — RFC 8707: Resource Indicators for OAuth 2.0 | RFC
  Editor'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 212
total_tokens: 380
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:24:57-05:00'
sources: []
---

Imagine you’re at a library where every book is in its own room. When you ask the librarian (the “authorization server”) for a key, you must tell her which room’s books you want—otherwise she might give you a key that opens a different room by mistake.

RFC 8707 adds this “room‑label” step to OAuth 2.0. The label is called a *resource indicator*: a short URL (or other identifier) that tells the authorization server exactly which protected resource the client wants to access. The server then checks whether you’re allowed for that specific room and, if so, issues a token that only works there.

So, just as a library uses room numbers to prevent mix‑ups, RFC 8707 lets OAuth keep tokens tied to the right “resource” so clients can’t accidentally or maliciously use them elsewhere.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
