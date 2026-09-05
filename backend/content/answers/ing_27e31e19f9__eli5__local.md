---
qid: ing_27e31e19f9__eli5__local
question: You are swapping the model behind a live feature. Walk me through shadow,
  canary and A/B. When do you use each?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 280
total_tokens: 454
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:38:57-05:00'
sources: []
---

Think of a new recipe (the model) being added to a busy kitchen that serves a popular dish (the live feature).  
**Shadow testing** is like letting the chef cook the new dish in a separate, invisible station while all customers still get the old version. The kitchen records every bite’s taste score and compares it with the original—no one notices anything different. Use shadow when you want to see how the new model behaves on real traffic without affecting users at all.

**Canary releases** are like serving the new dish to a small, invited table while everyone else keeps getting the old menu. If those guests complain or love it, you can gradually add more tables. Canary is handy when you need quick feedback and want to catch problems before full exposure.

**A/B testing** is like splitting the whole restaurant: half of the customers receive the new dish, half get the old one. You then compare their satisfaction scores side‑by‑side. Use A/B when you truly need statistical proof that the new model improves or changes user experience compared to the baseline.

So: shadow for silent validation, canary for staged rollout, and A/B for decisive comparison.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
