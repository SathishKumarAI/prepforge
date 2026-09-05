---
qid: ing_1e7989f742__eli5__local
question: 'Explain: Speculative Decoding'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 153
output_tokens: 220
total_tokens: 373
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:24:39-05:00'
sources: []
---

**Speculative decoding is like guessing the next word in a story while you’re still reading the sentence that precedes it.**

Imagine you’re at a coffee shop, watching a barista make a latte. You see the milk foam coming out of the machine and, before the barista hands you the cup, you *speculate* that it will be a vanilla latte. If your guess is right, great—you can already start planning how to enjoy it. If you’re wrong (say it’s a caramel macchiato), you’ll have to wait for the correct answer.

In AI language models, the “barista” is the model, and the “milk foam” is the partial text that has just been generated. The model uses its internal rules (learned from data) to *speculate* on several possible next words at once, then checks which speculation fits best with what it’s actually going to produce. This speeds up generation while keeping accuracy high.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
