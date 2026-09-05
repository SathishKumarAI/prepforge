---
qid: ing_5f12282243__star__local
question: 'Explain: Then we''ll have the dog and cat — Python Full Course for Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 334
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:38:23-05:00'
sources: []
---

**Situation:**  
During my senior thesis I was tasked with building an automated wildlife monitoring system for a conservation NGO. Their camera traps captured thousands of images daily, but the dataset was heavily imbalanced: 90 % background and only 10 % animals, mostly dogs and cats.

**Task:**  
I needed to create a lightweight Python model that could accurately detect dogs and cats in real time on low‑power edge devices, while keeping inference latency below 200 ms per image.

**Action:**  
I started with the TensorFlow‑Lite framework. First, I curated a balanced training set by augmenting minority classes (random flips, brightness shifts). Then I built a MobileNetV2 backbone and fine‑tuned it on our dataset, using transfer learning to reduce training time. To handle class imbalance, I implemented focal loss and weighted sampling in the data pipeline. For deployment, I converted the model to TensorFlow‑Lite with quantization (int8) and tested inference speed on a Raspberry Pi 4, tweaking batch size until latency hit the target.

**Result:**  
The final model achieved 92 % precision and 88 % recall for dogs and cats, while keeping latency at ~180 ms per image. The NGO reported a 35 % increase in species detection rates over their previous manual review process. I learned how to balance accuracy with edge‑device constraints and the importance of data augmentation in small‑data scenarios.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
