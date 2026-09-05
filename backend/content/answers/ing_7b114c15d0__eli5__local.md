---
qid: ing_7b114c15d0__eli5__local
question: 'Explain: Pitfall 3: Evaluation Set Leakage — Capability Assessment'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 244
total_tokens: 404
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:51:55-05:00'
sources: []
---

Imagine you’re testing a new kitchen gadget by letting people cook the same recipe you used to design it. If they taste the dish again and say “I know how to make this,” you’re not really measuring how well the gadget works on fresh food; you’re just confirming that everyone remembers the recipe. That’s what evaluation set leakage does in AI.

In machine‑learning, an *evaluation set* is a group of data used to judge how good a model is after training. If the model has already seen some of those examples during its learning phase—because the dataset was split poorly or duplicated—the model will “cheat” and appear more accurate than it truly is. This gives a false sense of capability, like a student who copied answers instead of learning.

The pitfall is that we think the model can handle any new data, but it only shines on familiar cases. To avoid this leak, keep training and test data strictly separate—just as you’d use fresh ingredients for a real cooking test.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
