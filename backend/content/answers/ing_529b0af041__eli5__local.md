---
qid: ing_529b0af041__eli5__local
question: 'Explain: KV Cache Tiling — Short Term Context'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 204
total_tokens: 361
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:48:00-05:00'
sources: []
---

Think of an AI model like a chef who keeps ingredients (the “key‑value” pairs) in a pantry. The pantry is the **KV cache** – it stores everything the chef has already prepared so he can quickly grab what’s needed for new recipes.

When the chef starts cooking a short, quick dish (a *short‑term context*), he only needs a handful of ingredients from the pantry. Instead of rummaging through the whole pantry, he pulls out a small **tile**—a neatly organized box that holds just those few items. This tile is called **KV Cache Tiling**.

So, KV cache tiling means the model slices its big memory into bite‑size chunks and only loads the relevant chunk for a short prompt. It saves time and memory, just like a chef grabbing a small spice jar instead of opening the whole cupboard.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
