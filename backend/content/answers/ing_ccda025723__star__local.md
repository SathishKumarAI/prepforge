---
qid: ing_ccda025723__star__local
question: 'Q: What is the risk of "Model Collapse" when training on synthetic data?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 294
total_tokens: 536
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:18:31-05:00'
sources: []
---

**Situation** – In my last role, we were building a fraud‑detection model for a fintech client. The production dataset had only 0.2% positive cases, so we generated synthetic transactions to balance the classes.

**Task** – My goal was to ensure that the model would generalize to real data and avoid “model collapse,” where performance degrades because the synthetic samples over‑represent certain patterns.

**Action** – I started by profiling the feature distributions of both real and synthetic data, using Kolmogorov–Smirnov tests for each numeric field and chi‑square for categorical ones. Where we found significant deviations, I applied conditional GANs to enforce realistic joint distributions rather than independent sampling. Next, I introduced a domain‑adversarial loss that penalized the model if it relied too heavily on synthetic‑only features. Finally, I ran cross‑validation with a holdout set of real transactions and monitored AUC drift during training, stopping early when the gap widened beyond 1%.

**Result** – The final model achieved an AUC of 0.92 on live traffic, up from 0.85 before synthetic augmentation, while the drift between synthetic and real performance never exceeded 0.5%. I learned that rigorous statistical matching plus adversarial regularization is key to preventing collapse when working with synthetic data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
