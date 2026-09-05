---
qid: ing_74f5e16c74__eli5__local
question: 'Explain: Discord Migrates Trillions of Messages from Cassandra to ScyllaDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 224
total_tokens: 389
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:42:14-05:00'
sources: []
---

Imagine a huge library that stores every book you’ve ever written in one massive, old‑school filing cabinet (Cassandra). The cabinets are reliable but slow when many people try to pull out books at once. Discord decided it’s time for a new, faster bookshelf—ScyllaDB—because it can hold the same books and let everyone read them much quicker.

Migrating “trillions of messages” is like moving every single book from the old cabinets into the new shelves without losing any titles or pages. The process copies each book (message) to the new place, checks that the copy matches the original, then switches all readers over so they now pull books from ScyllaDB instead of Cassandra.

Cassandra and ScyllaDB are both “NoSQL databases,” meaning they store data in flexible key‑value pairs rather than rigid tables. The migration keeps Discord’s chat history intact while giving it a much faster, more scalable home.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
