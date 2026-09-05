---
qid: vq_afaf77b367__eli5__local
question: State the reason why we can't perform aggregation in mapper? why do we need
  reducer for this?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 253
total_tokens: 420
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:24:26-05:00'
sources: []
---

Imagine you’re baking a huge cake from many small cupcakes (the mappers). Each cupcake knows its own frosting amount, but no one can see the whole batch. If every baker tried to add up all the frosting on their own cupcake, they’d only know how much frosting that single cupcake has—nothing about the total frosting needed for the whole cake.

In data terms, a mapper processes one piece of input and emits key‑value pairs (like “color → count”). It can’t see or combine results from other mappers because it works in isolation. The reducer is the final assembly line that receives all pairs with the same key, gathers them together, and sums them up—exactly what aggregation needs.

**Key terms:**  
- **Mapper:** A program that reads input data, transforms it, and outputs intermediate key‑value pairs.  
- **Reducer:** A program that receives all values for a given key from mappers and combines (aggregates) them into a final result.  

Thus, we need reducers to perform aggregation because only they can collect and combine the distributed partial results produced by mappers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
