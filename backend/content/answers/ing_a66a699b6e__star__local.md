---
qid: ing_a66a699b6e__star__local
question: 'Explain: Case Study: Customer-Specific Distillation Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 352
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:05:58-05:00'
sources: []
---

**Situation** – At a fintech startup, the flagship fraud‑detection model was too heavy for on‑device inference; latency hit 120 ms and battery drain spiked. The CEO demanded a lighter model that still met a 99% recall target across each merchant’s transaction profile.

**Task** – Build a customer‑specific distillation pipeline: create a single compact student network that could learn from the large teacher while tailoring its knowledge to individual merchants’ data distributions, all within a 4‑hour nightly batch window.

**Action** – I architected an end‑to‑end system in PyTorch Lightning. First, I partitioned the transaction logs by merchant and pre‑computed per‑merchant feature importance via SHAP. Then I ran knowledge‑distillation losses weighted by those importances, adding a contrastive term to preserve inter‑class margins. For each customer I spun up a lightweight Transformer (≈2 M params) and used gradient checkpointing so the nightly job stayed under 3 hours on our GPU cluster. Finally, I automated evaluation with A/B tests in production and rolled out the best student per merchant.

**Result** – Across 150 merchants we cut inference time from 120 ms to 35 ms (≈70% reduction) while keeping recall above 98.7%. The pipeline also reduced storage by 80%, enabling deployment on edge devices. I learned that tailoring distillation weights to customer‑specific feature importances can preserve performance even when aggressively shrinking models.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
