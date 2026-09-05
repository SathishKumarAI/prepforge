---
qid: ing_a7d6010813__eli5__local
question: 'Explain: Title: Tree of Thoughts: Deliberate Problem Solving with Large
  Language Models'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 219
total_tokens: 385
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:03:54-05:00'
sources: []
---

**Tree of Thoughts**

Imagine you’re a detective trying to solve a mystery. You start with one idea (a suspect) and then branch out: “Maybe it was the cat, maybe it was the dog.” Each branch leads to new clues, and some branches are pruned because they don’t fit the evidence. The whole process looks like a tree—root, branches, leaves.

In machine learning, a *Large Language Model* (LLM) can do the same with questions. Instead of suspects, it generates many possible answers or reasoning steps. It then “deliberates” by comparing these possibilities against its internal knowledge, keeping only the promising ones and discarding the rest. The final answer is like picking the leaf that best fits all clues.

So, **Tree of Thoughts** is a way to let an LLM explore many paths, evaluate them, and choose the most plausible one—just as a detective narrows down suspects until the culprit emerges.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
