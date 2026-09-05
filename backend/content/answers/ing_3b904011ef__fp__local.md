---
qid: ing_3b904011ef__fp__local
question: Your eval reports 82% pass on 100 examples. What does that number not tell
  you?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 381
total_tokens: 560
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:11:35-05:00'
sources: []
---

An **82 % pass** on a hand‑picked set of 100 prompts is simply the *empirical mean* of success indicators over that sample.  
From first principles it tells you only that, under the *specific* conditions of those examples, the probability of passing is about 0.82.  

Why this matters: each prompt is a random draw from an underlying distribution \(D\) of real‑world inputs. The observed proportion is an unbiased estimator \(\hat p = X/n\), but its variance is \(\frac{p(1-p)}{n}\). With \(n=100\) the 95 % confidence interval is roughly \([0.72,\,0.92]\). Thus you can’t be sure the true pass rate isn’t anywhere in that band; a single extra fail could drop it below 80 %.  

Moreover, the *selection* of examples (often “hard” or “easy”) introduces bias: if the test set over‑represents edge cases, \(\hat p\) will under‑estimate real performance; if it’s too smooth, it will over‑estimate. The metric also ignores **distribution shift**—the model may pass 82 % on these prompts but fail catastrophically on unseen contexts.

**Non‑obvious insight:** an 82 % figure masks the *shape* of the error distribution. A single catastrophic failure can be invisible in a mean, yet it could dominate real‑world risk. Therefore, alongside the average you must examine variance, tail behavior, and robustness to domain shifts to truly gauge model reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
