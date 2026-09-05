---
qid: ing_8b1422f2fe__eli5__local
question: 'Explain: Lag — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 220
total_tokens: 381
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:16:53-05:00'
sources: []
---

Think of a newsroom that copies every headline from the world’s newspapers to its own bulletin board.  
**Lag** is how long it takes before a new headline appears on your board after it first shows up in the original paper.

In **Change Data Capture (CDC)**, the “world newspaper” is your database and the “bulletin board” is the downstream system that needs the updates. CDC watches for every edit—insert, update, delete—and writes those changes to a log (the “copying machine”).  
If the copying machine is busy or the network is slow, the log entry will sit in a queue before it reaches the bulletin board. That waiting time is lag.

Designers minimize lag by: keeping the copy machine lightweight, batching many changes into one write, and giving the downstream system a fast “reading arm.” The goal is to keep the bulletin board almost as fresh as the original newspaper—just a few milliseconds behind at most.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
