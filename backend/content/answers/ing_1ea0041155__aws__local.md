---
qid: ing_1ea0041155__aws__local
question: 'Explain: Faster R-CNN — R-CNN, Fast R-CNN, Faster R-CNN, YOLO \u2014 Object
  Detection Algorithms | Towards Data Science'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 574
total_tokens: 828
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:36:43-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation:* My team was tasked to upgrade the real‑time product‑recognition pipeline for a retail catalog app that served 1 M daily users.  
*Task:* Replace the legacy R‑CNN model (≈ 30 s inference per image) with a solution that cuts latency by > 80 % while maintaining ≥ 95 % mAP.  
*Action:* I mapped out the detector family:  

| Algorithm | Key idea | Typical speed | Typical accuracy |
|-----------|----------|---------------|------------------|
| R‑CNN | Region proposals + CNN feature extraction | 30 s | 90 % mAP |
| Fast R‑CNN | ROI pooling → single forward pass | 2–3 s | 92 % mAP |
| Faster R‑CNN | Region Proposal Network (RPN) shares backbone with detector | 0.4 s | 93 % mAP |
| YOLOv5 | Single‑stage, grid‑based prediction | 0.05 s | 90–92 % mAP |

I chose **Faster R‑CNN** for its balance of speed and accuracy in a multi‑class setting.  
*Design:*  

1. **Backbone:** ResNet‑50 + FPN (shared across RPN & classifier).  
2. **RPN:** 3×3 conv → two heads (objectness, bbox deltas).  
3. **ROI Align** to preserve spatial alignment.  
4. **Inference Pipeline:** Batch images (size = 8) on an **Amazon SageMaker Endpoint** using a GPU instance (p3dn.24xlarge).  
5. **Scaling:** Autoscaling based on CPU utilisation; each endpoint handles ~2000 requests/min, yielding 95 % throughput with < 50 ms latency per image.

*Result:* Deployment reduced per‑image inference time from 30 s to **0.42 s** (≈ 87 % faster), increased mAP from 90 % to 93 %, and cut AWS compute cost by 35 % due to fewer GPU hours.  
*Learned:* Early profiling of the RPN’s anchor‑ratio was critical; tuning it from 9×9 to 3×3 reduced false positives by 12 %.  

**Bar‑raiser Focus:** Demonstrated ownership (full end‑to‑end solution), deep dive into model internals, quantified impact on latency and cost, and iterated after a failure point in anchor selection.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
