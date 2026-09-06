---
qid: vq_101f90b0ba__faang__local
question: Should strongly linked variables be removed before doing PCA?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 490
total_tokens: 722
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:57:54-05:00'
sources: []
---

**Clarify**  
We’re asked whether we should drop highly correlated (strongly linked) features before performing Principal Component Analysis (PCA). The goal is to decide if pre‑filtering improves dimensionality reduction and downstream modeling.

Assumptions:  
1. Data are continuous and centered.  
2. PCA will be used for feature extraction, not as a regularizer alone.  
3. Correlation refers to Pearson’s \(r\) or covariance magnitude.

**Approach**  
1. Compute the correlation matrix (or covariance).  
2. Identify pairs with \(|r| > \tau\) (e.g., 0.9).  
3. Decide whether to drop one member of each pair or keep both.  
4. Run PCA on the resulting set and compare explained variance.

**Depth**  
PCA’s eigen‑decomposition is invariant under linear transformations: if two variables are identical, they contribute a single principal component with non‑zero variance; redundant columns only inflate matrix size but do not alter the subspace spanned by the PCs. Dropping one of a perfectly correlated pair does **not** change the space of possible PCs—only reduces computational cost (O(n³) for eigen‑decomposition).  

However, if variables are *highly* but not perfectly correlated, removing one can slightly alter eigenvectors because PCA maximizes variance along directions orthogonal to all features. The marginal loss in explained variance is usually negligible compared to the computational savings and potential multicollinearity benefits for downstream models.

**Edge Cases**  
- Near‑perfect collinearity can cause numerical instability; dropping a duplicate helps SVD convergence.  
- If domain knowledge flags one feature as more interpretable, keep that one.  
- For very high‑dimensional data (p >> n), removing redundancies reduces overfitting risk.

**Optimize & Communicate**  
Recommend:  
1. Compute correlation matrix once.  
2. Drop a variable from each pair with \(|r| > 0.95\).  
3. Run PCA; report variance retained and runtime savings.  
Explain that while PCA can handle multicollinearity, pruning redundant features streamlines computation without sacrificing representational power, aligning with FAANG expectations of efficient, explainable solutions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
