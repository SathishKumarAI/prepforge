---
qid: ing_0a951e0c24__aws__local
question: 'Explain: Performance Metrics — Inference Fundamentals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 483
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:49:42-05:00'
sources: []
---

**Performance Metrics – Inference Fundamentals**

*Situation:*  
In my last role I led a team that built a real‑time fraud‑detection model for a payment gateway with 10 M daily transactions. The model had to run inference in under 50 ms per transaction while keeping CPU usage below 30 % on spot instances.

*Task:*  
I needed to define clear performance metrics, design an inference pipeline that met SLA, and continuously monitor drift.

*Action:*  
1. **Metrics** – I chose *Latency (99th percentile)*, *Throughput (TPS)*, *CPU & GPU Utilization*, and *Prediction Accuracy (AUC‑ROC)*.  
2. **Design** – Deployed the model as a SageMaker endpoint with an Auto Scaling group of EC2 g4dn.xlarge instances. I used **AWS Lambda + Amazon API Gateway** for edge routing to reduce cold‑start latency.  
3. **Monitoring** – Integrated CloudWatch custom metrics and SageMaker Model Monitor for data drift; set up SNS alerts when 99th percentile latency exceeded 50 ms or accuracy dropped below 0.95 AUC.  
4. **Optimization** – Applied TensorRT on GPU instances, reduced batch size to 1, and compressed the model with ONNX Runtime, cutting inference time from 120 ms to 35 ms while saving ~30 % compute cost.

*Result:*  
Achieved a 99th‑percentile latency of 32 ± 5 ms, throughput of 12 k TPS, and maintained AUC ≥0.97 over 6 months. The cost per inference dropped from $0.003 to $0.0012, yielding ~$1.2M annual savings.

**Leadership Principles:**  
- **Customer Obsession** – Ensured fast, reliable predictions for end users.  
- **Ownership & Dive Deep** – Own metrics, drill into drift, iterate on architecture.  

*Bar‑raiser note:* They’ll check that I set measurable KPIs, used AWS services strategically, and learned from performance regressions (e.g., when a new model version increased latency).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
