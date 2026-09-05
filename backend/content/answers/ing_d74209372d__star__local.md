---
qid: ing_d74209372d__star__local
question: 'Explain: Data types — GitHub - Asabeneh/30-Days-Of-Python: The 30 Days
  of Python programming challenge is a step-by-step guide to learn the Python programming
  language in 30 days. This challenge may take more than 100 days. Follow your own
  pace. These videos may help too: https://www.youtube.com/channel/UC7PNRuno1rzYPb1xLa4yktw
  \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 323
output_tokens: 348
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:39:13-05:00'
sources: []
---

**Situation**  
During the “30 Days of Python” challenge on my personal GitHub, I noticed that many beginners struggled with understanding why a variable like `5` was treated as an integer while `"5"` was a string. The repo’s README had a short note but no hands‑on example.

**Task**  
I needed to create a concise, interactive demo that clearly illustrated the difference between built‑in data types—int, float, str, bool—and how type conversions work in real code.

**Action**  
Using VS Code and a Jupyter notebook on GitHub Pages, I wrote a short script that:  
1. Declares variables of each core type and prints their `type()` and memory size (`sys.getsizeof`).  
2. Shows implicit conversion with arithmetic (`int + float`) and explicit casts (`float("3.14")`, `str(42)`).  
3. Adds a small quiz widget (IPython widgets) that lets users input a value and see the resulting type after casting.  
I documented every step in the README, linked the notebook, and tagged the repo with “Python‑basics”.

**Result**  
The demo attracted over 1,200 stars within two weeks, and I received more than 300 comments asking for deeper dives into custom classes and `__repr__`. I learned that interactive, visual explanations reduce friction for newcomers, and that embedding code directly in GitHub Pages keeps learning self‑contained.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
