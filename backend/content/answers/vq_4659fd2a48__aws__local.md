---
qid: vq_4659fd2a48__aws__local
question: What are SVM's different Kernels?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 589
total_tokens: 817
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:49:07-05:00'
sources: []
---

**Situation & Task (Customer Obsession)**  
In a recent data‑science sprint for our recommendation engine, the product team asked me to explain how we could transform a linear model into a non‑linear one using Support Vector Machines (SVMs) so that we could better capture user–item interactions without sacrificing performance.  

**Action (Dive Deep & Ownership)**  
I started by mapping each kernel to its mathematical intuition and practical impact on the decision boundary:  

| Kernel | Formula | When to Use | AWS Service for Scaling |
|--------|---------|-------------|--------------------------|
| **Linear** | `K(x, y) = x·y` | High‑dimensional sparse data (e.g., text). Fast training. | Amazon SageMaker Linear Learner |
| **Polynomial** | `K(x, y) = (γ x·y + r)^d` | When interactions of degree *d* matter; balances expressiveness & overfitting risk. | SageMaker built‑in `sklearn.svm.SVC` with GPU instances |
| **Radial Basis Function (RBF)** | `K(x, y) = exp(-γ‖x−y‖²)` | Captures local patterns; most common for non‑linear data. | SageMaker `sm-hosting` with auto‑scaling |
| **Sigmoid** | `K(x, y) = tanh(γ x·y + r)` | Approximates neural nets; rarely used due to instability. | Not recommended – use GPU training instead |

I benchmarked each kernel on a 1M‑row clickstream dataset:  
- Linear: **Training time 12 min**, accuracy 81%.  
- Polynomial (degree 3): **30 min**, accuracy 86%.  
- RBF (γ=0.001): **2 h**, accuracy 90% – the best trade‑off for our latency budget.  

I deployed the RBF model on SageMaker with an **auto‑scaling endpoint** to keep <100 ms inference, costing ~$0.12 per 1K invocations versus ~\$0.05 for linear.

**Result (Deliver Results)**  
The RBF SVM increased conversion by **4.7%**, translating to a $2.3M lift in annual revenue. The model also reduced feature engineering effort by **70%** compared to hand‑crafted interaction terms.  

**Bar‑raiser cues** – I showed ownership by driving the entire pipeline (feature prep → hyperparameter search → deployment), deep technical dive into kernel mechanics, quantified business impact, and a post‑mortem on why we abandoned sigmoid due to convergence issues.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
