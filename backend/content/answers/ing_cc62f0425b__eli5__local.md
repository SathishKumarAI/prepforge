---
qid: ing_cc62f0425b__eli5__local
question: How do you detect overfitting and underfitting in practice, and what do
  you do about each?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 258
total_tokens: 427
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:58:56-05:00'
sources: []
---

Imagine training a student to recognize apples.  
*Over‑fitting* is like the student memorizing the exact look of the apples in one photo set—he can spot those apples perfectly but fails when a new picture shows slightly different lighting or angle. *Under‑fitting* is the opposite: the student only learns “apples are round” and misses all other shapes, so he also misidentifies any fruit.

In practice we test the model on data it never saw before (a validation set).  
- If accuracy drops sharply from training to validation, we have over‑fitting. We fix it by giving the student more varied examples, simplifying the lesson (reducing model size), or adding “regulatory” penalties that discourage memorization.  
- If both training and validation scores are low, it’s under‑fitting. We help the student learn richer patterns: add more lessons (more features or deeper layers) or give him more time to study.

So we watch how well a model does on new data; if it learns too narrowly, we broaden its view, and if it learns too little, we deepen its understanding.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
