---
qid: ing_6138f8a023__eli5__local
question: 'Explain: 2 Related Works — Scaling Latent Reasoning via Looped Language
  Models'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 289
total_tokens: 454
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:10:31-05:00'
sources: []
---

Imagine you’re trying to teach a child how to solve puzzles, but the child can only remember a few pieces at once. **Latent Reasoning** is like that: a model keeps hidden “puzzle pieces” (internal thoughts) while answering questions. The two papers we’ll look at are ways to give the child more memory and smarter steps.

1. **Scaling Latent Reasoning** – Think of it as giving the child a bigger notebook so they can jot down more clues before reaching a conclusion. By enlarging the hidden space, the model can hold more intermediate ideas, which makes its answers clearer and more accurate on tough tasks.

2. **Looped Language Models** – Picture the child repeatedly checking their notes against new information: after writing an answer, they go back to the notebook, revise it with fresh clues, and repeat until satisfied. This looping lets the model refine its thoughts multiple times, catching mistakes that a single pass would miss.

Both works keep the same basic idea—using hidden “thoughts”—but one expands how many thoughts can be kept, while the other improves how those thoughts are revisited and polished. Together they show that giving models more memory **and** letting them iterate over it leads to stronger reasoning skills.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
