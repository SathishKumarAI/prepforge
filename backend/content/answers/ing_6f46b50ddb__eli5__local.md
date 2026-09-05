---
qid: ing_6f46b50ddb__eli5__local
question: 'Explain: Jay Kreps April 27, 2014 — Benchmarking Apache Kafka: 2 Million
  Writes Per Second (On Three Cheap Machines) | LinkedIn Engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 185
total_tokens: 367
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:32:37-05:00'
sources: []
---

Imagine you’re running a tiny post‑office with three very modest mailboxes (the “cheap machines”). Each day, people write letters and drop them into the mailbox. In this experiment, Jay Kreps wanted to see how many letters per second those mailboxes could handle before they clog up.

He used Apache Kafka, which is like a super‑fast, reliable line that keeps all the letters in order so anyone can pick them up later. By sending millions of tiny “write” messages—each one a single letter—into Kafka on three ordinary computers, he measured how many could be processed every second.

The result? About 2 million writes per second across the three boxes, proving that even inexpensive hardware can handle huge traffic if you use the right system. It’s a practical test of speed and scalability for real‑world data pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
