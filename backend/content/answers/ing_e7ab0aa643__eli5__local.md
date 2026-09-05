---
qid: ing_e7ab0aa643__eli5__local
question: 'Explain: Kafka Topics and Partitions — The Ultimate Kafka 101 You Cannot
  Miss'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 213
total_tokens: 377
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:42:28-05:00'
sources: []
---

Think of Kafka like a big library where every book is a *topic*—a named stream of messages (like “orders” or “logs”). Inside each book, the pages are *partitions*. Each page can be read and written by only one librarian at a time, but you can have many librarians working on different pages in parallel.  

When a producer writes a message, it chooses which page to put it on (the partition). All messages on that page stay in order, so readers who pull from the same page will see them exactly as they were sent. Consumers form *consumer groups*; each group gets its own copy of every book, but within a group only one librarian reads each page—this guarantees that all members together read every message once.  

So: topics = books (logical streams), partitions = pages (physical slices for parallelism and ordering). This simple map keeps Kafka fast, scalable, and consistent.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
