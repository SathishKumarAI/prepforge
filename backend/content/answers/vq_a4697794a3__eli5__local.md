---
qid: vq_a4697794a3__eli5__local
question: What is the difference between val and var in Scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 195
total_tokens: 354
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:22:52-05:00'
sources: []
---

Think of Scala’s **`val`** and **`var`** like a notebook that you keep on your desk.

* **`val` (value)** is a page that you write once and never change again. Once the information is there, it stays exactly as you set it—no one can rewrite or delete it later.  
* **`var` (variable)** is a sticky‑note that you can move around, edit, or replace whenever you need.

So, when you declare something with `val`, you’re promising to Scala that the data will be immutable (unchangeable). With `var`, you allow the data to change over time. In most clean code, you prefer `val` because it makes programs easier to reason about and less error‑prone—just like a permanent note in your notebook stays reliable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
