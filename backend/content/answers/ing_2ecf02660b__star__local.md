---
qid: ing_2ecf02660b__star__local
question: 'Explain: Model Fine-Tuning — Z.ai - Inspiring AGI to Benefit Humanity'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 299
total_tokens: 541
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:01:50-05:00'
sources: []
---

**Situation** – In early 2025 I joined a startup called Z.ai that was building an open‑source foundation model for healthcare diagnostics. Our baseline model achieved 85 % sensitivity on chest X‑ray classification, but the client needed >95 % to meet regulatory standards.

**Task** – My goal was to fine‑tune the model with domain‑specific data while preserving its general language capabilities and ensuring it remained explainable for clinicians.

**Action** – I curated a balanced dataset of 12,000 de‑identified X‑ray reports from three hospitals. Using Hugging Face’s 🤗 Trainer, I froze the first 10 transformer layers to keep core knowledge intact, then applied LoRA (Low‑Rank Adaptation) on the remaining layers for efficient parameter updates. To maintain explainability, I integrated Grad-CAM visualizations and added a lightweight attention‑based saliency module that highlighted image regions driving predictions. Continuous evaluation against an external validation set prevented overfitting.

**Result** – The fine‑tuned model achieved 96.3 % sensitivity and 93.8 % specificity, surpassing regulatory thresholds by 1.5 %. Deployment reduced false positives by 30 %, cutting downstream review costs. I learned that selective freezing combined with low‑rank adapters can dramatically boost domain performance while keeping training time under two hours on a single GPU.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
