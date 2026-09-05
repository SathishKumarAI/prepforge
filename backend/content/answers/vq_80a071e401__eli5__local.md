---
qid: vq_80a071e401__eli5__local
question: What is accumulator in spark?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 154
output_tokens: 187
total_tokens: 341
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:17:53-05:00'
sources: []
---

Imagine you’re baking a huge batch of cookies with a group of friends. Each friend gets a small bowl and drops their finished dough into it. Once all bowls are ready, the master baker pours every bowl’s contents into one giant mixing pot to get the final cookie dough.

In Spark, an **accumulator** works like that big mixing pot. It’s a special variable you create before a job starts. Every worker node can “add” (or *accumulate*) values—like counting bad records or summing bytes—into this shared accumulator without sending all data back to the driver. The driver only sees the final total after the job finishes. Accumulators are write‑only for workers, read‑only for the driver, and they help keep track of global metrics or counters while keeping the processing distributed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
