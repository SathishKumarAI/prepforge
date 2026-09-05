---
qid: ing_ae8927c970__eli5__local
question: 'Explain: When User B comes back online — Design WhatsApp | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 227
total_tokens: 395
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:14:08-05:00'
sources: []
---

Imagine a library that keeps a list of books each reader wants to read. When Reader B leaves the library (goes offline), the library simply marks “Reader B is away.” If someone else borrows that book while B is gone, the library notes the loan but does not tell B until she returns.  

When Reader B comes back online, the library checks its list: it sees all books that were borrowed or messages queued for her during her absence. It then hands those books (messages) to her in one go, so she catches up with everything that happened while she was away.  

In WhatsApp terms, “offline” means no active socket connection. The server stores any new messages in a queue or database. When the user reconnects, the server pulls that queued data and pushes it over the now‑reestablished connection. This guarantees reliable delivery without having to keep a constant stream alive while the user is away.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
