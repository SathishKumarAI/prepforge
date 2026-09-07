---
qid: ing_c145e94efe__aws__local
question: 'Explain: How do you decide whether to trust your LLM judge? Walk me through
  calibration.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 414
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:40:17-05:00'
sources: []
---

**Answer (Amazon Style)**  

*Situation:* In a production ML platform we were deploying an LLM to triage user‑generated content. The business required 99 % precision to avoid brand damage while keeping latency <200 ms.

*Task:* Build a calibration pipeline that decides when the model’s confidence is trustworthy and routes uncertain cases to human reviewers.

*Action:*  
1. **Collect ground truth** from the first 10 k flagged items (AWS SageMaker Ground Truth).  
2. **Compute reliability curves** (expected vs. predicted probability) using sklearn-calibration and store them in an S3 bucket.  
3. **Deploy a Lambda function** that, at inference time, queries the curve from DynamoDB to adjust the raw score (`adjusted = raw * calibration_factor`).  
4. **Threshold policy**: if adjusted ≥ 0.85 → auto‑accept; else route to Human Loop (SageMaker Human Review).  
5. **Monitor drift** via CloudWatch metrics and retrain every 2 weeks, saving models in SageMaker Model Registry.

*Result:* After implementation, precision rose from 92 % to 99.3 %, reducing escalations by 67 % and cutting review costs by $12k/month (Lambda + DynamoDB < $200). Latency stayed at 180 ms.  

**Leadership Principles Anchored:**  
- **Customer Obsession** – ensured users saw only high‑quality content.  
- **Dive Deep & Ownership** – built end‑to‑end pipeline, monitored drift, and iterated on calibration curves.

**Bar‑raiser Takeaway:** Look for ownership (model registry), depth (calibration curve derivation), quantified impact (precision metric), and learning from failure (drift detection).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
