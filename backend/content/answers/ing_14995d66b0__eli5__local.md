---
qid: ing_14995d66b0__eli5__local
question: 'Q40: When would you use Self-Consistency vs Best-of-N sampling?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 225
total_tokens: 388
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:07:53-05:00'
sources: []
---

**Self‑Consistency vs. Best‑of‑N sampling**

Imagine a chef who must choose the best recipe from a set of ideas.

* **Best‑of‑N sampling** is like the chef whipping up *N* different dishes at random and then picking the tastiest one. Each dish is independent, so the chef might end up with an odd or inconsistent flavor because the recipes were chosen without regard to each other.

* **Self‑Consistency** is a bit smarter: the chef first makes one dish, tastes it, and then tweaks the same recipe multiple times while keeping the core structure intact. The final choice is the most consistent version of that single idea. This reduces surprises and keeps the flavor coherent.

Use **Best‑of‑N** when you want diverse, unrelated options (e.g., exploring many story endings). Use **Self‑Consistency** when you need a reliable, well‑polished answer from one underlying concept (e.g., a precise math solution).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
