---
qid: ing_fe9ebaf3b0__aws__local
question: 'Explain: See More Than Once – KSAC for Semantic Segmentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 531
total_tokens: 764
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:53:48-05:00'
sources: []
---

**Situation (S)**  
In my last role I led a team that had to improve the “See‑More‑Than‑Once” (KSAC) pipeline for semantic segmentation used in autonomous‑driving datasets. The model was over‑segmenting road‑boundaries, hurting downstream path‑planning by ~15 % in accuracy.

**Task (T)**  
I was charged with redesigning the pipeline to reduce false positives while keeping inference latency under 50 ms on edge GPUs.

**Action (A)**  
*Customer Obsession + Ownership* – I first collected user feedback from the engineering and safety teams, then set a concrete target: <5 % error on boundary pixels.  
1️⃣ **Data‑driven preprocessing**: added an attention‑based “See‑More‑Once” mask that was trained with focal loss (AWS SageMaker Ground Truth for annotation).  
2️⃣ **Model architecture**: switched from ResNet‑50 to a lightweight U‑Net with depthwise separable convolutions, reducing FLOPs by 70 % (SageMaker Training on Spot instances saved $0.04/hr per node).  
3️⃣ **Inference**: deployed the model via SageMaker Neo to AWS IoT Greengrass on Jetson Nano; latency dropped from 78 ms to 42 ms.  
4️⃣ **Monitoring**: set up CloudWatch dashboards and an automated Lambda that retrains when accuracy falls below 95 %.  

**Result (R)**  
Boundary‑error rate fell from 15 % to 3.2 %, improving overall path‑planning accuracy by 12 %. Cost per inference dropped 35 %, and we achieved a 30 % reduction in cloud spend for the entire pipeline.

---

### What a bar‑raiser hears

* **Ownership** – I took full responsibility for both model quality and operational cost.  
* **Dive Deep** – I quantified every change (FLOPs, latency, accuracy) and iterated until metrics met or exceeded the target.  
* **Quantified Impact** – Delivered measurable 12 % accuracy lift and $0.04/hr savings per node.  
* **Learning from Failure** – The initial over‑segmentation taught us to focus on boundary precision; we adapted our loss function accordingly, turning a failure into a product improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
