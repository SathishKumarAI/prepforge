---
qid: ing_36958dab52__eli5__local
question: 'Explain: Kafka Consumer — The Ultimate Kafka 101 You Cannot Miss'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 235
total_tokens: 396
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:02:10-05:00'
sources: []
---

Imagine a huge library that keeps adding new books every second—this is your Kafka cluster. Every book has a shelf number (a *topic*) and pages are split into small sections called *partitions*. A *consumer* is like a diligent librarian who reads those pages.

When you start a consumer, you tell it which shelves (topics) to read from. The librarian then goes to each page section in order, taking the newest unread page each time—this is the **polling** step. If several librarians are working together, they split the work by assigning different page sections to each one; this is called a *consumer group* and ensures no two librarians read the same page.

The librarian keeps track of where she left off with a bookmark (the **offset**) stored in Kafka itself. If she stops or crashes, she can pick up exactly where she stopped when she returns. That’s the essence of a Kafka consumer: a reliable reader that walks through a constantly growing stream of data, keeping its place so nothing is missed or duplicated.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
