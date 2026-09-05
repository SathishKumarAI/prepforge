---
qid: vq_c9f8eaa563__eli5__local
question: Difference between Narrow & wide transformations?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 155
output_tokens: 254
total_tokens: 409
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:27:41-05:00'
sources: []
---

**Narrow vs. Wide Transformations – a kitchen‑cook’s view**

Think of a big recipe book (your raw data) and a cooking station where you can either keep everything in the same pot or split it into many pots.

* **Narrow transformation** = “keep everything in one pot.”  
  Each output row comes from *at most one* input row. The work is local – no need to move ingredients between stations. Example: filtering, mapping a column, or adding a calculated field. You can process each batch independently; the machine doesn’t have to shuffle data.

* **Wide transformation** = “split into many pots.”  
  Output rows may depend on *many* input rows (joining tables, aggregating by key). The system must collect and redistribute pieces across machines, like sending spices to different burners. This incurs network traffic and a full shuffle of the data.

So, narrow = local, no shuffling; wide = global, requires shuffling. Think of it as whether you keep all ingredients together or distribute them for shared cooking.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
