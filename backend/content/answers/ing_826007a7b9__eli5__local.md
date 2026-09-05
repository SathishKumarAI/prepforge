---
qid: ing_826007a7b9__eli5__local
question: 'Explain: Matrix Calculation of Self-Attention — The Illustrated Transformer
  \u2013 Jay Alammar \u2013 Visualizing machine learning one concept at a time.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 233
total_tokens: 415
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:03:30-05:00'
sources: []
---

Think of a group chat where every person wants to decide what the next topic should be.  
Each participant writes down a *question* (query), an *answer* they could give (key), and how much that answer matters to them (value).  

In self‑attention, we pack all participants’ queries, keys, and values into three big tables (matrices).  
First, we let every query look at every key: multiply the query table by the key table’s transpose. The result is a grid of scores telling how much each person cares about each other’s answer.  
We soften these scores with a “softmax” so they become probabilities that add to 1, then weight each value by its probability. Finally, we sum the weighted values for every query, giving each participant a new, informed message.

So self‑attention is like a smart group chat where everyone simultaneously reads all others’ thoughts, decides which are most relevant, and blends them into their own reply—all in one matrix multiplication step.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
