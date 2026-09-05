---
qid: vq_805df06273__fp__local
question: Could you provide an example of a root cause analysis?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 462
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:43:16-05:00'
sources: []
---

**Root‑Cause Analysis (RCA) for an AI Model that Fails to Generalize**

1. **Problem Statement**  
   A convolutional neural network (CNN) trained on street‑view images correctly classifies cars in the training set but mislabels 70 % of unseen test images taken from a different city.

2. **Why it Must Fail?**  
   The model learns *spurious correlations*—features that are predictive only within the training distribution, not universally useful.  
   - *Fundamental principle*: Generalization is bounded by the *capacity* to capture true data‑generating mechanisms, not dataset idiosyncrasies.  
   - In information‑theoretic terms, the model’s mutual information with the label is high on the training set but low on new distributions.

3. **RCA Steps**  

| Step | Action | Insight |
|------|--------|---------|
| **1. Data audit** | Compare pixel statistics (mean, variance) across train/test sets. | Identifies a domain shift: lighting and background differ. |
| **2. Feature importance mapping** | Use Grad‑CAM to see which pixels influence decisions. | Reveals the model focuses on street signs rather than cars—signs are city‑specific. |
| **3. Model capacity check** | Verify if the network can represent invariant car shapes (e.g., via feature space clustering). | Shows limited depth; overfitting to local textures. |
| **4. Regularization experiment** | Add domain‑adversarial loss and data augmentation. | Improves test accuracy, confirming that lack of invariance was the root cause. |

4. **Non‑obvious Insight**  
   The *distribution shift* is not merely a change in appearance; it alters the *conditional probability* \(P(\text{car}|\text{image})\). By treating domain as an auxiliary variable and enforcing invariance, we transform the problem into one of *covariate shift correction*, a classic optimization principle that often goes unnoticed in end‑to‑end deep learning pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
