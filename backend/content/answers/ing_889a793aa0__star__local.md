---
qid: ing_889a793aa0__star__local
question: 'Explain: Quantization Aware Training — Inside Kaiju - building conversational
  models at scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 348
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:05:55-05:00'
sources: []
---

**Situation:**  
When I joined the Kaiju team, our flagship chatbot was running on 32‑bit floating point weights, which pushed GPU memory to its limits and slowed inference to 150 ms per request—too slow for real‑time customer support.

**Task:**  
I had to reduce model size by 75 % while keeping perplexity within 5 % of the baseline and maintain a latency target of ≤80 ms on a single V100 GPU.

**Action:**  
I introduced Quantization Aware Training (QAT). First, I wrapped our Transformer encoder in TensorFlow’s `tf.quantization.fake_quant_with_min_max_vars` to simulate 8‑bit integer arithmetic during forward passes. I then fine‑tuned the model for two epochs on a mixed‑precision dataset, letting gradients propagate through the fake‑quant ops so the network learned to compensate for quantization noise. After training, I exported the weights with `tf.lite.TFLiteConverter`, enabling dynamic range quantization and post‑training calibration on a held‑out validation set. Finally, I benchmarked inference on a V100 using NVIDIA’s TensorRT, integrating INT8 kernels.

**Result:**  
The final model was 3.5 × smaller in memory, achieved an average latency of 65 ms per request, and its perplexity dropped only 4.2 % compared to the float32 baseline. I learned that embedding QAT early in the training loop dramatically reduces accuracy loss, and that careful calibration is key when deploying at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
