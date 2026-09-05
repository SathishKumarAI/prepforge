---
qid: vq_0312b5f9e8__eli5__local
question: What is the difference between a call-by-value and call-by-name parameter?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 201
total_tokens: 364
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:00:59-05:00'
sources: []
---

Think of a recipe that asks for “a cup of sugar.”  
**Call‑by‑value** is like the chef grabbing one pre‑measured cup from the pantry and handing it straight into the mixing bowl. The value (the exact amount) is fixed before the cooking starts, no matter how many times the recipe uses it later.

**Call‑by‑name** is more like telling the chef to “take a cup of sugar whenever you need it.” Each time the recipe reaches that spot, the chef looks in the pantry again and grabs a fresh cup. If the pantry’s contents change between uses (say someone added or removed sugar), the new value will be used.

So, call‑by‑value evaluates once and passes the result; call‑by‑name defers evaluation until each use, re‑reading the source every time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
