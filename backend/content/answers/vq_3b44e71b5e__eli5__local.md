---
qid: vq_3b44e71b5e__eli5__local
question: Which operations is not lazy?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 154
output_tokens: 197
total_tokens: 351
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:08:39-05:00'
sources: []
---

Think of data processing as cooking a big pot of soup.  
Each *operation* you add—like “filter the carrots” or “map the onions into slices”—is done **lazily**; it’s just a recipe step written down, but the actual chopping happens only when the soup finally boils.

The one operation that isn’t lazy is the **action that actually pulls the data out of the pipeline**, such as `collect()`, `show()` or writing to disk.  
In cooking terms, it’s like ladling a spoonful into your bowl and tasting it. As soon as you do that, all the earlier recipe steps are executed right away to produce the final result.

So, *actions* (e.g., `collect`) break laziness by forcing immediate execution; transformations remain lazy until an action is called.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
