---
qid: ing_fb9e03cf09__eli5__local
question: 'Explain: Number formats — Release notes | Zod'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 269
total_tokens: 427
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:13:28-05:00'
sources: []
---

Think of Zod’s “number formats” like a toolbox for building safe, predictable programs.  
When you ask Zod to check a value is a number, it can also enforce extra rules—just as a carpenter might insist on wood that is straight, not warped.  

* **`int()`** – forces the value to be an integer (whole number). Imagine a ruler that only shows whole inches; anything with decimals gets rejected.  
* **`min(n)` / `max(m)`** – set lower and upper bounds. It’s like a speed limit sign: values below or above are not allowed.  
* **`positive()` / `negative()`** – require the number to be strictly greater than zero or less than zero, similar to a “no negative balance” rule in banking.  
* **`lt(n)` / `gt(m)`** – “less than” and “greater than” are strict; they exclude equality, just as a door that opens only if you’re smaller than the frame.  

These helpers let you declare, in code, exactly what kind of number you expect—integers, ranges, signs—so your program can trust its inputs from the start.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
