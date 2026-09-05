---
qid: ing_df639a0faf__eli5__local
question: 'Explain: Consumer Throughput — Benchmarking Apache Kafka: 2 Million Writes
  Per Second (On Three Cheap Machines) | LinkedIn Engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 277
total_tokens: 452
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:29:25-05:00'
sources: []
---

Imagine a library that can only hold one book at a time, but you want to lend out millions of books every second. The trick is not to make the shelves bigger; instead, you use three tiny workers who each grab a book, stamp it, and hand it back to the shelf instantly. “Consumer throughput” in this context means how many of those stamped books (messages) the library can hand out per second when all three workers are busy.

In the LinkedIn study, they set up an Apache Kafka cluster—think of Kafka as that library—on three inexpensive servers. They wrote 2 million messages a second into Kafka and measured how quickly consumers could read them back. The result showed that even with modest hardware, the system can stream data at a rate comparable to a high‑end production line.

Key terms:
- **Kafka**: A messaging system that stores streams of records (like books) in “topics.”
- **Consumer**: An application that reads records from Kafka.
- **Throughput**: The number of records processed per second.

So, the headline tells us: with just three cheap machines, a well‑tuned Kafka setup can handle 2 million writes and reads each second—proof that scaling is more about smart design than expensive hardware.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
