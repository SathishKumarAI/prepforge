---
qid: ing_6edf99eb94__eli5__local
question: 'Explain: Producer Throughput Versus Stored Data — Benchmarking Apache Kafka:
  2 Million Writes Per Second (On Three Cheap Machines) | LinkedIn Engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 209
total_tokens: 388
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:32:15-05:00'
sources: []
---

Think of a library that prints new books every second and shelves them for future readers.  
**Producer throughput** is how fast the printer can hand out fresh copies (writes per second). **Stored data** is the pile of books already on the shelf. In Kafka, a “producer” pushes messages to a topic; the “throughput” is the rate at which those messages arrive. The “stored data” is what’s kept in Kafka’s partitions—like the library’s shelves that can grow forever if you keep adding books.

The benchmark shows that even on three inexpensive computers, Kafka’s printer (producer) can hand out **2 million new messages each second** while still safely keeping all of them in its “shelves.” The key point is that high throughput does not mean the system must immediately delete old books; it can store a huge backlog and let readers fetch what they need later.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
