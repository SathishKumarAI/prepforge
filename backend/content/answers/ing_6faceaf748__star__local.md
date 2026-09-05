---
qid: ing_6faceaf748__star__local
question: 'Explain: Training Paradigm and Objectives (RQ1 & RQ3).'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 338
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:10:18-05:00'
sources: []
---

**Situation** – In my last role as a research engineer at a fintech startup, we were building an automated credit‑risk model that needed to predict loan defaults with high precision while remaining explainable for regulators.

**Task** – I was tasked with designing the training paradigm and defining clear objectives: (RQ1) optimize predictive accuracy on imbalanced data, and (RQ3) ensure fairness across demographic groups. The goal was a 5% lift in AUC and <2% disparate impact.

**Action** – First, I set up a stratified k‑fold cross‑validation pipeline using scikit‑learn to preserve minority class representation. For RQ1, I experimented with focal loss and SMOTE oversampling, tuning the gamma parameter via Bayesian optimization (Optuna). For RQ3, I added a gradient‑penalty term on the Wasserstein distance between group distributions, integrated into the loss function. I also employed SHAP to audit feature importance per subgroup. All training ran on an Azure GPU cluster with mixed precision to keep inference latency <30 ms.

**Result** – The final model achieved 0.87 AUC (up from 0.82) and reduced disparate impact from 12% to 1.8%. Deployment cut default losses by $350k annually, and the fairness audit satisfied regulatory review, allowing us to launch the product in three new markets. I learned that coupling robust training paradigms with explicit fairness constraints yields both business value and compliance confidence.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
