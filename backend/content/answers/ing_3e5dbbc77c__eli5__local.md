---
qid: ing_3e5dbbc77c__eli5__local
question: 'Explain: Serving-time isolation: shared GPU is okay, KV cache is not'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 215
total_tokens: 377
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:14:48-05:00'
sources: []
---

Imagine a kitchen where several chefs (AI models) share one big stove (GPU). The stove’s burners can be used by anyone at any time; it doesn’t matter who cooked the last dish because each chef brings their own recipe card. That’s *serving‑time isolation* for the GPU: the hardware is shared, but each request runs in its own short session so they don’t interfere.

Now think of a pantry (KV cache) that holds ingredients specific to a recipe. If two chefs keep mixing their items together, one chef might accidentally eat another’s secret spice blend. In AI terms, the KV cache stores key‑value pairs of intermediate results that are unique to each conversation or query. Allowing different users’ caches to mingle would leak private information and corrupt answers.

So: a shared stove is fine because it doesn’t keep memory of past meals, but a shared pantry isn’t okay because it preserves sensitive, per‑user data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
