---
qid: ing_b4a2a69e44__eli5__local
question: 'Explain: How Diffusion Models Work - DeepLearning.AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 237
total_tokens: 396
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:23:07-05:00'
sources: []
---

Imagine you’re a painter who starts with a completely blurry canvas—just random noise—and gradually adds details until a clear picture emerges. That’s what a diffusion model does, but in reverse: it first creates a noisy “image” and then learns how to peel away the noise step by step, revealing an original picture.

**How it works:**  
1. **Add Noise (Forward Process)** – The model takes a real image and adds random dots of noise until the image looks like static.  
2. **Learn the Undoing (Reverse Process)** – It trains on many pairs: noisy images and their clean originals, learning how to remove one tiny bit of noise at each step.  
3. **Generate New Images** – To create a new picture, start with pure noise and let the model undo the noise layer by layer, ending up with a fresh, coherent image.

So diffusion models are like expert painters who learn from many paintings how to paint backwards: starting from chaos and finishing with art.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
