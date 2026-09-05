---
qid: ing_49e113bcce__eli5__local
question: What's the difference between batch, mini-batch, and stochastic gradient
  descent? What does batch size actually change?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 231
total_tokens: 400
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:34:04-05:00'
sources: []
---

Think of training a model as learning to cook a big stew (the whole dataset).  
* **Batch gradient descent** is like tasting the entire pot before deciding how much salt to add— you wait until every ingredient has been mixed, then adjust once. It’s precise but slow and uses a lot of memory.  

* **Mini‑batch gradient descent** is like sampling a few ladles from the pot each time: you taste a small portion (a mini‑batch), tweak the seasoning, stir, and repeat. You get faster updates with less memory use, and the noise in the samples helps avoid getting stuck in bad spots.  

* **Stochastic gradient descent** is like tasting one spoonful at a time— extremely fast, high variance, but can still converge if you keep adjusting gradually.

The *batch size* (how many examples you look at before updating) trades off speed, memory, and the smoothness of the learning signal: larger batches give steadier updates; smaller batches are noisier but faster.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
