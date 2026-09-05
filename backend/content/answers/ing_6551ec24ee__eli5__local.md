---
qid: ing_6551ec24ee__eli5__local
question: 'Explain: Sequential I/O — Why is Kafka Fast?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 229
total_tokens: 388
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:16:38-05:00'
sources: []
---

Imagine a library where every book is slid straight down a long conveyor belt to the front desk, one after another. The books never have to be shuffled around or searched for; they just line up in the order they arrive and are handed out as soon as someone takes them. That’s what Kafka does with data.

Kafka stores messages on disk as an append‑only log: new records are written at the end of a file, one after another (sequential I/O). Modern hard drives and SSDs read and write best when data moves in straight lines, so writing is very fast. When readers come, they also read from the same linear stream, jumping directly to where they left off without random seeks. Because every operation follows this simple “push‑and‑pull” pattern, Kafka can handle millions of messages per second with low latency and minimal CPU overhead. In short, Kafka’s speed comes from treating data like a smooth conveyor belt that never stops moving.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
