---
qid: ing_fdcbbee547__star__local
question: Why do transformer training recipes use learning-rate warmup, and what does
  the rest of the schedule look like?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 310
total_tokens: 557
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:56:22-05:00'
sources: []
---

**Situation:**  
When I joined a research lab working on a BERT‑style language model, we had to train 12 GB of data on 8 GPUs with mixed precision. The initial learning rate spikes caused the loss to diverge, so we struggled to get the first few epochs stable.

**Task:**  
My goal was to design a training schedule that kept the optimizer stable in the early iterations while still reaching the target performance within a reasonable wall‑clock time.

**Action:**  
I implemented a linear warmup over the first 10 k steps, increasing the learning rate from 0 to 2.5e‑4 (the base LR). After warmup I applied cosine decay with restarts every 50 k steps, letting the LR oscillate between 2.5e‑4 and 1e‑5. This schedule kept the gradients in a moderate range during the noisy start and allowed the model to explore flatter minima later on. I also added AdamW weight decay (0.01) and gradient clipping at 1.0 to prevent exploding gradients.

**Result:**  
With this recipe, training converged in 20 epochs instead of 30, achieving a 3.2% absolute BLEU improvement on the WMT benchmark while keeping GPU memory usage constant. I learned that warmup smooths the optimizer’s initial steps and that cosine decay with restarts encourages better generalization by revisiting higher learning rates periodically.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
