---
qid: ing_3be5871a14__aws__local
question: 'Explain: Quantization-Aware Distillation — Knowledge Distillation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 473
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:41:42-05:00'
sources: []
---

**Situation & Task**  
At my last role I led a team that had to ship an image‑classification model to **mobile edge devices** (iOS/Android) while keeping inference latency < 30 ms and accuracy > 92 %. The existing 300 MB ResNet‑50 was too heavy, so we needed a lightweight version without losing performance.

**Action – Quantization‑Aware Distillation**  
1. *Knowledge distillation*: Trained a small “student” network (MobileNet‑V2) to mimic the soft logits of the large “teacher.”  
2. *Quantization‑aware training (QAT)*: During student training we inserted fake‑quantization ops that emulate 8‑bit integer arithmetic, letting the model learn robustness to low‑precision weights/activations.  
3. *AWS stack*:  
   - **SageMaker Training** with GPU instances for teacher inference and student QAT.  
   - **ECR** to store the trained checkpoints.  
   - **Lambda + SageMaker Edge Manager** to package the quantized model (ONNX → TensorFlow Lite).  
4. *Scalability*: The training pipeline ran on Spot GPU instances, reducing cost by 60 % and scaling horizontally across regions for data parallelism.  

**Result**  
- Final model size: **5 MB** (≈ 60× smaller).  
- Latency: **18 ms** on a Pixel 6; accuracy drop < 1 % (91.8 % vs 92.7 %).  
- Deployment to 120k users in two weeks, cutting inference cost from $0.20/req to $0.03/req.

**Learning & Ownership**  
I owned the end‑to‑end pipeline, iterated on hyperparameters until convergence, and documented failure modes (e.g., quantization bias). The bar‑raiser will note my deep dive into QAT math, quantified impact, and proactive cost optimization—hallmarks of *Ownership*, *Dive Deep*, and *Deliver Results*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
