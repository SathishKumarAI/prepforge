---
qid: ing_40d8ed69c5__eli5__local
question: What are the differences between promises and observables in Angular 8?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 229
total_tokens: 391
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:18:59-05:00'
sources: []
---

Imagine you’re waiting for a pizza delivery.

**Promise** is like ordering a single slice that will arrive once. You place the order, and when the doorbell rings, you get that one slice (or an error if it can’t be delivered). After that, nothing else happens—you can’t ask for more slices or cancel midway.

**Observable** is like having a pizza‑slicing machine in your kitchen. You subscribe to it, and every time the machine cuts a new slice, you receive it instantly. You can keep listening for more slices, stop anytime (unsubscribe), or handle errors while the machine keeps running.

So:  
- **Promise** = one-time value that resolves or rejects once.  
- **Observable** = stream of values over time; you can subscribe/unsubscribe and react to each emission.  

Both are ways to get data asynchronously, but Observables give you ongoing, cancellable streams, while Promises give a single, final result.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
