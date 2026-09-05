---
qid: ing_d2b4ef757a__eli5__local
question: What is an ensemble method? — What is the difference between Bagging and
  Boosting? | Quantdare
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 263
total_tokens: 433
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:09:03-05:00'
sources: []
---

Imagine a jury deciding on a verdict. Each juror (a *model*) weighs evidence differently; some might over‑react to one piece of testimony, others may miss subtle clues. An **ensemble method** is like combining all those opinions into a single decision—usually more reliable than any lone juror.

There are two common ways to combine the jurors:

* **Bagging (Bootstrap Aggregating)** – Think of giving each juror a shuffled copy of the evidence, so they see slightly different facts. They then vote independently, and we take the majority vote or average their scores. Bagging reduces *variance*: it smooths out wild swings by averaging many independent opinions.

* **Boosting** – Now imagine the jury works in rounds. After each round, the juror who made a mistake is told exactly where they went wrong and given more weight for the next round. Later jurors focus on the hard cases that earlier ones missed. Boosting reduces *bias*: it keeps improving the decision by concentrating effort on the toughest examples.

So bagging spreads the load to many independent models, while boosting builds a stronger model step by step by learning from past mistakes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
