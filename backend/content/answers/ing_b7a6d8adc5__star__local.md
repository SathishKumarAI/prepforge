---
qid: ing_b7a6d8adc5__star__local
question: 'Explain: Q26: Explain quantization techniques for LLM deployment'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 353
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:38:31-05:00'
sources: []
---

**Situation:**  
At my previous role, we were preparing a GPT‑style model for edge devices in a smart‑camera line. The original 7B‑parameter model was ~28 GB and ran at only 5 FPS on the target GPU.

**Task:**  
Reduce the memory footprint to under 4 GB while keeping perplexity within 1.2× of the baseline, and boost inference speed by ≥3× so that the camera could run real‑time object‑detection prompts.

**Action:**  
I evaluated post‑training quantization (PTQ) versus quantization‑aware training (QAT). First, I applied mixed‑precision PTQ with 8‑bit weights and 16‑bit activations, using per‑layer scale calibration on a representative dataset. The model shrank to ~5 GB but hit a 1.6× perplexity increase. Next, I switched to QAT, inserting fake‑quantization ops in the training graph and fine‑tuning for 3 epochs with a cosine learning rate schedule. We also pruned low‑importance attention heads (≈15%) to further cut parameters. Finally, we deployed the model on NVIDIA Jetson AGX using TensorRT’s INT8 engine.

**Result:**  
The final deployment used only 3.2 GB of memory, achieved 12 FPS on the Jetson, and perplexity dropped to 1.13× baseline. I learned that combining QAT with selective pruning yields the best trade‑off between size, speed, and accuracy for LLM edge deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
