---
qid: vq_33b5eefff0__eli5__local
question: How can you tell the difference between.py and.pyc files?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 228
total_tokens: 388
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:08:02-05:00'
sources: []
---

Imagine a recipe book that’s written in plain English (the **`.py`** file). Anyone who opens it sees the ingredients, steps, and notes – you can read and edit it directly.

Now picture a second version of the same recipe, but this time the chef has already translated it into a quick‑reference cheat sheet for their kitchen staff (**`.pyc`** file). The cheat sheet contains all the necessary instructions, but it’s written in a shorthand that only the kitchen can understand—no prose, just the exact actions the stove will perform. You can’t read this cheat sheet like the original book; you need a special reader (the Python interpreter) to use it.

So:
- **`.py`** = human‑readable source code.
- **`.pyc`** = compiled bytecode—an efficient, machine‑friendly version created automatically when the `.py` file is run. The compiler turns the readable text into this shortcut so Python can start faster next time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
