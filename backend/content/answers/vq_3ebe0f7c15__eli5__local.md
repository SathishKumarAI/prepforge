---
qid: vq_3ebe0f7c15__eli5__local
question: Q18- What’s the F1 score? How would you use it?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 230
total_tokens: 394
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:08:59-05:00'
sources: []
---

Think of an email filter that marks spam.  
Two things matter:  

* **Precision** – when the filter says “spam,” how often is it really spam?  
* **Recall** – out of all the real spam emails, how many did the filter catch?

The F1 score is like a single “overall grade” for this trade‑off. It’s the harmonic mean of precision and recall:  

\[
F1 = 2 \times \frac{\text{precision} \times \text{recall}}{\text{precision} + \text{recall}}
\]

If you only care about catching every spam email (high recall) but also want to avoid false alarms (high precision), the F1 score tells you how well the filter balances both.  
Use it when you need a single number that reflects both accuracy types—common in classification tasks where missing an important case or flagging too many is costly. It’s especially handy when classes are imbalanced, like rare disease detection.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
