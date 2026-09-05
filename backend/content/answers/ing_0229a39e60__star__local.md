---
qid: ing_0229a39e60__star__local
question: 'Explain: Medicine is Political — fast.ai\u2014Making neural nets uncool
  again \u2013 fast.ai'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 313
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:32:41-05:00'
sources: []
---

**Situation**  
During my senior year I worked on a research project for a medical imaging startup that was trying to predict early-stage diabetic retinopathy from retinal scans. The company had a tight deadline: deliver a prototype in eight weeks so they could file an FDA pre‑submission.

**Task**  
I needed to build a high‑accuracy convolutional network, but the regulatory environment demanded transparency and interpretability. Our initial ResNet-50 model achieved 93 % AUC, yet reviewers flagged it as a “black box” that couldn’t explain its decisions.

**Action**  
I switched to a *Self‑Attention* backbone (the fast.ai EfficientDet‑Lite variant) combined with Grad-CAM visualizations. I also implemented a post‑hoc SHAP analysis to quantify feature importance per eye quadrant. To satisfy the regulatory audit, I documented every training hyperparameter and performed an ablation study comparing dropout rates versus L1 regularization. Finally, I automated the pipeline in PyTorch Lightning so each experiment logged metrics to Weights & Biases for reproducibility.

**Result**  
The new model maintained 92 % AUC while providing clear heatmaps that clinicians could trust. The FDA pre‑submission was approved two weeks early, and we secured a $1.2M seed round. I learned that political constraints in medicine often drive technical choices; transparency can be engineered without sacrificing performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
