---
qid: ing_21f0ddd486__aws__local
question: 'Explain: R-CNN — R-CNN, Fast R-CNN, Faster R-CNN, YOLO \u2014 Object Detection
  Algorithms | Towards Data Science'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 469
total_tokens: 722
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:43:48-05:00'
sources: []
---

**Answer (Amazon Style)**  

During my last role as a ML Engineer on an e‑commerce visual search team, I was tasked with replacing our legacy image‑matching pipeline to increase recall for product detection by 30 %.  
**Situation**: Our baseline used a simple HOG+SVM detector that struggled under occlusion and scale variation.  
**Task**: Evaluate state‑of‑the‑art object detectors (R‑CNN, Fast R‑CNN, Faster R‑CNN, YOLO) and deploy the best fit on AWS.  

I benchmarked each model on a 50k product image set (IoU > 0.5).  
- **R‑CNN**: 45 ms/ROI, 82 % mAP.  
- **Fast R‑CNN**: 30 ms/ROI, 85 % mAP.  
- **Faster R‑CNN**: 20 ms/ROI, 87 % mAP (region proposal network).  
- **YOLOv5**: 10 ms/img, 84 % mAP but higher FP rate on small objects.

I chose **Faster R‑CNN** for its balance of speed and accuracy. I containerized the model with **Docker**, deployed it as a **Lambda@Edge** inference function behind an **Amazon CloudFront** distribution to keep latency <50 ms globally. For training, I used **SageMaker Training Jobs** on Spot Instances (cost ↓ 40 %) and stored intermediate checkpoints in **S3**.

**Result**: Post‑deployment, recall improved from 70 % to 97 %, reducing cart abandonment by 12 %.  
**Leadership Principles**: *Customer Obsession* – directly impacted user conversion; *Ownership* – drove end‑to‑end solution from data prep to production.  

The bar‑raiser will notice my ownership (full pipeline), deep dive into metrics, quantified ROI, and learning from a false‑positive spike that led me to fine‑tune the IoU threshold.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
