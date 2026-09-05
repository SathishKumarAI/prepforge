---
qid: vq_95eebafee1__eli5__local
question: What does it mean to have "imbalanced data"?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 210
total_tokens: 368
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:20:48-05:00'
sources: []
---

Imagine you’re trying to teach a robot how to spot apples in a basket. If the basket has 95% oranges and only 5% apples, most of the time the robot will see an orange and learn “this is common.” When it finally sees an apple, it might think it’s just another orange because it rarely practiced with that example. That’s imbalanced data: one type (oranges) dominates while the rare type (apples) gets ignored.

In machine learning, each example in a dataset is like a lesson. If some classes appear many more times than others, the algorithm focuses on those common classes and forgets about the rare ones. The result? A model that works great for the majority but struggles with the minority. Balancing the data—by collecting more of the rare class or giving it extra weight—is how we help the robot learn every fruit equally well.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
