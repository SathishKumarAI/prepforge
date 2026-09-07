---
qid: ing_96b3cadc28__faang__local
question: 'Explain: The night-before cheat sheet — Cheatsheet'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 471
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:34:56-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise “night‑before” cheat sheet for AI concepts—key definitions, formulas, and typical interview topics. I’ll assume the audience is an engineer preparing for a FAANG machine‑learning role.

**Approach**  
I’ll structure the sheet into four sections: (1) fundamentals, (2) core algorithms, (3) evaluation & regularization, (4) system & deployment tips. Each will contain bullet points and quick formulas so it’s readable at 10 × speed.

**Depth**

| Section | Core Points |
|---------|-------------|
| **Fundamentals** | • Loss: \(L = -\sum y \log \hat{y}\)<br>• Gradient descent update: \(\theta \gets \theta-\eta\nabla_\theta L\) |
| **Core Algorithms** | • Logistic regression, SVM (hinge loss), Decision trees (Gini/entropy), k‑NN<br>• Neural nets: forward pass, backprop, ReLU, dropout<br>• RNN/LSTM equations for sequence modeling |
| **Evaluation & Regularization** | • Train/val/test split; cross‑validation<br>• Metrics: accuracy, precision, recall, F1, AUC‑ROC, BLEU<br>• L1/L2 penalties, early stopping, batch norm |
| **System & Deployment** | • Feature scaling, embedding lookup tables<br>• Model compression (pruning, quantization)<br>• Serving: TensorFlow‑Serving, ONNX, GPU vs TPU trade‑offs |

**Edge Cases**  
Missing data → imputation or mask; class imbalance → weighted loss, SMOTE. Overfitting → dropout, ensemble methods. Deployment latency → batch inference, edge models.

**Optimize & Communicate**  
I’d add a quick “debug checklist” (check gradients, data leakage, learning rate). During the interview I’ll narrate: *“First I confirm the dataset size and label balance… then I pick a baseline model—logistic regression—to gauge feature quality.”* This shows structured reasoning, clear communication, and depth—all within ~200 words.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
