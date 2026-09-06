---
qid: ing_c1b62e6add__fp__local
question: How Does Ridge Regression Work? — Ridge and Lasso Regression in Python -
  Analytics Vidhya
topic: Data Analytics
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 464
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:53:59-05:00'
sources: []
---

**Ridge Regression: a principled shrinkage method**

At its core, ordinary least squares (OLS) solves  

\[
\hat\beta=\arg\min_\beta \|y-X\beta\|^2,
\]

choosing the β that best explains the data.  
When predictors are collinear or when \(p>n\), OLS becomes ill‑conditioned: tiny changes in y inflate certain β components, yielding high variance and unstable predictions.

Ridge tackles this by *regularizing* the loss:

\[
\hat\beta_{\text{ridge}}
=\arg\min_\beta \Bigl(\|y-X\beta\|^2+\lambda\|\beta\|_2^2\Bigr),
\]

adding an \(L_2\) penalty that discourages large coefficients.  
Mathematically, the normal equations become  

\[
(X^\top X + \lambda I)\hat\beta_{\text{ridge}}=X^\top y,
\]

so we invert a *better‑conditioned* matrix.  
Geometrically, contours of the RSS are ellipses; the \(L_2\) penalty defines a spherical constraint. The intersection point is pulled toward zero along all directions, shrinking correlated variables together rather than eliminating them (as Lasso does).

**Why it must work this way**

- **Bias‑variance tradeoff:** Shrinkage introduces bias but reduces variance more sharply when predictors are noisy or collinear, lowering mean squared error.
- **Information theory:** The penalty is equivalent to assuming a Gaussian prior on β; ridge becomes the MAP estimate under that prior.

**Non‑obvious insight**

Ridge’s shrinkage preserves *relative* importance among correlated variables. If two predictors carry almost identical information, ridge shrinks them jointly but keeps their ratio roughly constant. This contrasts with Lasso, which arbitrarily zeros one and can misrepresent joint effects—an important nuance when interpreting coefficients in multicollinearity‑heavy datasets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
