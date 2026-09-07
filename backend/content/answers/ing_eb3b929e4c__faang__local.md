---
qid: ing_eb3b929e4c__faang__local
question: 'Explain: Binary (5 Problems) — Blind 75'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 827
total_tokens: 1061
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:47:00-05:00'
sources: []
---

**Problem:**  
Explain the *Binary* section of the **Blind 75** machine‑learning interview questions, covering five key problems.

---

### 1️⃣ Clarify  
- **Goal:** Identify the most common binary‑classification tasks in ML interviews (e.g., logistic regression, decision trees, SVMs, Naïve Bayes, k‑NN).  
- **Assumptions to confirm:**  
  - Data is clean and balanced?  
  - Feature scaling required?  
  - Evaluation metric: accuracy, AUC, F1?

---

### 2️⃣ Approach  
Outline each algorithm’s intuition, implementation steps, and when it shines:

| Algorithm | Core Idea | Typical Use‑Case |
|-----------|-----------|------------------|
| Logistic Regression | Sigmoid + cross‑entropy loss | Linearly separable data |
| Decision Tree | Recursive feature splits (Gini/Entropy) | Non‑linear, interpretable |
| Support Vector Machine | Maximize margin with kernel trick | High‑dimensional spaces |
| Naïve Bayes | Conditional independence + Bayes’ theorem | Text classification, sparse data |
| k‑Nearest Neighbors | Distance‑based voting | Small datasets, non‑parametric |

---

### 3️⃣ Depth  

#### Logistic Regression
- **Model:** \(p = \sigma(\mathbf{w}^\top\mathbf{x}+b)\)  
- **Training:** Gradient descent on loss \(L=-[y\log p+(1-y)\log(1-p)]\).  
- **Complexity:** O(nd·k) per epoch (n samples, d features, k iterations).

#### Decision Tree
- **Split criterion:** Gini impurity \(G = 2p(1-p)\).  
- **Growth:** Depth‑controlled to avoid overfitting; pruning via validation.

#### SVM
- **Dual problem:** Maximize \(\sum_i\alpha_i - \frac12\sum_{i,j}\alpha_i\alpha_j y_iy_j K(x_i,x_j)\) subject to constraints.  
- **Kernel choice:** Linear, RBF, polynomial – trade‑off between expressiveness and computation.

#### Naïve Bayes
- **Gaussian variant:** \(P(x|y)=\prod_{j}\frac{1}{\sqrt{2\pi\sigma^2_j}}\exp(-\frac{(x_j-\mu_j)^2}{2\sigma^2_j})\).  
- **Prior:** \(P(y)\) estimated from class frequencies.

#### k‑NN
- **Distance metric:** Euclidean or Manhattan; can be weighted.  
- **Prediction:** Majority vote among k nearest labels.  
- **Cost:** O(n·d) per query, impractical for large n unless using KD‑trees.

---

### 4️⃣ Edge Cases  
| Case | Issue | Mitigation |
|------|-------|------------|
| Imbalanced classes | Accuracy misleading | Use ROC/AUC, class weighting, SMOTE |
| High dimensionality | Curse of dimensionality | Feature selection or regularization (e.g., L1) |
| Noisy labels | Overfitting | Cross‑validation, robust loss functions |
| Small dataset | k‑NN overfits | Increase k, use distance weighting |

---

### 5️⃣ Optimize & Communicate  
- **Model stacking:** Combine predictions of all five for higher AUC.  
- **Hyperparameter tuning:** Grid search or Bayesian optimization.  
- **Explainability:** Decision trees and logistic regression provide interpretability; SVMs need SHAP/ELI5.  

**Narrative tip:** Start with the simplest (logistic), progress to more complex (SVM, tree) while highlighting trade‑offs in speed, accuracy, and explainability. This demonstrates a holistic understanding of binary classification—a core requirement for FAANG ML roles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
