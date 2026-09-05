---
qid: ing_de6fff319e__star__local
question: 'Explain: Self-Distillation from Proof (SDP) — Knowledge Distillation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 330
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:53:36-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup we built a large transformer model for fraud detection that scored 0.94 AUC but was too heavy for real‑time mobile checks. Our engineering team needed an inference speed boost without sacrificing accuracy.

**Task** – I had to compress the model using Self‑Distillation from Proof (SDP) so that the lightweight student could match or exceed the teacher’s performance on edge devices while keeping latency under 50 ms.

**Action** – First, I ran a “proof” pass: we generated soft labels by feeding every training sample through the teacher and capturing its probability distribution. Then I trained a student network (half the parameters) to minimize cross‑entropy against those soft labels plus an L2 penalty on hidden activations to preserve intermediate representations. We used TensorFlow Lite for deployment, profiling GPU usage with NVIDIA Nsight, and iterated on layer pruning until the student achieved 0.93 AUC. I also implemented a scheduled temperature decay from 4 to 1 over epochs to balance sharpness and stability.

**Result** – The distilled model ran in 32 ms on an iPhone 13 Pro, a 35% speedup, while only dropping 0.01 AUC. Deployment reduced cloud inference costs by $12k/month. I learned that careful temperature scheduling and activation matching are key to preserving nuanced decision boundaries during distillation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
