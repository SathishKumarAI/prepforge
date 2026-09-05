---
qid: ing_bec7a6f64c__eli5__local
question: 'Explain: Implement a thread-safe batching logger: many producer threads
  call `log(msg)`, and a background thread flushes batches of up to 100 messages every
  second or when full, whichever comes first.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 212
total_tokens: 400
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:39:30-05:00'
sources: []
---

Imagine a busy kitchen where many chefs (producer threads) drop their finished dishes (log messages) onto a communal counter. A single waiter (background thread) watches the counter and decides when to serve the table. The waiter has two rules:  

1. **Time rule:** Every second, he takes whatever dishes are on the counter and brings them to the table.  
2. **Full‑tray rule:** If the tray holds 100 dishes before a second passes, he rushes to the table immediately, even if the time hasn’t come yet.

The “counter” is a thread‑safe queue that lets chefs add dishes without stepping on each other’s toes (using locks or atomic operations). The waiter pulls batches from this queue, ensuring no dish gets lost or served twice. Thus, all messages are collected in chunks of up to 100 and delivered either when the chunk fills or once per second—whichever happens first.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
