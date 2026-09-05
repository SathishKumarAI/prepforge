---
qid: ing_c07150d327__eli5__local
question: 'Explain: So here we are moving an indentation — Python Full Course for
  Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 215
total_tokens: 378
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:41:41-05:00'
sources: []
---

Imagine a recipe card where each step must be written one line deeper than the previous to show it’s part of the same instruction. In Python, that “deeper” is called **indentation** – a few spaces or a tab at the start of a line. It tells the computer which lines belong together, like a nested set of instructions inside a loop or an if‑statement.

If you shift a line up (remove its indentation) it’s as if you’re taking that step out of the recipe section; the program will treat it as unrelated and may run at a different time. Shifting it down (add spaces) puts it inside another block, so it only runs when that outer condition is true.

Think of indentation like moving a box in a filing cabinet: move it left and it becomes a top‑level file; move it right and it nests under another folder. The computer reads the same way.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
