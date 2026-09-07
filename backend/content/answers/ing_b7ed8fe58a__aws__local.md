---
qid: ing_b7ed8fe58a__aws__local
question: 'Explain: Feature/Hidden State Distillation — Knowledge Distillation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 373
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:19:55-05:00'
sources: []
---

**Answer (Amazon Way)**  

> **Leadership Principles:** *Ownership* & *Dive Deep*  

**Situation / Task** – While revamping a recommendation engine, we had to deploy a 2 GB transformer model on edge devices with <50 ms latency.  
**Action** – I led a “feature‑distillation” project: (1) Trained a large teacher model; (2) Extracted hidden‑state activations for every layer; (3) Built a lightweight student that learned to predict those states using *knowledge distillation* loss + cross‑entropy. We used **AWS SageMaker** for distributed training, **Amazon S3** for checkpoint storage, and **Amazon ECR** to ship the student as a Docker image into **Greengrass** on IoT devices.  
**Result** – The distilled model achieved 92 % of teacher accuracy while cutting inference time from 180 ms to 45 ms (4× speedup) and size from 2 GB to 200 MB, enabling real‑time suggestions on 100k+ devices with <5 % increase in monthly data transfer cost.  
**Learnings** – I discovered that aligning loss terms to hidden states requires careful temperature tuning; a failed attempt increased error by 7 %. Iterating with *continuous integration* pipelines (CodePipeline) fixed the issue and reinforced my habit of testing edge‑case behavior early.  

This showcases **ownership** over end‑to‑end deployment, **dive deep** into model internals, and delivers measurable impact—exactly what a bar‑raiser expects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
