---
qid: vq_a39e765330__aws__local
question: How does changing the stride affect the output feature map?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 440
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:07:04-05:00'
sources: []
---

**Situation (S)**  
While leading a cross‑functional ML team at Amazon Web Services, we were optimizing a CNN that classifies satellite imagery for land‑use detection. Our model’s inference latency was 1.8 s per image on an EC2 G4dn instance, exceeding the SLA of 1.5 s.

**Task (T)**  
I needed to reduce latency without sacrificing accuracy. The first lever I examined was the convolution stride in the early layers—changing it from 1 to 2 halves spatial dimensions and can dramatically cut compute time.

**Action (A)**  
- **Dive Deep:** I calculated that stride‑2 reduces feature map width/height by half, cutting FLOPs by ~75 % for that layer.  
- **AWS Design:** I replaced the original Conv2D with a `tf.keras.layers.Conv2D` set to stride 2 and added an extra residual block to recover representational power.  
- **Bias for Action & Invent & Simplify:** I deployed the updated model on SageMaker hosting, leveraging GPU‑optimized inference endpoints.  
- **Cost/Availability Trade‑off:** The new architecture reduced per‑inference cost from $0.12 to $0.08 and maintained 99.9 % availability by using multi‑AZ Auto Scaling.

**Result (R)**  
Inference latency dropped to **1.2 s**, meeting SLA, while accuracy only fell by **0.3 %**—well within acceptable bounds. The model now scales to 10× more requests with the same instance family, directly improving customer experience for geospatial analysts.  

> *Leadership Principles:* **Ownership** (I took end‑to‑end responsibility), **Dive Deep** (I quantified stride impact), and **Deliver Results** (measured latency & accuracy gains).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
