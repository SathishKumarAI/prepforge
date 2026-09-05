---
qid: ing_588e15ec2d__eli5__local
question: 'Explain: Shrink an existing index to fewer shards'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 232
total_tokens: 390
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:56:47-05:00'
sources: []
---

Imagine your data is a big pizza that’s been sliced into many small pieces (the *primary shards*). Each slice can be served separately, but if you only need a few slices at a time, the extra cuts are wasteful. “Shrinking an index to fewer shards” is like taking those many tiny slices and recombining them into larger ones so that you have fewer, bigger pieces. You still keep all the toppings (the data), but now each slice contains more of it.

In practice, the system copies the contents of every small shard into a new, larger shard set. It’s safe to shrink only when the index is *read‑only* and has no ongoing writes, because the copying process must read all the original data exactly once. After the copy finishes, the old shards are deleted and the index now lives on fewer, bigger shards—just like a pizza with fewer but thicker slices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
