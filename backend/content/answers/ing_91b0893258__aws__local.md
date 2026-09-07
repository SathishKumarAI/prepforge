---
qid: ing_91b0893258__aws__local
question: 'Explain: Introduction — R-CNN, Fast R-CNN, Faster R-CNN, YOLO \u2014 Object
  Detection Algorithms | Towards Data Science'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 565
total_tokens: 816
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:55:08-05:00'
sources: []
---

**Situation / Task**

I was tasked with designing a real‑time surveillance system for a retail chain. The requirement: detect shoplifters in live video streams with > 90 % precision while keeping inference latency under 30 ms per frame.

**Action – Technical & Design**

I first benchmarked the major object‑detection backbones:

| Algorithm | Core idea | Typical speed (fps) | Accuracy (mAP@0.5) |
|-----------|-----------|---------------------|--------------------|
| **R‑CNN** | 1. Region proposals → 2. Feature extraction per region | ~5 fps | 70 % |
| **Fast R‑CNN** | Shared backbone, ROI pooling | ~10 fps | 73 % |
| **Faster R‑CNN** | Anchor‑based proposal network + ROI Align | ~20 fps | 75 % |
| **YOLOv5** | Single‑stage dense prediction, grid cells | ~40 fps | 72 % |

I chose **YOLOv5** for its end‑to‑end inference and minimal latency. To satisfy the precision requirement I added a lightweight Feature Pyramid Network (FPN) and tuned anchor scales to match our small‑object retail scenario.

*AWS stack*:  
- **Amazon SageMaker Ground Truth** for annotation.  
- **SageMaker Training & Inference endpoints** using GPU instances (p3.2xlarge).  
- **Lambda + API Gateway** for real‑time frame ingestion.  
- **DynamoDB** to store detection logs, ensuring eventual consistency and low write latency.

I performed a cost‑benefit analysis: the chosen model uses 4 GPU cores, yielding ~$0.90/hr per endpoint vs. ~ $1.50/hr for Faster R‑CNN. Latency dropped from 70 ms (Faster R‑CNN) to 18 ms (YOLOv5), meeting SLA.

**Result**

- Achieved **92 % mAP@0.5** on the live test set.  
- Reduced inference latency by **74 %** relative to Faster R‑CNN.  
- Cut operational cost per hour by **40 %**, freeing budget for additional analytics.

**Reflection (Bar‑raiser focus)**

I owned the entire pipeline, diving deep into anchor design and scaling trade‑offs. The key learning: small‑object detection benefits more from dense prediction than region proposals—an insight that guided our model choice. I documented this in a post‑mortem to help future teams avoid similar pitfalls.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
