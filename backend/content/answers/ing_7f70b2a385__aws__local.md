---
qid: ing_7f70b2a385__aws__local
question: 'Explain: YOLO — You Only Look Once — R-CNN, Fast R-CNN, Faster R-CNN, YOLO
  \u2014 Object Detection Algorithms | Towards Data Science'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 437
total_tokens: 694
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:13:21-05:00'
sources: []
---

**Situation & Task**  
At my last role I led a vision‑processing team tasked with reducing the end‑to‑end inference latency of our on‑device security camera pipeline from 300 ms to < 50 ms while maintaining > 90 % mAP.

**Action – Technical & Design**  
I compared four mainstream detectors:

| Algorithm | Core idea | Key AWS services | Scalability/Cost |
|-----------|------------|-----------------|------------------|
| **R‑CNN** | Two‑stage: region proposal → CNN classification | SageMaker training, EC2 GPU instances | High compute cost, limited real‑time feasibility |
| **Fast R‑CNN** | Shared feature map; ROI pooling | SageMaker inference endpoints | Still > 100 ms latency on edge |
| **Faster R‑CNN** | Region Proposal Network (RPN) + Fast R‑CNN | ECS + GPU containers | 70 % faster than Fast R‑CNN but still too slow for edge |
| **YOLOv5** | Single‑stage, grid‑based predictions | Lambda@Edge + SageMaker Neo | < 30 ms inference on T4 GPUs; lower storage & cost |

I chose YOLOv5, fine‑tuned with transfer learning (3× faster convergence), and deployed via SageMaker Neo to ARM devices. We achieved **45 ms latency** and a **92 % mAP**, cutting inference cost by 60 %.

**Result**  
The deployment saved $120K annually in GPU usage and enabled real‑time alerts, improving incident response time by 35 %.  

**Reflection (Bar‑raiser focus)**  
I owned the end‑to‑end pipeline, dived deep into each algorithm’s trade‑offs, quantified impact through latency & cost metrics, and learned that single‑stage models often win in edge scenarios—an insight I now share with cross‑functional teams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
