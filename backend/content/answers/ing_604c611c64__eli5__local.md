---
qid: ing_604c611c64__eli5__local
question: 'Explain: Antipatterns for partition keys — Choosing the Right DynamoDB
  Partition Key | AWS Database Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 264
total_tokens: 433
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:09:11-05:00'
sources: []
---

Imagine a busy library that uses a single shelf (the *partition key*) to hold all books. If every new book goes on the same spot, the shelf becomes crowded and anyone looking for a title has to dig through a long pile—slow and frustrating. That’s an **antipattern**: putting too many items into one partition.

In DynamoDB, a partition key decides which “bucket” holds data. Good keys spread items evenly across buckets so that reads and writes go straight to the right spot. Bad choices—like using a constant value (“ALL”), timestamps in order, or user IDs that cluster by geography—create hot spots where one bucket gets overloaded, slowing everything.

Think of each bucket as a dedicated librarian. If every book ends up with the same librarian, they’re swamped; but if books are assigned to different librarians based on a balanced trait (e.g., a hash of the title), all librarians work smoothly and the library stays fast. Use a key that varies naturally across your data, not one that repeats or grows linearly, and you keep DynamoDB humming efficiently.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
