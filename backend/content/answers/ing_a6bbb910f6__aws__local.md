---
qid: ing_a6bbb910f6__aws__local
question: 'Explain: Problems with R-CNN — R-CNN, Fast R-CNN, Faster R-CNN, YOLO \u2014
  Object Detection Algorithms | Towards Data Science'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 674
total_tokens: 929
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:44:00-05:00'
sources: []
---

**Situation – Problem**  
At my last role I was tasked to upgrade our real‑time surveillance pipeline that used R‑CNN for object detection. The model scored 0.78 mAP but lagged at 2 fps on a single GPU, causing missed detections in high‑traffic zones.

**Task – Desired Outcome**  
Reduce inference latency below 5 ms per frame while maintaining ≥90 % of the original accuracy, and deploy the solution on AWS with cost‑efficiency and fault tolerance.

**Action – Technical & Leadership Choices**  

1. **Model Migration** – Switched from R‑CNN → Fast R‑CNN → Faster R‑CNN → YOLOv5.  
   *R‑CNN* required region proposal + separate classification (heavy). *Fast R‑CNN* merged proposals into a single network but still 15 ms on GPU. *Faster R‑CNN* introduced the Region Proposal Network, cutting latency to ~8 ms. *YOLOv5*, being a single‑stage detector, dropped inference to **3.2 ms** while keeping 92 % mAP (measured on our validation set).  
2. **AWS Services** – Deployed on **Amazon SageMaker Endpoint** with **Elastic Inference** to keep GPU usage at 30 %, and used **EFS** for model artifacts, enabling zero‑downtime updates via blue/green deployments.  
3. **Scalability & Availability** – Leveraged **SageMaker Multi‑Model Endpoints** to serve up to 10 different detection models concurrently with auto‑scaling based on CloudWatch metrics.  
4. **Cost** – Reduced GPU hours by 70 % (from $0.35/hr to $0.12/hr) and cut overall monthly spend from $1,200 to $360.

**Result – Impact**  
Latency dropped from 2 fps to 300 fps (3 ms per frame), accuracy improved by +4 %. Incident rate in high‑traffic zones fell by **65 %**, directly improving safety KPIs and earning a “Customer Obsession” bonus.

---

### Leadership Principles Highlighted  

- **Ownership** – I took full responsibility for the entire migration cycle, from model research to production rollout.  
- **Dive Deep** – Conducted layer‑by‑layer profiling and benchmarked every candidate algorithm.  

### What a Bar‑Raiser Listens For  

1. **Quantified Impact** – Concrete latency, accuracy, cost savings metrics.  
2. **Depth of Understanding** – Clear rationale for each architectural choice and trade‑offs (single‑stage vs two‑stage detectors).  
3. **Learning from Failure** – Acknowledged that the initial R‑CNN approach failed to meet real‑time constraints and pivoted decisively.  

By aligning technical excellence with Amazon’s customer obsession, I delivered a scalable, high‑performance detection pipeline that met business goals while staying within budget.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
