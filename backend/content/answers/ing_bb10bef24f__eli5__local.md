---
qid: ing_bb10bef24f__eli5__local
question: 'Explain: CDC Approaches — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 222
total_tokens: 385
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:33:42-05:00'
sources: []
---

Imagine you’re watching a chef cook a big pot of soup. Every time the chef adds an ingredient, you jot it down on a notepad so you can later know exactly what went into the dish without having to taste it again. In computing, *Change Data Capture* (CDC) does the same for databases: instead of copying entire tables every day, CDC records only the changes—new rows, edits, or deletions—as they happen.

When building a machine‑learning system that learns from live data, you want those notes in real time so your model can update instantly. A “CDC approach” is simply the method you use to take those change notes and feed them into your ML pipeline: you might stream them through a message queue (like Kafka) or write them to a log file that a worker reads.

So, CDC is the chef’s notepad; the chosen approach is how you read that notepad—fast enough for your model to stay fresh.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
