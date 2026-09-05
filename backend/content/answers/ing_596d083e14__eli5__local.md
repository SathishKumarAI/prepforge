---
qid: ing_596d083e14__eli5__local
question: How is stratified sampling related to cross-validation?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 193
total_tokens: 351
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:58:15-05:00'
sources: []
---

Imagine you’re baking a cake that must taste good no matter how it’s sliced.  
**Stratified sampling** is like cutting the cake so each slice contains the same mix of chocolate, vanilla, and fruit pieces—every flavor appears in every portion.  

When we evaluate a machine‑learning model with **cross‑validation**, we repeatedly train on one group of data (the “cake dough”) and test on another (the “slice”). If our data slices were unbalanced—say one slice had only chocolate—it would mislead us about the cake’s true flavor.

Using stratified sampling before cross‑validation guarantees that every training and testing set keeps the same proportion of each class (like flavors). Thus, the model is judged fairly on a representative sample, just as you taste a balanced slice to judge the whole cake.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
