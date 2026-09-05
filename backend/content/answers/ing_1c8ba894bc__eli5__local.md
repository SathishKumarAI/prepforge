---
qid: ing_1c8ba894bc__eli5__local
question: 'Explain: Saving The Mask — fast.ai\u2014Making neural nets uncool again
  \u2013 fast.ai'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 185
total_tokens: 355
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:21:32-05:00'
sources: []
---

Think of a neural network as a giant, colorful painting that learns to recognize pictures by adjusting its brush strokes (the weights). “Saving the mask” is like keeping a transparent stencil over the painting that shows which strokes are truly essential for the picture’s shape and which ones can be ignored.

When you train a network, many strokes become very small or even zero—like paint that has dried out. The mask records exactly where those tiny strokes live. Later, when you want to shrink the painting (compress the model), you simply keep only the strokes that the stencil says matter; everything else can be discarded without losing the picture’s meaning.

So “saving the mask” is a quick way to remember which parts of the network are vital, letting us prune or compress it while keeping performance high.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
