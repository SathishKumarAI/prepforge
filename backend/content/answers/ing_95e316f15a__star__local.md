---
qid: ing_95e316f15a__star__local
question: 'Explain: Pre-Trained Model as Feature Extractor in Model'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 319
total_tokens: 557
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:32:33-05:00'
sources: []
---

**Situation:**  
At my last role I was tasked with building a real‑time image classification system for a retail app that needed to detect product categories from user photos within two seconds, but our hardware budget limited us to an on‑device TensorFlow Lite model.

**Task:**  
I had to deliver a lightweight classifier that maintained at least 85 % accuracy on our custom dataset of 12k images while keeping the inference time below 1.5 s per image.

**Action:**  
Instead of training a deep CNN from scratch, I used a pre‑trained MobileNetV2 as a feature extractor. I froze its convolutional layers and added a small dense head (two fully connected layers + dropout). I fine‑tuned the head with our data using transfer learning in Keras, applying mixed precision to reduce memory usage. To satisfy the latency requirement, I quantized the entire model to 8‑bit integers with TensorFlow Lite Converter and benchmarked on an ARM Cortex‑A53 device, iterating on batch size and operator fusion until I hit the target.

**Result:**  
The final model achieved 88 % top‑1 accuracy on a held‑out test set and ran at 0.9 s per image on-device—well under the deadline. I learned that leveraging pre‑trained backbones can dramatically cut development time and resource usage, but careful fine‑tuning and quantization are essential to meet strict real‑time constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
