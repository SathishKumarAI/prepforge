---
qid: ing_9d175993da__faang__local
question: 'Explain: Week 3: Classification — Supervised Machine Learning: Regression
  and Classification  | Coursera'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 440
total_tokens: 683
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:49:22-05:00'
sources: []
---

**Clarify**  
The question asks for an explanation of the third week of a Coursera ML course, focusing on *supervised learning*—specifically the difference between **regression** (predicting continuous values) and **classification** (assigning discrete labels). I’ll assume the audience has seen basic linear algebra and probability.

**Approach**  
1. Define supervised learning and its two branches.  
2. Contrast regression vs classification with examples.  
3. Summarize key algorithms covered in Week 3: Linear Regression, Logistic Regression, k‑Nearest Neighbors (kNN), Support Vector Machines (SVM).  
4. Mention evaluation metrics unique to each task.

**Depth**  
- **Regression** models a function \(f(x)\) → real number; loss = Mean Squared Error (MSE); objective: minimize \(\frac{1}{N}\sum (y_i - f(x_i))^2\).  
- **Classification** outputs class probabilities; logistic regression uses the sigmoid, SVM maximizes margin with hinge loss. kNN is non‑parametric, relying on distance metrics.  
- Feature scaling, regularization (\(L_1/L_2\)), and bias–variance trade‑off are introduced early to prevent overfitting.  
- Metrics: R² for regression; accuracy, precision/recall, ROC‑AUC for classification.

**Edge Cases**  
- Regression fails on categorical inputs unless encoded; classification struggles with highly imbalanced classes.  
- kNN is sensitive to irrelevant features and high dimensionality (curse of dimensionality).  
- SVM kernel choice can overfit if not cross‑validated.

**Optimize & Communicate**  
I’d highlight that Week 3 equips students with both the theory (loss functions, gradients) and practical tools (scikit‑learn pipelines). Emphasize how choosing the right model depends on data size, feature nature, and interpretability needs. Conclude by noting that mastering these fundamentals is essential before moving to ensemble methods or deep learning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
