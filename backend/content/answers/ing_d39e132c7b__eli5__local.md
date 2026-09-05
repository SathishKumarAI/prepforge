---
qid: ing_d39e132c7b__eli5__local
question: 'Explain: An eval pipeline you own suddenly reports a 6-point drop for a
  customer''s model between Tuesday and Wednesday. The model didn''t change. Debug
  it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 213
total_tokens: 391
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:10:26-05:00'
sources: []
---

Imagine your evaluation pipeline is like a kitchen that checks every dish (model) before it leaves the restaurant. One day you notice a customer’s dish suddenly tastes six points worse from Tuesday to Wednesday, even though the recipe stayed the same.

First, check the ingredients list: in this case, look at the **evaluation data**—did the test set change? If someone added new questions or removed old ones, the score can drop.  

Next, inspect the kitchen tools: are any software updates or dependency upgrades installed that could alter how results are computed? A fresh library version might tweak a metric’s formula.  

Finally, look at the **execution environment**—was the server load higher, causing timeouts or truncated predictions? Even a brief interruption can lower accuracy.  

By tracing these three “kitchen” components—data, code, and runtime—you’ll pinpoint why the score slipped without touching the model itself.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
