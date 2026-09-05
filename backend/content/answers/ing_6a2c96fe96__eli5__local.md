---
qid: ing_6a2c96fe96__eli5__local
question: 'Explain: How to Choose the Number of Topics/Partitions in a Kafka Cluster?
  | Confluent'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 229
total_tokens: 397
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:24:23-05:00'
sources: []
---

Imagine your Kafka cluster as a large library with many bookshelves (partitions). Each book (message) needs a shelf that fits its size and how often it’s checked out (load). Choosing the right number of shelves is like picking the right number of topics: you want enough to keep the library organized, but not so many that people waste time looking for books.

Think of each topic as a genre—fiction, history, science. If you have too few genres, all books crowd together and readers can’t find what they need; if you have too many, the shelves become thin and the librarian (Kafka) spends extra effort moving books around. A good rule is to start with one partition per broker for high throughput, then add more when you see a single topic’s load exceeding its capacity or when you want finer control over where data lives.

In short: pick enough topics/partitions so that each can handle the expected message rate and storage without becoming a bottleneck, but keep it simple enough to avoid excessive coordination overhead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
