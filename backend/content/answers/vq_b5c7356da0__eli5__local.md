---
qid: vq_b5c7356da0__eli5__local
question: HOW DO YOU PREVENT DEADLOCKS?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 249
total_tokens: 406
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:25:05-05:00'
sources: []
---

Imagine a busy round‑about where several cars (threads) want to turn left into the same lane (resource). If every car waits for the next one to move, all of them freeze— that’s a deadlock. To keep traffic flowing, we can use a simple rule: **only let a car enter the round‑about if it knows how many lanes will be free when it arrives**. In programming terms, you prevent deadlocks by:

1. **Ordering resources** – every thread always locks them in the same global sequence (e.g., lock file A before file B).  
2. **Avoiding nested waits** – a thread should not hold one lock while trying to acquire another; it releases or requests all at once.  
3. **Using timeouts** – if a thread can’t get a needed lock quickly, it backs off and retries later.

These steps are like giving every driver a clear, consistent map of the round‑about, so no car waits forever for the one next to it.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
