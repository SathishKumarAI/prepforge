---
qid: ing_539bcdae35__eli5__local
question: 'Explain: kappa < 0.6: Poor agreement (rewrite criteria)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 198
total_tokens: 361
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:49:25-05:00'
sources: []
---

Imagine you and a friend are trying to sort a pile of mixed‑colored marbles into red, blue, or green boxes. After both finish, you compare your results. **Kappa** is the score that tells how much better you did than random guessing.

A kappa value **below 0.6** means your sorting and your friend’s sorting agree poorly—think of it as only slightly better than flipping a coin for each marble. In practice, this indicates that the two sets of labels are unreliable or inconsistent: the criteria used to decide “red” versus “blue” are too vague, the observers misunderstand them, or the data itself is noisy.

So, if kappa < 0.6, you should revisit the rules, train the raters more, or clean the data—because the current agreement isn’t trustworthy enough for solid conclusions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
