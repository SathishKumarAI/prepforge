---
qid: vq_de9a3561b1__eli5__local
question: What Does the ‘is’ Operator Do?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 223
total_tokens: 379
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:31:10-05:00'
sources: []
---

Think of every object in Python as a unique book on a shelf.  
*Equality* (`==`) asks, “Do these two books have the same title and author?” Two different copies can still look identical.  
The *identity* operator `is` asks, “Are we looking at the very same physical book?” It checks whether both variables point to the exact same spot in memory.

Imagine you have a library card (the variable) that refers to a particular book. If two cards refer to the same book, they are **identical** (`card1 is card2`). If they refer to different copies that happen to be identical in content, `==` will be true but `is` will be false.

So, `is` tells you whether two references name the very same object, not just objects that look alike. This matters for singletons (e.g., `None`) and when you want to guarantee no accidental copies are involved.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
