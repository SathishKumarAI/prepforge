---
qid: ing_30d14c65d2__aws__local
question: 'Explain: Terminologies — Latency'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 392
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:15:38-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation*: In a recent e‑commerce launch I led the ML inference pipeline for personalized product recommendations. The business demanded <50 ms end‑to‑end latency to keep the checkout flow smooth.

*Task*: Reduce prediction latency while keeping model accuracy (AUC = 0.82) and cost under $5/day.

*Action*:  
1. **Profile**: Used AWS X-Ray + CloudWatch Profiler to pinpoint 70 % of time spent in data‑preparation.  
2. **Optimize**: Converted the PyTorch model to ONNX, then to SageMaker Neo for edge‑optimized inference on **AWS Inferentia** (Inf1). Added a lightweight feature‑hashing layer (C++ UDF) to replace heavy Pandas ops.  
3. **Scale**: Deployed in a **fully managed endpoint** with 2 vCPU + 4 GB RAM, auto‑scaling based on CloudWatch CPUUtilization thresholds.  
4. **Cost**: Leveraged Spot Instances for training (cost ↓ ≈ 60 %) and reserved capacity for inference.

*Result*: Latency dropped from 180 ms to **35 ms** (80 % reduction). Prediction accuracy stayed unchanged, user dwell time on the recommendation page decreased by 12 %, translating to an estimated $1.3M incremental revenue over 6 months. The pipeline now consumes <$4/day.

*Reflection*: I learned that “Latency” is not just a single metric; it’s the sum of data ingestion, preprocessing, model execution, and post‑processing. Future iterations will move preprocessing to Lambda@Edge for even lower edge latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
