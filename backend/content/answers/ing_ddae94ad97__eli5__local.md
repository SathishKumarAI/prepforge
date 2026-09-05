---
qid: ing_ddae94ad97__eli5__local
question: 'Explain: Q97: Llama 4 Maverick (sparse MoE, 17B active / 128 experts) and
  DeepSeek V4 Pro (1.6T total / 49B active) require MoE-aware system design. Walk
  through what changes in your inference serving.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 207
output_tokens: 290
total_tokens: 497
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:25:23-05:00'
sources: []
---

Imagine a big kitchen where each recipe (a task) can use only a few chefs from a huge team.  
In Llama 4 Maverick, the whole kitchen has 128 “expert” chefs, but for any dish only 17 are actually called to work. In DeepSeek V4 Pro, there are 1.6 trillion possible recipes (total parameters), yet at once only about 49 billion of those ingredients are used—just a handful of experts.

Because the model is **sparse Mixture‑of‑Experts (MoE)**, your inference system must do three things differently:

1. **Route traffic** – send each input to the right subset of experts instead of all of them, so you don’t waste compute on unused weights.  
2. **Allocate memory on demand** – load only the active experts into RAM/VRAM during a request; the rest stay off‑loaded until needed.  
3. **Balance load** – monitor how many requests each expert receives and redistribute if one becomes a bottleneck, just as you would keep chefs evenly busy in a busy kitchen.

With these changes, the serving infrastructure stays fast and cheap while still handling the gigantic total model size.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
