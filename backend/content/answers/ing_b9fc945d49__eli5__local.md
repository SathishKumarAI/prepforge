---
qid: ing_b9fc945d49__eli5__local
question: 'Explain: Introduction — RFC 8707: Resource Indicators for OAuth 2.0'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 229
total_tokens: 394
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:32:01-05:00'
sources: []
---

Imagine you’re borrowing a library book, but the library has many sections—fiction, science, history—and each section has its own checkout desk. Normally, when you ask for a book (the “resource”), you just give your library card and the system assumes you mean any book. RFC 8707 is like adding a small sticker to your request that says *“I want a book from the science section.”* That sticker is called a **resource indicator**.

In OAuth 2.0, a client (the app) asks an authorization server for permission to access user data (the resource). Without a resource indicator, the server might grant broad or wrong permissions. By attaching the indicator—just a URL that names the exact API endpoint—the server knows exactly which part of the user’s data is requested and can give only the needed token. Thus, clients get precise, safer access, just as you get the right book from the correct desk.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
