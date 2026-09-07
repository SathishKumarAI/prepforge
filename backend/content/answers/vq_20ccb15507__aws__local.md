---
qid: vq_20ccb15507__aws__local
question: Feedforward Neural Network?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 224
output_tokens: 434
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:42:15-05:00'
sources: []
---

**Answer (Amazon Style)**  

*Leadership Principles:* **Ownership**, **Dive Deep**

---

### Situation & Task  
I was tasked to build a real‑time fraud detection model for an e‑commerce platform that needed to process ~10 M transactions/day and return predictions in <50 ms.

### Action – Technical Design  
1. **Model**: A 3‑layer feedforward neural network (input → ReLU → dropout → dense → softmax).  
2. **Training Pipeline**  
   * Data ingestion via **Amazon Kinesis Data Streams** → **Glue ETL** for feature engineering.  
   * Distributed training on **SageMaker** using a **DistributedDataParallel** strategy; 8 p4d.24xlarge instances (≈$12,000/month).  
3. **Inference**  
   * Export to **ONNX**, deploy with **Amazon SageMaker Neo** for GPU‑optimized inference.  
   * Host behind an **Elastic Load Balancer** feeding a **Lambda@Edge** cluster in multiple AZs for <50 ms latency.  
4. **Observability** – CloudWatch metrics + **SageMaker Model Monitor** to track drift.

### Result  
- **Accuracy ↑ 3.2%** over the previous rule‑based system (AUC 0.97 vs 0.94).  
- **Cost ↓ 27%**: $4,200/month versus legacy on‑prem GPU cluster ($6,000).  
- **Latency** maintained at 42 ms average.

### Learnings & Bar‑raiser Signals  
I took full ownership of the ML lifecycle, diving deep into data quality and model calibration. When drift was detected in week 12, I re‑trained with a fresh feature set, improving precision by 1.8% before it impacted revenue. This showcases ownership, depth, measurable impact, and iterative learning—key cues for a bar‑raiser.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
