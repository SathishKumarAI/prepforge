---
qid: ing_6a44acbce6__star__local
question: 'Explain: Training on Test Set — Anti Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 297
total_tokens: 531
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:00:05-05:00'
sources: []
---

**Situation**  
During a rapid prototype for an image‑classification model at my last company, the QA team delivered a small labeled dataset (1,000 images). We wanted to validate accuracy quickly, so we split it into 80/20 but used the test portion for hyperparameter tuning because the split was tiny.

**Task**  
I needed to deliver a reliable performance estimate and prevent over‑fitting while staying within the tight sprint deadline.

**Action**  
I restructured the workflow: created a separate validation set (70% train, 15% dev, 15% test), used cross‑validation on the training data for hyperparameter search, and kept the test set untouched. I also logged every experiment in MLflow, ensuring that each model version had a reproducible configuration. When the team asked for quick numbers, I ran an early stopping baseline to show that the dev accuracy hovered at 86% before finalizing.

**Result**  
The final deployed model achieved 88% test accuracy—10 points higher than the earlier estimate—and we avoided the “peeking” bias that would have inflated our metrics. The process also cut debugging time by 25%, and I documented the split strategy in the team’s best‑practice guide, preventing future anti‑patterns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
