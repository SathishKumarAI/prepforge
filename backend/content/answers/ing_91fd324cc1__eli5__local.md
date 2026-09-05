---
qid: ing_91fd324cc1__eli5__local
question: Design the parallelism strategy for serving a 405B-parameter dense model.
  TP, PP, EP - what goes where and why?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 319
total_tokens: 494
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:29:14-05:00'
sources: []
---

Imagine the model is a gigantic pizza that must be sliced and cooked in a bustling kitchen.  
*Tensor‑Parallel (TP)* is like cutting each slice into many thin pieces so several ovens can bake them at once—each oven handles only a fraction of the ingredients, but together they finish the whole slice quickly.  
*Pipeline‑Parallel (PP)* is the line of chefs: one chef prepares the dough, the next adds sauce, the third rolls it out, and so on. The pizza moves through stages; each chef works simultaneously on different pizzas, keeping the kitchen busy.  
*Expert‑Parallel (EP)* is a specialty station that only deals with the most complex toppings—like a pastry chef who only knows how to add delicate caramel or rare cheeses. Only when a slice needs those special ingredients does it go there.  

For 405 B parameters, we first split weights into many small groups (TP) so each GPU holds only a manageable chunk. We then arrange the model in stages (PP) so data flows smoothly from one GPU to the next, avoiding idle time. Finally, if certain layers are extremely large or unique (e.g., huge attention heads), we hand them off to dedicated “expert” GPUs (EP) that can process them without clogging the main line. This layered strategy keeps every piece of hardware busy and lets us serve such a massive model efficiently.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
