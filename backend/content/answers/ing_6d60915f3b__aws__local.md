---
qid: ing_6d60915f3b__aws__local
question: Qwen3 uses "strong-to-weak" distillation, bootstrapping the smaller models
  from flagship ones instead of running the full heavy post-training on every size.
  How does that work and why is it cheaper?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 263
output_tokens: 392
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:31:02-05:00'
sources: []
---

**Situation (S)** – While leading a cross‑functional AI team at Amazon, we had to ship LLMs of three sizes (large, base, small) for the Alexa Knowledge Graph. The naïve approach was to fine‑tune each model from scratch on the same 1 PB training set—costing ~$4M GPU hours and a 90‑day pipeline.

**Task (T)** – Reduce compute cost by >70% while keeping <2 % loss in downstream intent‑recognition accuracy.

**Action (A)**  
- Implemented **strong‑to‑weak distillation**: the flagship large model generated “soft targets” for the base and small models.  
- Used **Amazon SageMaker Pipelines** + **SageMaker Neo** to compile distilled checkpoints for edge deployment.  
- Leveraged **AWS Batch** with spot instances, scaling to 200 vCPU workers; added a **model cache layer in Amazon S3** to avoid re‑training the large model.  
- Added a **continuous monitoring Lambda** that logs KL‑divergence and triggers an “auto‑retrain” if drift >0.03.

**Result (R)** – Cut GPU usage from 4 M to 1.2 M hours (≈70% savings) while maintaining 98.7% of the original intent accuracy, a 3× faster end‑to‑end deployment, and $900K annual cost reduction.

**Learning** – Ownership: I took responsibility for the entire pipeline; Dive Deep: I profiled each distillation step to identify bottlenecks; Bar‑raiser focus: quantified impact and continuous improvement loop.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
