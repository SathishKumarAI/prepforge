---
qid: ing_fffebba4be__eli5__local
question: DoRA, rsLoRA and LoRA+ all claim to improve on vanilla LoRA. What does each
  actually change, and when would you reach for them?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 243
total_tokens: 423
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:20:15-05:00'
sources: []
---

Think of a vanilla LoRA as a shortcut‑circuit that lets a big neural network learn faster by only tweaking a few extra wires (the “low‑rank” matrices).  
**DoRA** is like adding a smart dimmer to those wires: it learns how much each wire should actually turn on, so the shortcut can be stronger or weaker depending on the data.  
**rsLoRA** is a bit different—it’s as if you first paint all the wires red (reset them) and then let the network learn new colors in parallel; this keeps the old knowledge intact while still adding fresh details.  
**LoRA+** combines both ideas: it dims the wires *and* resets them, giving the most flexible shortcut.  

Use DoRA when you want a quick boost with minimal extra computation. Switch to rsLoRA if you’re fine‑tuning on data that’s similar but not identical to what the model saw before. Opt for LoRA+ when you need both safety (preserve old knowledge) and adaptability, especially in very large or highly specialized models.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
