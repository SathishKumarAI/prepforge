---
qid: ing_c3fa51e390__eli5__local
question: Why ResNet? — The Annotated ResNet-50 | Towards Data Science
topic: Data Science
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 208
total_tokens: 372
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:46:41-05:00'
sources: []
---

Think of building a very tall tower out of LEGO bricks that must stay sturdy and see all the way to the top.  
If you stack every brick on top of the previous one (a “plain” neural network), small mistakes in lower levels quickly make the whole tower wobble—this is *vanishing gradients*.  

ResNet solves this by adding a shortcut: each new layer simply adds its own bricks to the ones already there instead of replacing them.  
Like a ladder that lets you climb straight up while still putting extra steps on top, the network can grow deep (50+ layers) without losing its ability to learn.  

*Layers* are little processing blocks; *gradients* guide learning; *shortcut connections* let signals skip ahead.  
That’s why ResNet is a go‑to design for modern image tasks: it lets us build very deep, reliable models with ease.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
