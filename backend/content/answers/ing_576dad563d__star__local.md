---
qid: ing_576dad563d__star__local
question: How would you use synthetic data to build or extend an eval set, and what
  are the failure modes?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 358
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:22:33-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup, we were developing an AI‑powered fraud detection model that needed a robust evaluation set covering rare transaction patterns. The real data pipeline only yielded 1% of the anomalous cases we wanted to test against.

**Task:**  
I was tasked with expanding our eval set by generating synthetic transactions that preserved statistical fidelity while injecting realistic edge cases, and then validating that the model’s performance metrics remained trustworthy.

**Action:**  
First, I built a conditional GAN trained on the existing fraud logs, conditioning on transaction amount, merchant category, and time‑of‑day to keep distributions aligned. I used a Wasserstein loss with gradient penalty to stabilize training and incorporated an adversarial discriminator that flagged unrealistic samples. After generating 50k synthetic transactions, I performed a sanity check by computing pairwise Earth Mover’s Distance against the real data; distances stayed under 0.02. Then I ran cross‑validation, comparing ROC AUC on the mixed set versus the original: it improved from 0.92 to 0.95. Finally, I documented potential failure modes—distribution drift if the GAN overfits, class imbalance if synthetic samples dominate, and privacy leakage if too many real patterns slip through.

**Result:**  
The enriched eval set allowed us to discover a subtle false‑negative bias in the model, which we corrected by adding a calibration layer. Overall, our fraud detection accuracy rose by 3% on live traffic, and we gained confidence that the synthetic data would remain reliable for future retraining cycles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
