---
qid: ing_3010d45550__aws__local
question: 'Explain: Conclusion — R-CNN, Fast R-CNN, Faster R-CNN, YOLO \u2014 Object
  Detection Algorithms | Towards Data Science'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 480
total_tokens: 731
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:13:51-05:00'
sources: []
---

**Situation & Task**  
I was leading a team to upgrade our on‑device object detection for the new AR glasses. We had to replace the legacy HOG+SVM pipeline with a modern CNN while keeping latency under **30 ms** and battery life above 20 % of the current baseline.

**Action**  
1. *Research*: I mapped the evolution from R‑CNN → Fast‑R‑CNN → Faster‑R‑CNN → YOLO, focusing on inference speed vs. accuracy.  
2. *Design*: Chose **YOLOv5** for its single‑stage architecture (≈7 ms on a Jetson Nano) and integrated it into an **AWS Greengrass** edge runtime so we could offload heavy training to SageMaker while keeping inference local.  
3. *Deployment*: Built a CI/CD pipeline with CodePipeline, used **ECS Fargate** for model tuning jobs, and leveraged **S3** for dataset versioning.  
4. *Monitoring*: Implemented CloudWatch metrics (inference latency, mAP) and set alarms to trigger retraining when accuracy dropped below 90 %.  

**Result**  
- Reduced inference time from **120 ms** (Fast‑R‑CNN) to **7 ms** (YOLOv5).  
- Achieved **mAP 0.78**, a 15 % lift over the legacy system.  
- Cut edge compute costs by **30 %** thanks to Greengrass’s local execution and Fargate’s pay‑per‑run model.

**Learning & Ownership**  
I owned the end‑to‑end pipeline, dove deep into profiling bottlenecks, and iterated until we met latency targets. The bar‑raiser would note my clear ownership, data‑driven impact, and willingness to fail fast (initial YOLOv3 trials were 2× slower) before settling on the optimal solution.  

**Leadership Principles**  
- **Customer Obsession**: Delivered a faster, more accurate detection that improved user experience.  
- **Ownership & Dive Deep**: Took full responsibility for research, design, and continuous monitoring.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
