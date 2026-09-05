---
qid: ing_3be5871a14__star__local
question: 'Explain: Quantization-Aware Distillation — Knowledge Distillation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 367
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:28:20-05:00'
sources: []
---

**Situation:** In a recent project at my previous company we had to deploy a vision‑model on edge devices with strict latency and memory limits. The baseline ResNet‑50 model was too heavy; the team needed a smaller network that could run in real time on an ARM Cortex‑M processor while maintaining >90 % of the original accuracy.

**Task:** My goal was to reduce the model size by 8× through quantization, but I also had to preserve performance. I decided to use Quantization‑Aware Distillation (QAD), where a low‑precision student learns from a full‑precision teacher while being trained under simulated quantization noise.

**Action:** I first built a lightweight MobileNet‑V2 as the student and set up TensorFlow Lite’s post‑training quantization pipeline. Then, during training, I wrapped each forward pass with fake‑quantization ops (8‑bit per channel) to emulate inference conditions. The loss function combined cross‑entropy with a KL divergence term that nudged the student's logits toward the teacher's. I tuned the temperature and weighting hyperparameters, ran 200 epochs on ImageNet‑subset, and monitored both full‑precision and quantized accuracy.

**Result:** After QAD, the student achieved 92.3 % top‑1 accuracy with a 4 ms inference time on the target device—only a 2.7 % drop from the teacher—and reduced memory footprint to 8 MB. I learned that aligning training and deployment quantization at every layer is critical; otherwise, the student overfits to full‑precision representations and fails when actually quantized.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
