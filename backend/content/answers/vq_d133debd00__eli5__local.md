---
qid: vq_d133debd00__eli5__local
question: What is Unit in Scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 154
output_tokens: 204
total_tokens: 358
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:29:03-05:00'
sources: []
---

In Scala, **`Unit`** is the language’s answer to “nothing useful returned.”  
Think of a vending machine that only dispenses a snack and doesn’t give you any money back. The snack is the work the machine did; the empty slot where change would appear represents `Unit`.  

When a function in Scala does something but has no meaningful value to hand back—like printing text, writing a file, or updating a database—it returns `Unit`. You can imagine `Unit` as a tiny, invisible box that says *“I finished the job; there’s nothing else to give you.”*  

So, if you see a method declared as `def log(msg: String): Unit`, it means “log this message and then…that’s all; don’t expect a result.” It’s just Scala’s way of saying “no value here.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
