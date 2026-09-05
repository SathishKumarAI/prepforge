---
qid: vq_826d69032d__star__local
question: What is selection bias, and what does it imply?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 320
total_tokens: 556
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:07:15-05:00'
sources: []
---

**Situation** – While working on a fraud‑detection model for a fintech startup, the training data were pulled exclusively from the app’s high‑traffic cities. The dataset missed users in rural areas where transaction patterns differ.

**Task** – I had to identify whether our model was suffering from selection bias and redesign the pipeline so it could generalize across all user segments while still meeting the 95 % precision target set by compliance.

**Action** – First, I performed exploratory data analysis: plotted feature distributions for urban vs. rural users and ran a Kolmogorov‑Smirnov test; the p‑value was <0.001, confirming significant bias. Next, I sourced additional transaction logs from partner banks in underserved regions, applied stratified sampling to balance the classes, and used SMOTE only on minority fraud cases to avoid overfitting. I also introduced a domain‑adaptation layer in the neural net that learns region‑specific embeddings. Finally, I set up A/B testing across both cohorts to monitor performance drift.

**Result** – The re‑trained model achieved 96 % precision overall and maintained 94 % precision in rural users—a 12 % lift for that segment—while keeping false‑positive rates below the regulatory threshold. I learned that selection bias can silently erode model fairness, and that proactive data diversification plus domain adaptation are key to mitigating it.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
