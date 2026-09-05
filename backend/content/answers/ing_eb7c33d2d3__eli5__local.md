---
qid: ing_eb7c33d2d3__eli5__local
question: Your agent passes 92% of eval tasks. Why might that number be misleading,
  and what would you measure instead?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 224
total_tokens: 395
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:48:12-05:00'
sources: []
---

Think of your AI like a student who scores 92 % on a practice test. The score looks great, but the test may have been written by one teacher with a narrow set of questions. It tells you only that the student can answer those particular problems well; it doesn’t reveal how they would do if the questions came from a different teacher, or if they had to explain their reasoning in class.

Similarly, 92 % on an evaluation set is misleading because the test data may be biased, duplicated, or too easy. It only shows that the model matches patterns it has already seen.

A better gauge is *generalization*: run the model on a diverse, unseen dataset—mixing new topics, harder problems, and different styles—and measure how many of those it solves correctly. Also track *robustness* (how well it handles noisy or trick inputs) and *explainability* (does it provide understandable reasoning). These metrics tell you if the AI truly understands, not just memorizes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
