---
qid: ing_afddb83572__eli5__local
question: 'Explain: Three Consumers — Benchmarking Apache Kafka: 2 Million Writes
  Per Second (On Three Cheap Machines) | LinkedIn Engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 200
total_tokens: 374
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:16:03-05:00'
sources: []
---

Imagine you’re running a very busy post office that can handle two million letters every second, but only on three small, inexpensive mailboxes. The letters are the “writes” and the mailbox is Apache Kafka, a system that queues and delivers messages.

In this experiment, LinkedIn engineers set up three cheap servers (the mailboxes) and filled them with a steady stream of writes—like people dropping off letters nonstop. They measured how many letters each server could accept per second while keeping everything stable and fast. Think of it as a speed test for the post office: can it keep up when traffic is heavy, even on modest hardware?

The key takeaway? Kafka can be surprisingly efficient; with proper tuning, three low‑cost machines can handle two million write operations every second without breaking a sweat. This shows that large data pipelines don’t always need expensive, high‑end servers—just good design and enough parallelism.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
