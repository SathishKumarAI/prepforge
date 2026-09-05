---
qid: ing_389f4d6194__star__local
question: 'Explain: Activation Functions — Llm Internals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 329
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:21:51-05:00'
sources: []
---

**Situation:** While leading the fine‑tuning of a transformer model for our customer support chatbot, we noticed that the validation loss plateaued after only a few epochs and perplexity was still high.

**Task:** I had to diagnose why the network wasn’t learning effectively and identify an activation function strategy that would accelerate convergence without destabilizing training.

**Action:** I first inspected the gradient flow across layers using TensorBoard. The ReLU activations were causing “dying neurons” in deeper attention heads, so I swapped them for GELU, which preserves a smoother gradient distribution and aligns better with the Gaussian assumptions of transformer weights. I also experimented with SiLU (Swish) on the feed‑forward sublayers to reduce vanishing gradients while keeping computation lightweight. After each change I monitored the learning curves, checking for exploding gradients via gradient norm clipping at 1.0. I incorporated a small dropout (p=0.1) after GELU to regularize the model.

**Result:** Switching to GELU reduced perplexity from 35 to 28 within five epochs and cut training time by ~15%. The model also achieved a 12% lift in intent classification accuracy on our hold‑out set, confirming that the right activation function can dramatically improve LLM performance. I learned that choosing activations isn’t just about theory; it’s a practical tuning knob that balances expressiveness, stability, and efficiency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
