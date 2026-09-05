---
qid: ing_4a4e1f5dbe__eli5__local
question: 'Explain: End-to-end Latency — Benchmarking Apache Kafka: 2 Million Writes
  Per Second (On Three Cheap Machines) | LinkedIn Engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 218
total_tokens: 395
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:34:39-05:00'
sources: []
---

Imagine you’re mailing postcards in a town where everyone can write, send, and receive them at the same time. **End‑to‑end latency** is how long it takes one postcard to travel from the sender’s desk all the way to the receiver’s mailbox—no matter what happens inside the postal office.  

In the LinkedIn study, they used **Apache Kafka**, a high‑speed “post office” that stores messages in large piles called *topics*. The researchers put three modestly priced servers together (the cheap machines) and let them write 2 million postcards every second—*writes per second* is just how many messages the system can accept each second. They measured end‑to‑end latency to see if a postcard could still arrive quickly even when the office was handling that massive traffic, proving Kafka can stay snappy on ordinary hardware.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
