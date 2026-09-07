---
qid: ing_9e7e3f32e2__aws__local
question: 'Explain: On-Device and Edge Deployment — On Device And Edge Deployment'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 436
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:23:08-05:00'
sources: []
---

**Situation & Task**  
At my previous company we had a consumer‑facing mobile app that used a vision model for real‑time defect detection in manufacturing. Latency on the cloud was 250 ms, which broke our SLA of <50 ms and caused a 12 % churn spike during peak hours. I owned the migration to **on‑device / edge deployment**.

**Action**  
1. **Requirement dive** – We needed deterministic latency ≤30 ms, 5 % accuracy drop tolerance, and zero data egress for privacy.  
2. **Design** –  
   * Convert the PyTorch model to ONNX → TensorRT for ARM‑64 on Android/iOS.  
   * Deploy with **SageMaker Edge Manager** to automate OTA updates and rollback.  
   * Use **AWS IoT Greengrass v2** to cache inference results locally and publish only aggregates to S3 (cost $0.02/GB).  
   * For occasional cloud‑side re‑training, we trigger a Lambda@Edge function on CloudFront edge locations (latency <5 ms) that queues data to SageMaker Pipelines.  

**Result**  
- Latency dropped from 250 ms to **15 ms** average; SLA compliance rose to 99.9 %.  
- Monthly data egress fell by **93 %**, cutting bandwidth costs by $18k/year.  
- Accuracy remained at 97 %, a 0.5 % drop versus the baseline, well within tolerance.

**Reflection (Bar‑raiser notes)**  
I took full ownership of the end‑to‑end pipeline, performed deep dives into model quantization trade‑offs, and quantified every cost/latency metric. The failure mode—model drift on edge devices—was mitigated by automated A/B testing in Edge Manager, turning a risk into continuous learning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
