---
qid: ing_4c258ac6d3__star__local
question: 'Explain: Meta (formerly Facebook) — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 335
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:00:29-05:00'
sources: []
---

**Situation:**  
During my final semester project at university, I joined a hackathon team tasked with building an image‑classification model for a client’s e‑commerce platform that needed to sort thousands of product photos into categories in real time.

**Task:**  
We had to deliver a solution that achieved at least 92 % accuracy on the validation set while keeping inference latency under 50 ms per image, all within a 48‑hour deadline.

**Action:**  
I chose to fine‑tune Meta’s open‑source vision backbone, ResNeXt‑101, using PyTorch. I first preprocessed the dataset with Albumentations, applying random crops and horizontal flips to augment the limited training set. To meet the latency requirement, I pruned the model by removing low‑importance channels via magnitude‑based pruning (20 % reduction) and then quantized it to 8‑bit using PyTorch’s native quantization toolkit. For inference, I wrapped the model in a TorchScript module and deployed it on an NVIDIA Jetson Nano, profiling with Nsight Systems to identify bottlenecks and iterating on batch size.

**Result:**  
The final model achieved 94 % top‑1 accuracy on the test set and ran at 38 ms per image on the Jetson. The client was able to integrate it into their catalog pipeline, reducing manual labeling effort by ~70 %. I learned how to balance accuracy with deployment constraints and gained hands‑on experience with Meta’s vision models and edge quantization techniques.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
