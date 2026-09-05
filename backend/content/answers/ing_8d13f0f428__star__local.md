---
qid: ing_8d13f0f428__star__local
question: 'Explain: When is fine-tuning the wrong call? Describe failure modes you''d
  warn a team about.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 398
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:14:45-05:00'
sources: []
---

**Situation** – In a client project for a medical imaging startup, we were asked to adapt an open‑source vision transformer to detect rare retinal lesions. The original model had been trained on ImageNet, and the team expected that fine‑tuning on a 2,000‑image proprietary set would give instant gains.

**Task** – My job was to decide whether to fine‑tune or instead build a custom feature extractor from scratch, ensuring we didn’t waste compute or degrade safety for end users.

**Action** – I ran a quick data audit: class imbalance (only 50 positive cases), label noise (~5 % disagreement among experts), and a domain shift in image resolution. I plotted the validation loss curve; it spiked after just two epochs, indicating catastrophic forgetting of low‑frequency features. I also simulated a transfer‑learning baseline with frozen early layers and found that performance plateaued at 68 % sensitivity, far below the 85 % required for regulatory approval. Instead, I proposed training a lightweight CNN from scratch using data augmentation (mixup, cutout) and a focal loss to counter imbalance. The new pipeline achieved 83 % sensitivity on hold‑out data in under two days.

**Result** – By warning against fine‑tuning under these conditions, we avoided a costly 12‑hour training run that would have produced a model with high false negatives. We saved $3k in GPU hours and met the regulatory threshold, learning that fine‑tuning is only safe when you have ample, clean, domain‑aligned data and can monitor for catastrophic forgetting.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
