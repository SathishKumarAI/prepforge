---
qid: ing_f38e5ab8a7__star__local
question: 'Explain: Continued Pretraining (Domain Adaptation)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 336
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:35:00-05:00'
sources: []
---

**Situation:**  
I was working on a medical imaging classification model for a startup that had already fine‑tuned a Vision Transformer on a large general image dataset (ImageNet). When we moved to a new client—an oncology clinic with only 3,000 CT scans—the accuracy dropped from 92 % to 78 % because the domain distribution was very different.

**Task:**  
I needed to adapt the pre‑trained model to the CT domain without retraining from scratch, keeping inference latency under 200 ms on a single GPU while improving top‑1 accuracy to at least 88 %.

**Action:**  
I implemented continued pretraining (domain adaptation) by first freezing the lower transformer layers and then training the remaining heads on the unlabeled CT scans using a self‑supervised contrastive loss (SimCLR). I used a learning rate schedule of 5e‑4 with cosine decay, mixed precision, and a batch size of 64. After 12 k steps, I fine‑tuned the whole network for 3 epochs on the labeled subset, using AdamW and weight decay 0.01.

**Result:**  
Accuracy rose to 89.6 % (a 11.6 % relative improvement) while inference latency stayed at 190 ms. The exercise taught me that leveraging unlabeled data via continued pretraining can bridge domain gaps quickly, preserving computational budgets and accelerating deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
