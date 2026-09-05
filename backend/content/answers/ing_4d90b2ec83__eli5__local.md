---
qid: ing_4d90b2ec83__eli5__local
question: 'Explain: Web and APIs — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 212
total_tokens: 372
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:40:07-05:00'
sources: []
---

Think of a web API as sending a postcard (UDP) or a certified letter (TCP).  
With **UDP** you just drop the postcard into a mailbox: it’s fast and cheap, but if the post office gets busy or the mail carrier drops it, you never know—no guarantee it arrives. That’s useful when speed matters more than certainty, like streaming live video where a few lost packets are acceptable.  

With **TCP** you send a certified letter that must be signed for on delivery. The system keeps checking: “Did the recipient get it?” If not, it resends until the receiver confirms receipt. This guarantees that every piece of data arrives in order and intact—essential for critical tasks like online banking or file uploads where mistakes are unacceptable.

In system design, pick UDP when you need low latency and can tolerate loss; choose TCP when correctness and reliability must be assured.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
