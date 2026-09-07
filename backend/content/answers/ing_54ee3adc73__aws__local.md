---
qid: ing_54ee3adc73__aws__local
question: Want Results with Deep Learning for Computer Vision?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 400
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:38:18-05:00'
sources: []
---

**Situation & Task (S)**  
In my last role I led a cross‑functional team to deliver an automated defect‑detection pipeline for a high‑volume automotive supplier. The client required >95 % recall on micro‑fracture detection while keeping inference latency under 200 ms per image.

**Action (A)**  
- **Ownership & Bias for Action:** I scoped the project, built a sprint backlog, and allocated two GPU‑enabled SageMaker notebooks for data labeling, model training, and hyper‑parameter tuning.  
- **Dive Deep & Invent & Simplify:** We engineered a custom CNN (EfficientNet‑B0) fine‑tuned on 120k labeled images stored in S3, using SageMaker’s built‑in AutoML to reduce trial cycles by 40 %.  
- For real‑time inference, we deployed the model as a SageMaker endpoint behind an Application Load Balancer, auto‑scaling to 8 instances (p3.2xlarge) based on CloudWatch metrics.  
- To cut cost, we leveraged Spot Instances for training and reserved capacity for inference, reducing spend by 35 %.  

**Result (R)**  
The system achieved **97.3 % recall**, **92 % precision**, and maintained **<180 ms latency** at peak load of 5k images/sec. It cut manual inspection time from 8 hrs/day to 30 min, yielding a $1.2M annual savings for the client.

*Bar‑raiser focus:* clear ownership, data‑driven impact, deep technical trade‑offs, and iterative learning from early model misclassifications that led to the final architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
