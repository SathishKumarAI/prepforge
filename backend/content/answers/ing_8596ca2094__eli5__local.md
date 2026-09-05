---
qid: ing_8596ca2094__eli5__local
question: 'Explain: 8.5.2.3. Layer Normalization ¶ — 8.5. Batch Normalization \u2014
  Dive into Deep Learning 1.0.3 documentation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 204
total_tokens: 390
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:08:23-05:00'
sources: []
---

Imagine a classroom where every student writes an essay.  
Some essays are long and some short; the teacher wants to compare them fairly.  
Instead of measuring each essay against the whole class average (like batch normalization does), she first looks at each essay on its own: she counts how many words it has, finds the average word length, and notes how much that average differs from the overall class average.  

Layer normalization works the same way inside a neural network layer.  
For every data point passing through the layer, it computes the mean and spread (standard deviation) of all the numbers produced by that layer for that single point, then scales and shifts them so they have zero mean and unit variance.  
This keeps each individual example’s features balanced, just as the teacher normalizes each essay before grading, without needing to wait for a whole batch of essays.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
