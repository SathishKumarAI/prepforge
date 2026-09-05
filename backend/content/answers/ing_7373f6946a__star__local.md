---
qid: ing_7373f6946a__star__local
question: 'Explain: You train natively in int8 rather than doing post-training quantization.
  Defend that.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 385
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:18:37-05:00'
sources: []
---

**Situation:**  
At my last role I was responsible for deploying a transformer‑based chatbot to a mobile app that had a strict 50 ms inference budget. The model was 12 B parameters and running in float32 would exceed the deadline by an order of magnitude.

**Task:**  
I needed to reduce latency without sacrificing more than 0.5 % in perplexity or response quality, while keeping the deployment pipeline simple for the product team.

**Action:**  
Instead of a post‑training quantization (PTQ) pass, I switched to native int8 training with TensorFlow Lite’s QAT toolkit. I first added fake‑quantization ops around every dense and attention layer, then fine‑tuned the model from 3 epochs using a reduced learning rate (1e-5). To mitigate the dynamic range shift, I introduced per‑channel scaling for the large weight tensors and used a custom loss that penalized outlier activations. After training, I performed a quick calibration on a representative validation set to finalize the integer scales.

**Result:**  
The int8 model ran at 42 ms on a Snapdragon 865, a 3× speedup over float32, with perplexity only 0.4 % higher than the baseline. The key takeaway was that quantization‑aware training preserves accuracy by letting the network learn integer‑friendly representations, whereas PTQ often forces a hard mapping after the fact and can incur larger drops in performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
