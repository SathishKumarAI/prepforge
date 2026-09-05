---
qid: ing_f2d5e132e5__eli5__local
question: 'Explain: Understanding Non-Determinism in CPU and GPU Microarchitectures'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 240
total_tokens: 403
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:58:55-05:00'
sources: []
---

Imagine a kitchen where chefs (the CPU or GPU cores) follow recipes (instructions). In a deterministic kitchen every chef follows the same exact steps at the same time, so if you start with the same ingredients you always end up with the same dish.  

In real microarchitectures the “kitchen” is noisy:  
* **Out‑of‑order execution** lets chefs swap steps to keep the oven (execution units) busy—like a pastry chef cutting dough while another flips pancakes, so the final timing changes.  
* **Speculation** is when a chef guesses what the next dish will be and starts preparing it early; if the guess was wrong, the prep must be discarded, but the time spent still varies.  

These two mechanisms make the exact sequence of low‑level events unpredictable even if the recipe (program) is identical—this is **non‑determinism**. It’s unavoidable because the hardware optimizes for speed by reordering or guessing work, much like a busy kitchen where chefs must improvise to keep everything moving.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
