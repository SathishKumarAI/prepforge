---
qid: ing_2dcef7f523__eli5__local
question: Isn't pass@ k meaningless since you could eventually guess the right answer
  through randomly sampling k times?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 247
total_tokens: 414
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:48:24-05:00'
sources: []
---

Imagine you’re looking for a hidden key in a drawer that contains 1,000 keys. You can try up to **k** keys before giving up.  
If you pick keys at random, the chance of finding the right one is simply *k/1000*. That’s why “pass@k” (the probability of success within k tries) matters: it tells you how many attempts you need to be reasonably sure you’ll hit the target.

In machine learning, a model ranks many possible answers. “Pass@k” measures whether the correct answer appears in its top‑k predictions. It’s not meaningless because:

* **Efficiency** – In real systems you can’t afford to check every single candidate; you only look at the best few.
* **Fair comparison** – Two models that both get 90 % of cases right but one places the right answer higher (smaller k) is usually better for users who want quick, accurate results.

So even though random guessing could eventually succeed with enough tries, “pass@k” captures how well a model performs when you’re limited to only a handful of guesses.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
