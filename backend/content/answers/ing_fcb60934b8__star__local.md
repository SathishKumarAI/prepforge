---
qid: ing_fcb60934b8__star__local
question: You're adapting a pretrained model to a new task. What do you freeze, what
  do you train, and how do you decide?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 301
total_tokens: 552
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:53:55-05:00'
sources: []
---

**Situation:** In my last role I was tasked with turning a Vision Transformer fine‑tuned on ImageNet into a model that could detect diabetic retinopathy from retinal scans in our hospital’s PACS system. The dataset had only ~3,000 labeled images, and we needed to meet a 90% sensitivity benchmark before deployment.

**Task:** My goal was to adapt the pretrained ViT so it learned the subtle texture differences of early lesions while avoiding overfitting on the small dataset.

**Action:** I froze all layers up to the last transformer block, preserving the generic visual representations. I added a lightweight MLP head and a 2‑layer CNN for retinal‑specific preprocessing (contrast‑limited adaptive histogram equalization). The new layers were trained with AdamW at 1e-4, using a cosine schedule and mixed precision. I monitored validation loss and AUC; once the head converged, I unwrapped the penultimate block for a brief fine‑tune phase (0.5 epochs) to capture domain‑specific patterns without destabilizing weights.

**Result:** The adapted model achieved 92% sensitivity at 80% specificity on our hold‑out set—exceeding the target—and reduced inference time by 30% compared to training from scratch. I learned that freezing early layers preserves generality, while selectively unfreezing higher blocks balances adaptation with regularization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
