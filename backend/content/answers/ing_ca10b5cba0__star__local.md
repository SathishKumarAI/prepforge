---
qid: ing_ca10b5cba0__star__local
question: 'Explain: Everyone else built a construction worker. We built the contractor.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 369
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:13:18-05:00'
sources: []
---

**Situation**  
When my team was tasked with automating the inspection of construction sites, most groups were creating “worker” models—tiny CNNs that classified individual parts of machinery from drone footage. Those models had high accuracy but struggled to generalize across diverse equipment and lighting.

**Task**  
I proposed building a “contractor” model: a single network that learns the overall context of a site—layout, worker safety compliance, material staging—so it could predict both the presence of specific tools and whether the site met regulatory standards. The goal was to reduce inference time by 40% while maintaining or improving detection accuracy.

**Action**  
I assembled a multi‑branch architecture: one branch processed RGB imagery with ResNet50 for visual cues, another ingested LiDAR point clouds via PointNet++ for depth perception, and a third handled temporal data from video frames using an LSTM. I fused these branches in a feature‑level attention module that weighted each modality based on confidence scores. Training used a composite loss combining focal loss for object detection and binary cross‑entropy for compliance flags. To speed inference, I applied TensorRT optimization and reduced the batch size to 1 without sacrificing latency.

**Result**  
The contractor model achieved an mAP of 0.87 versus the worker models’ 0.78 on our test set, while inference time dropped from 300 ms per frame to 180 ms. Deploying it in a pilot site cut inspection turnaround by 35%, and the company reported higher audit scores. I learned that modeling at the contextual level can unlock both performance gains and operational efficiencies, especially when multiple data streams are available.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
