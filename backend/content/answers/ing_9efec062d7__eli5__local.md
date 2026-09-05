---
qid: ing_9efec062d7__eli5__local
question: 'Explain: Common Queue Patterns — Message Queues | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 231
total_tokens: 391
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:49:34-05:00'
sources: []
---

Think of a message queue like a well‑organized mailroom in a busy office building.  
**What is a message queue?** It’s a place where “letters” (data) are dropped off and later picked up by “workers” (services).  

1. **Point‑to‑point (FIFO)** – Like a single mailbox: one employee reads the letter, then it disappears.  
2. **Publish/Subscribe** – Imagine posting an announcement on a notice board; every employee who cares will read it. The message stays until all interested workers have seen it.  
3. **Dead‑letter queue** – If a worker can’t process a letter (maybe the address is wrong), the mailroom moves it to a special “back‑log” folder so humans can investigate later, instead of losing it.  

Using these patterns lets systems keep traffic flowing smoothly, avoid bottlenecks, and recover gracefully from hiccups—just like a good mailroom keeps an office running.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
