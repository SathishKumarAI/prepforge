---
qid: vq_4a5ff2b3ad__eli5__local
question: WHAT IS OPTIMISTIC VS. PESSIMISTIC LOCKING?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 226
total_tokens: 388
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:10:36-05:00'
sources: []
---

Imagine you’re sharing a kitchen with friends who all want to bake cookies at the same time.

**Pessimistic locking** is like putting a sign on the oven that says “Busy” and making everyone wait until it’s free. You assume someone else will try to use it, so you lock it early to avoid any clash.  
**Optimistic locking** is more relaxed: you let people start baking without checking first. Only when they finish do you look at the oven’s status. If nobody else used it in the meantime, your cookies stay safe; if someone did, you’re forced to redo that batch.

In computer terms, a *lock* prevents two processes from changing the same data simultaneously. Pessimistic locking acquires the lock before touching the data, assuming conflicts will happen. Optimistic locking lets many read or write freely and checks for conflicts only at commit time, retrying if needed. Both keep data consistent but trade off speed versus safety.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
