---
qid: ing_eecf2901fd__eli5__local
question: 'Explain: Pitfall 15: Solving a Different Problem — Common Pitfalls'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 217
total_tokens: 380
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:53:09-05:00'
sources: []
---

**Pitfall 15: Solving a Different Problem**

Imagine you’re trying to fix a leaky faucet, but you keep buying a wrench that only works on bolts. You’ll spend time and money, yet the leak stays. In AI this happens when we design or evaluate a model for the wrong goal.

For example, a company wants an assistant that can answer customer questions. Instead of training it on real conversation logs, they give it a list of product prices and ask it to “predict” sales. The model learns to match numbers, not understand dialogue. It performs well on the test you gave it, but fails in the actual use case.

**Key idea:** Always confirm that the data, metrics, and tasks you’re using truly represent the problem you actually care about. If the training objective is off, the AI will solve a different puzzle—one that looks similar but has nothing to do with what you need.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
