---
qid: ing_07086f8ab7__eli5__local
question: 'Explain: 1.2. Terminology — RFC 8707: Resource Indicators for OAuth 2.0'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 209
total_tokens: 380
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:46:53-05:00'
sources: []
---

Imagine you’re at a big library (the internet) that has many separate sections—fiction, science, archives. Each section is guarded by its own librarian who checks your membership card before letting you borrow books. In OAuth 2.0, the “librarian” is the authorization server and your “membership card” is an access token.

Sometimes you want to read a book that belongs to a different section than the one you’re normally allowed in. The **Resource Indicator** (RFC 8707) is like writing the name of the specific section on the front of the library’s door so the librarian knows exactly which books you’re asking for. It tells the server “I’m not just borrowing any book, I want something from this particular resource area.” This lets a single access token work across multiple protected areas without needing separate tokens for each one, keeping things simple yet secure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
