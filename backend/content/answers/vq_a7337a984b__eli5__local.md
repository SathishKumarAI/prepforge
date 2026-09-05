---
qid: vq_a7337a984b__eli5__local
question: What is the use of ‘???’ in Scala-based Applications?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 196
total_tokens: 357
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:23:09-05:00'
sources: []
---

In Scala, `???` is a quick‑and‑dirty way to say “I know this code has to exist, but I’m not writing it yet.”  
Think of building a house: you’ve drawn the walls and roof, but the kitchen cabinets are still missing. You put a placeholder sticker on the spot where the cabinets will go so everyone knows there’s something to fill in later.

When you write `def calculate(x: Int): Int = ???`, Scala compiles the file but throws an exception if that line is ever executed. It lets developers compile and run other parts of the program while they finish the missing logic, and it reminds them (and anyone reading the code) that this method isn’t finished yet.

**Key point:** `???` is not a feature of Scala’s runtime; it’s just a convenient marker for “implement me later.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
