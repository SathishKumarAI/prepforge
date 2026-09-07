---
qid: ing_1597c3b57e__faang__local
question: 'Explain: 🧠 ML & Deep Learning Foundations — Cheatsheet'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 590
total_tokens: 825
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:33:17-05:00'
sources: []
---

**🧠 ML & Deep Learning Foundations – Cheat Sheet**

| # | Concept | Key Take‑aways |
|---|---------|----------------|
| 1 | **Problem Types** | • **Supervised**: labeled data (regression, classification). <br>• **Unsupervised**: no labels (clustering, dimensionality reduction). <br>• **Reinforcement**: agent + reward signal. |
| 2 | **Model Representation** | • Linear models: \(y = w^Tx+b\). <br>• Neural nets: layers of affine → non‑linearity → optional dropout/normalization. |
| 3 | **Loss Functions** | • MSE, MAE (regression). <br>• Cross‑entropy (classification). <br>• Hinge, KL‑divergence for specialized tasks. |
| 4 | **Optimization** | • Gradient descent variants: SGD, Momentum, Adam, RMSProp. <br>• Learning rate schedules, warm‑up, cosine decay. |
| 5 | **Regularization** | • L1/L2 penalties, dropout, weight decay, data augmentation. |
| 6 | **Evaluation Metrics** | • Accuracy, precision/recall/F1, AUC‑ROC (binary). <br>• BLEU, ROUGE for NLP; IoU for segmentation. |
| 7 | **Training Dynamics** | • Vanishing/exploding gradients → ReLU, residual connections, batch norm. <br>• Overfitting ↔ underfitting trade‑off. |
| 8 | **Hardware & Scaling** | • GPUs/TPUs accelerate matrix ops; mixed precision (FP16). <br>• Distributed data parallelism vs model parallelism. |
| 9 | **Model Deployment** | • Quantization, pruning, ONNX export. <br>• Serving with TensorRT, TorchServe, or custom REST endpoints. |
|10 | **Ethics & Bias** | • Fairness metrics (equal opportunity, demographic parity). <br>• Explainability: SHAP, LIME; audit trails. |

---

### Quick Recap
- Start by **identifying the learning problem** → choose loss and metric.  
- Build a **neural architecture** that matches data size & complexity.  
- Train with **gradient‑based optimizers**, tune hyper‑parameters via validation.  
- Evaluate on held‑out set, check for overfitting; apply regularization if needed.  
- Deploy with attention to inference speed and robustness; monitor post‑deployment drift.

> *Tip:* Keep an eye on the **bias–variance trade‑off** at every stage—your model should generalize, not just memorize.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
