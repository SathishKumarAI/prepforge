---
qid: vq_73bdb46ea1__eli5__local
question: In Python, how are arguments delivered by value or reference?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 212
total_tokens: 371
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:16:02-05:00'
sources: []
---

Think of passing arguments like handing out books at a library.  
If you give someone **a copy** of the book (the text inside), they can read and change it without affecting your original volume. That’s “by value.”  
If you hand them the **exact same physical book**, any mark they make stays on that single book, so when they return it, your copy has changed too. That’s “by reference.”  

In Python, everything is an object (a book). When you call a function, Python passes a *reference* to that object – like giving the same book. Inside the function you can re‑bind the name to a new object (like swapping books), but if you modify the object itself (change its pages), the change is seen everywhere that reference exists. So Python arguments are always passed by reference, though objects themselves may behave as immutable “values” when you don’t alter them.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
