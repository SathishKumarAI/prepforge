---
qid: ing_372a11b64d__star__local
question: 'Explain: The Teacher-Student Paradigm — Knowledge Distillation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 378
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:18:40-05:00'
sources: []
---

**Situation** – In the summer of 2023 I was leading a team that had built an image‑classification model for our autonomous delivery drones. The teacher network (a ResNet‑152) achieved 94 % top‑1 accuracy on the company’s custom dataset, but its 600 MB size and 120 ms inference latency were unacceptable for edge deployment on the drones’ low‑power GPUs.

**Task** – I needed to compress the model into a lightweight student (MobileNet‑V2) that could run under 20 ms per image while maintaining at least 90 % of the teacher’s accuracy, and to do it without manually hand‑tuning hyperparameters for each layer.

**Action** – I implemented knowledge distillation: first I froze the teacher and ran it on a 50k validation set to collect soft logits and intermediate feature maps. Then I added a temperature‑scaled cross‑entropy loss (T=4) plus an L2 penalty between student and teacher activations, weighted 0.7 and 0.3 respectively. Using TensorFlow’s `tf.keras` API I trained the MobileNet for 30 epochs with a cosine‑annealing schedule. To speed up training I used mixed precision and distributed the workload across two GPUs.

**Result** – The student achieved 91.2 % top‑1 accuracy, reduced model size to 12 MB, and cut inference time from 120 ms to 15 ms on the drone hardware—an 80 % latency drop. I learned that carefully balancing soft‑label loss with feature‑matching is key for preserving performance while compressing deep nets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
