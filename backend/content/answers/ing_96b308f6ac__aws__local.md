---
qid: ing_96b308f6ac__aws__local
question: 'Explain: Overfitting examples — What is Overfitting? - Overfitting in Machine
  Learning Explained - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 428
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:06:49-05:00'
sources: []
---

**Situation & Task (S)**  
At my previous role I built a fraud‑detection model for credit‑card transactions. The training set had ~1M labeled samples and the test set was ~200K. Our goal: keep false positives below 2% while maximizing true‑positive rate.

**Action (A)**  
I noticed that the model’s accuracy on the training data hit **99.9 %**, but on the held‑out test it dropped to **92 %**. This classic *overfitting* occurs when a learner captures noise or idiosyncratic patterns rather than generalizable signals.

To diagnose I plotted learning curves and performed k‑fold cross‑validation. The gap widened as we added more layers, confirming overfitting. I applied:
- **Regularization** (L2 weight decay)  
- **Dropout** (0.3) in the dense layers  
- **Early stopping** on validation loss  
- Reduced model depth from 10 to 5 hidden units  

I also leveraged **AWS SageMaker** for hyper‑parameter tuning, using its built‑in *Model Monitor* to track drift.

**Result (R)**  
Post‑tuning accuracy improved to **97 %** on the test set, with false positives falling to **1.8 %**—a 0.2 pp reduction that saved ~$500K in customer churn annually. Deployment on SageMaker Endpoint achieved <200 ms latency at $0.30/hour, meeting SLA while keeping cost below budget.

---

### What a bar‑raiser looks for  
- **Ownership:** Took full responsibility from data prep to deployment.  
- **Dive Deep:** Quantified overfitting via learning curves and cross‑validation.  
- **Impact:** Delivered measurable business savings and performance gains.  
- **Learning:** Iteratively refined the model, turning a failure into a robust solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
