---
qid: ing_fd94a2b7cf__eli5__local
question: 'Explain: Idempotency — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 219
total_tokens: 381
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:16:37-05:00'
sources: []
---

**Idempotency in APIs**  
Think of an API like a vending machine that sells a single snack. If you press the “buy” button once, you get one snack; if you press it again, nothing changes—no extra snacks appear and your money isn’t double‑charged. That’s idempotency: no matter how many times you send the same request, the result stays the same after the first successful action.

*API* (Application Programming Interface) is just a set of rules that let one program talk to another—like the vending machine’s button and display telling you what happens when you press it.  
In web services, making an operation idempotent means repeating the request (e.g., “delete this user”) won’t create new users or delete them twice; the system behaves predictably even if the client retries because of a glitch. This keeps data consistent and eases error handling for developers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
