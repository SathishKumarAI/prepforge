---
qid: ing_0e1f8c5225__eli5__local
question: How do you keep an eval set fresh over time, and how do you avoid overfitting
  to it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 214
total_tokens: 383
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:57:52-05:00'
sources: []
---

Think of your evaluation set as a “test kitchen” where you try new recipes (model predictions).  
To keep it fresh, every few months bring in a handful of brand‑new ingredients—fresh data points that the model hasn’t seen before. This is like rotating the pantry so the chef never just repeats the same dish.  

At the same time, don’t let your model learn the exact layout of that test kitchen.  
Treat the evaluation set as a *validation* tool: use it only to check performance after each training run, never to tweak parameters or decide which data to keep. If you start tuning on those very same dishes, you’ll over‑fit—your model will perform great on the test kitchen but fail elsewhere.

So, regularly update the test set with new, unseen data, and use it only for honest performance checks, not as a training guide. This keeps your AI reliable and ready for real‑world cooking.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
