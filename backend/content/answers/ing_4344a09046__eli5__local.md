---
qid: ing_4344a09046__eli5__local
question: 'Explain: kappa < 0.6: Poor agreement (rewrite criteria)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 222
total_tokens: 385
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:23:08-05:00'
sources: []
---

Think of two friends trying to sort a pile of apples and oranges into the same baskets. If they both put almost everything in the right basket, you feel confident that their sorting is reliable. The **kappa** value measures this reliability: it tells us how much better their agreement is than random chance.

- **Kappa ≥ 0.8:** “Excellent” – like friends who almost always match; only a few misplacements.
- **0.6 ≤ Kappa < 0.8:** “Good to moderate” – they agree most of the time but still make some mistakes.
- **Kappa < 0.6:** **“Poor agreement.”** This means their sorting is no better than guessing, and you can’t trust that they’re consistently labeling items the same way.

So when kappa falls below 0.6, it signals that the two judges (or algorithms) are not reliably aligned; the results should be questioned or improved.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
