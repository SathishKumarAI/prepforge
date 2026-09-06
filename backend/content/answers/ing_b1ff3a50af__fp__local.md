---
qid: ing_b1ff3a50af__fp__local
question: 'Explain: 1.11.1. Gradient-boosted trees — 1.11. Ensembles: Gradient boosting,
  random forests, bagging, voting, stacking \u2014 scikit-learn 1.9.0 documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 210
output_tokens: 682
total_tokens: 892
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:22:33-05:00'
sources: []
---

### 1.11.1 Gradient‑Boosted Trees

At its core, a decision tree partitions feature space into axis‑aligned cells, each assigned a constant prediction.  
A single tree is a **piecewise‑constant function** \(f(x)=\sum_{k}c_k \mathbf{1}\{x\in R_k\}\).  
Training a tree by minimizing squared error yields the best *single* such partition for the data.

Gradient boosting tackles the **bias–variance trade‑off** differently: we iteratively add trees that predict the *negative gradient* of a loss \(L(y,f(x))\) with respect to current predictions.  
If we write the residuals as
\(r_i^{(m)} = -\left.\frac{\partial L}{\partial f}\right|_{f=f^{(m-1)}}\),
then fitting a tree to \(\{x_i,r_i^{(m)}\}\) is equivalent to **locally linearizing** the loss surface and moving in its steepest descent direction.  
Each new tree is thus a *weak learner* that corrects where the previous ensemble performed poorly, reducing training error exponentially fast while controlling overfitting through shrinkage (learning rate) and subsampling.

#### Non‑obvious insight
The key to why boosting works so well lies in **margin maximization** for classification.  
When the loss is exponential or logistic, each tree’s contribution can be interpreted as adding a small *log‑odds* adjustment.  
Consequently, the final ensemble behaves like a *kernel machine* whose effective kernel is defined implicitly by the tree structure—a fact that explains why gradient boosting often surpasses bagged ensembles despite using only shallow trees.

### 1.11 Ensembles in scikit‑learn

| Method | Idea | Typical use |
|--------|------|-------------|
| **Random Forests** | Bagging + feature randomness: each tree sees a bootstrap sample and splits on a random subset of features. | Robust to overfitting, good for tabular data. |
| **Bagging** | Train identical learners on different bootstrap samples; aggregate by averaging or majority vote. | Reduces variance of unstable models (e.g., decision trees). |
| **Gradient Boosting** | Sequentially add trees that fit residuals; shrinkage and subsampling control overfitting. | State‑of‑the‑art for many Kaggle problems. |
| **Voting** | Combine predictions from heterogeneous models by weighted or hard voting. | Leverages complementary strengths of different algorithms. |
| **Stacking** | Train a meta‑learner on the outputs (or intermediate features) of base learners; learns how to weight them optimally. | Can capture higher‑order interactions that simple voting cannot. |

All of these rely on the same principle: **ensemble diversity + aggregation reduces generalization error**.  
scikit‑learn implements each with a clean API (`RandomForestClassifier`, `BaggingRegressor`, `GradientBoostingClassifier`, `VotingClassifier`, `StackingClassifier`), allowing users to mix and match models while preserving reproducibility through random seeds.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
