---
qid: ing_709d689c8b__aws__local
question: What is Overfitting? — What is Overfitting? - Overfitting in Machine Learning
  Explained - AWS
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 355
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:40:01-05:00'
sources: []
---

**Overfitting**  
*Leadership Principles: Ownership & Dive Deep*

**Situation:** While building a recommendation engine for an e‑commerce platform, the model achieved >95 % accuracy on the training set but only 68 % on new user data.

**Task:** I had to diagnose why performance dropped and fix it without hurting speed or cost.

**Action:**  
1. **Dive Deep into metrics** – plotted learning curves; saw training loss plummet while validation loss plateaued → classic overfitting.  
2. **Root‑cause analysis** – model complexity (10 × more layers) + no regularization, and training data contained noisy user tags.  
3. **Remedy** – added L2 weight decay, dropout (0.4), and early stopping; reduced feature dimensionality with PCA; split data 80/20 for validation.  
4. **AWS Services** – used SageMaker’s built‑in “Cross‑Validation” notebook, S3 for raw data, and EC2 spot instances to keep cost < $0.05/hr.

**Result:** Validation accuracy rose from 68 % to 84 %, and inference latency stayed below 50 ms on a t3.medium instance. The model now generalizes better across new users, directly boosting conversion by **12 %** over the previous version.

*Bar‑raiser note:* Demonstrates ownership (took full responsibility), depth (analyzed curves, regularization), quantified impact (12 % lift), and learned from failure (avoided costly retraining).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
