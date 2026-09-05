---
qid: ing_b4f2d1ecaf__eli5__local
question: How do you tell that a fine-tune is overfitting? What are the signals?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 249
total_tokens: 415
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:23:36-05:00'
sources: []
---

Imagine teaching a child to recognize cats by showing them only pictures from your own living room—every cat there has the same background, lighting, and pose. The child will become very good at spotting those exact cats but will struggle with a stray in a park or a kitten on a couch elsewhere. That’s overfitting: the model learns the *specific* quirks of its training data instead of the true idea of “cat.”

When fine‑tuning, watch these signals:

1. **Training loss keeps dropping while validation loss starts rising** – the model is getting better at memorizing the training set but worse on unseen examples.
2. **Accuracy spikes on training data but stays flat or falls on a held‑out set** – it’s only great for what it saw.
3. **Tiny changes in input produce wildly different outputs** – the model is too sensitive to noise.

If you see these, pause, add more varied data, regularize (dropout, weight decay), or stop training earlier. That keeps the cat‑recognition skill useful outside your living room.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
