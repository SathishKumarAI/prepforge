---
qid: ing_4a8120de09__eli5__local
question: What is stratified sampling? — What is Stratified Cross-Validation in Machine
  Learning? | Towards Data Science
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 208
total_tokens: 378
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:35:03-05:00'
sources: []
---

**Stratified sampling** is like picking a balanced mix of fruit from a big basket so that each type (apples, bananas, oranges) appears in the same proportion as it does in the whole basket. In machine learning we use this to split data into training and test sets while keeping the class distribution (e.g., “spam” vs. “not spam”) similar in both parts.

**Stratified cross‑validation** extends that idea. Imagine you want to test a recipe many times, each time using a different portion of the kitchen’s ingredients but still preserving the mix of flavors. We divide the data into *k* folds; every fold contains roughly the same ratio of classes as the whole dataset. Each fold takes turns being the validation set while the others train the model. This keeps class imbalance from skewing performance estimates, giving a more reliable picture of how the model will work on new data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
