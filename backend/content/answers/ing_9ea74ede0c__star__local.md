---
qid: ing_9ea74ede0c__star__local
question: 'Explain: So, let''s get started. Alright the first'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 326
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:49:23-05:00'
sources: []
---

**Situation**  
In my senior thesis I was tasked with improving a handwritten digit classifier that scored only 84 % accuracy on the MNIST dataset. The project had a two‑week deadline and needed to run within an embedded device with limited memory.

**Task**  
I had to design, train, and deploy a lightweight model that could boost accuracy to at least 90 % while keeping inference time under 20 ms per image.

**Action**  
First I benchmarked several architectures: a shallow CNN, a depth‑wise separable network (MobileNetV2), and a quantized SqueezeNet. I used TensorFlow Lite for deployment and leveraged its post‑training quantization to reduce the model size by 70 %. To accelerate training, I applied transfer learning from a pre‑trained ResNet-18 on ImageNet, fine‑tuning only the last block. I also implemented data augmentation (random rotations, shifts) to increase robustness. Throughout, I monitored GPU utilization and memory usage with NVIDIA Nsight to ensure the model fit the device constraints.

**Result**  
The quantized MobileNetV2 achieved 92 % test accuracy, reduced inference latency to 12 ms, and dropped the binary size from 4.8 MB to 1.3 MB. I learned that careful architecture selection coupled with transfer learning and hardware‑aware optimizations can deliver significant performance gains in constrained environments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
