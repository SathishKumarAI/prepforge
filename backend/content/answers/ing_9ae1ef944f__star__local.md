---
qid: ing_9ae1ef944f__star__local
question: 'Explain: Distillation & synthetic data — Fine Tuning And Alignment'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 398
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:42:09-05:00'
sources: []
---

**Situation:**  
When I joined a fintech startup, our flagship fraud‑detection model was slow to update and overfitted on the limited labeled transactions we had. The product team needed a lightweight, aligned version that could run in real time on edge devices.

**Task:**  
I had to distill the heavy transformer into a 10‑fold smaller network while preserving its precision, and generate synthetic transaction data that reflected emerging fraud patterns so the model stayed relevant without compromising privacy.

**Action:**  
First, I used knowledge‑distillation with a temperature‑scaled soft‑label loss in PyTorch, training a MobileBERT student against our base BERT. To align it for compliance, I applied reinforcement learning from human feedback (RLHF) to penalize false positives on legitimate payments. For synthetic data, I scripted prompt‑based generation in GPT‑4, feeding domain‑specific templates and injecting controlled noise, then filtered the outputs through a rule‑engine that enforced KYC constraints. Finally, I fine‑tuned the student with LoRA adapters on both real and synthetic batches, monitoring loss and F1.

**Result:**  
The distilled model ran at 50 ms per inference, 12× faster, while maintaining 96% of the original AUC‑ROC (0.98 → 0.97). Synthetic data added 35% more positive fraud examples, reducing false‑negative rate by 18%. I learned that combining distillation with RLHF and domain‑aware synthetic generation can keep models both lean and ethically aligned.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
