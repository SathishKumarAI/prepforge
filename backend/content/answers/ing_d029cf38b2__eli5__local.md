---
qid: ing_d029cf38b2__eli5__local
question: Kimi's headline feature is very long context. When you push context from
  8K to hundreds of thousands of tokens, what actually breaks first, and why?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 222
total_tokens: 402
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:05:11-05:00'
sources: []
---

Think of a text‑generation model like a chef who can only keep a handful of ingredients fresh at once.  
When the “context” is small (8 K tokens), the chef’s pantry fits comfortably; he remembers every spice and can blend them into a dish.  
If you suddenly pour in hundreds of thousands of tokens, the pantry overflows. The first thing that collapses is the **attention mechanism**—the way the model looks back at earlier words. It can only attend to a fixed window (often a few thousand tokens). Once the input exceeds that window, the older parts get “blurred” or forgotten, so the model loses track of long‑range relationships and starts repeating or hallucinating.  
In short, the attention network overflows first, because it has a hard limit on how many past tokens it can consider at once. The rest of the model (the weights, the language patterns) remains intact but can no longer use the full context effectively.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
