---
qid: ing_daf3839af3__eli5__local
question: 'Explain: That''s pretty expensive to keep in the — Google I/O 2009 - Google
  Wave: Under the hood'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 242
total_tokens: 413
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:20:57-05:00'
sources: []
---

Think of a big library that’s open all day. Every book (data) you want to read must be on a shelf, and every time someone looks at it the librarian has to pull it out, check its location, and hand it over. If the library is tiny, this is quick; but if it’s huge—millions of books—then pulling each one takes time and effort.

In Google Wave (the 2009 project), the “books” are pieces of conversation data that live on servers. Keeping every piece in memory all the time would be like having a librarian for every book, which costs CPU power, RAM, and electricity. The system instead stores most books on disk or in a database, only loading them into memory when needed. That saves money (less hardware) and keeps the service fast enough for millions of users.

So “that’s pretty expensive to keep in the—” means it would cost too much resources to hold all that data in active memory at once; smarter systems load it on demand instead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
