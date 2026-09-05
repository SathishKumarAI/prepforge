---
qid: vq_2f83e9f8c5__eli5__local
question: What is the relationship between Int and RichInt in Scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 195
total_tokens: 355
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:07:33-05:00'
sources: []
---

Think of **`Int`** as a regular, everyday calculator that can hold whole numbers up to about ±2 billion.  
When you need more power—say, numbers that could be thousands of digits long—you switch to **`RichInt`**, which is like an advanced scientific calculator with extra buttons.

In Scala, `Int` is the basic type stored in memory (a 32‑bit integer). `RichInt` is a *wrapper* around an `Int`; it adds many helpful methods—like `toDouble`, `abs`, or arithmetic shortcuts—so you can write code more fluently. The wrapper does not change the underlying value; it just provides extra tools.

So, **`RichInt` = “Int with extra features”**: it keeps the same data but lets you call more convenient methods on it.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
