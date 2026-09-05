---
qid: ing_0c4324681b__star__local
question: 'Explain: A model runs fine in FP32 but produces garbage after conversion
  to FP16. Debug it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 330
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:53:07-05:00'
sources: []
---

**Situation:**  
While porting our recommendation engine from a research prototype to production, we switched the inference pipeline from FP32 to FP16 on the new GPU cluster. The model was generating reasonable scores in FP32, but after conversion the output probabilities collapsed to NaNs or values outside the [0,1] range.

**Task:**  
Identify why the FP16 conversion broke the model and restore accurate predictions without sacrificing throughput.

**Action:**  
I first profiled the FP16 graph with TensorBoard’s precision‑drop metrics; it revealed that the softmax layer overflowed during exponentiation. I inserted a `tf.math.reduce_max` clip before the exponential to keep logits bounded, then added `tf.keras.layers.LayerNormalization` after each dense block to stabilize activations. Next, I rewrote the embedding lookup using `tf.cast(..., tf.float16)` only after the lookup matrix was already scaled to avoid underflow in sparse indices. Finally, I ran a mixed‑precision strategy: kept the first two layers in FP32 and cast the rest to FP16, ensuring critical gradients stayed precise.

**Result:**  
The model now outputs valid probability distributions (KL divergence < 0.01 vs FP32 baseline) while maintaining a 1.8× speedup over the original FP32 inference. I learned that guarding against exponentiation overflow and preserving scale in embeddings are key when moving to FP16, and that selective mixed‑precision can balance accuracy and performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
