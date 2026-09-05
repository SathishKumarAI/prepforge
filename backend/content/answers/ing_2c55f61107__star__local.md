---
qid: ing_2c55f61107__star__local
question: 'Explain: Data Synthesis & Curation — Your AI Product Needs Evals \u2013
  Hamel\u2019s Blog'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 292
total_tokens: 543
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:56:43-05:00'
sources: []
---

**Situation:** In my last role at a fintech startup, we launched an AI-driven credit scoring model that was underperforming on underserved demographics—our lift dropped from 12% to 4% in those groups during the first quarter.

**Task:** I had to build a robust evaluation pipeline and curate synthetic data that would expose biases and improve generalization for these segments while keeping compliance with privacy regulations.

**Action:** First, I mapped our production logs to create a reference dataset of real user interactions, then used differential‑privacy noise injection to generate synthetic cohorts that preserved demographic proportions. Next, I implemented an automated evaluation suite in Python (using PyTorch Lightning and TorchMetrics) that ran nightly against both real and synthetic data, calculating bias metrics like disparate impact and equal opportunity gaps. I also set up a CI/CD hook so any model update would trigger the eval pipeline before deployment.

**Result:** The new eval framework caught a previously hidden bias in our feature engineering; after retraining with the augmented dataset, lift for underserved groups rose to 9% while overall accuracy stayed within 0.2%. I learned that continuous data curation and synthetic augmentation are essential for responsible AI performance—and that an automated eval loop can turn bias detection into a first‑class citizen of model ops.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
