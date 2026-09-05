---
qid: ing_990139ed1d__eli5__local
question: 'Explain: RFC 8707 : Resource Indicators for OAuth 2.0'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 204
total_tokens: 367
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:40:18-05:00'
sources: []
---

Imagine you’re in a big library where every book is a protected resource (like a photo, a file, or a user profile). OAuth 2.0 is the librarian’s card system: it lets you borrow books by showing your ID and getting a “borrow ticket” (an access token).  

RFC 8707 adds a small note to that ticket called a *resource indicator*. It says, “Hey, this ticket is only for Book #42, not for every book in the library.” This prevents someone who stole a ticket from borrowing any random book. The indicator is just a short URL or identifier attached to the token when you ask for it, and the server checks that the requested resource matches the indicator before handing over the content.

So, the resource indicator is like a bookmark on your borrow‑ticket that locks it to one specific section of the library, keeping access tight and predictable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
