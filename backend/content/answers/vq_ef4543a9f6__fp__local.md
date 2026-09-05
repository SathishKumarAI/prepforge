---
qid: vq_ef4543a9f6__fp__local
question: what is Cost Function?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 497
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:02:58-05:00'
sources: []
---

**Cost function (loss function)**  
At its core, an AI model is a mapping \(f_\theta\) from inputs \(x\) to outputs \(\hat y\), parameterized by \(\theta\). The *fundamental problem* it solves is: *given data drawn from some distribution, find the parameters that make the predictions as close as possible to reality*.  

To formalize “closeness” we introduce a scalar penalty \(L(y,\hat y)\) that quantifies the discrepancy for a single example. This penalty must be **non‑negative** (no negative error), **zero iff** \(\hat y=y\) (perfect prediction incurs no cost), and typically **smooth** so gradients exist.  

The *cost function* \(J(\theta)=\mathbb{E}_{(x,y)\sim P}[L(y,f_\theta(x))]\) is the expected penalty over the data distribution. Minimizing \(J\) is an instance of *risk minimization*, a statistical decision‑theoretic principle: we choose \(\theta\) that yields minimal expected loss under the true (unknown) distribution.  

Why this structure?  
1. **Optimization**: The expectation turns learning into a tractable convex or smooth problem amenable to gradient descent.  
2. **Information theory**: For probabilistic models, many popular losses (cross‑entropy, log‑loss) are negative log‑likelihoods, i.e., they maximize the likelihood of data—an information‑theoretic objective.  
3. **Geometry**: Losses like squared error correspond to Euclidean distance; hinge loss to margin geometry in SVMs.  

*Non‑obvious insight*: The choice of \(L\) shapes not only the shape of the optimization landscape but also the *robustness* of the model. For example, replacing squared error with absolute error changes the influence of outliers from quadratic to linear—an effect that can be understood as altering the underlying probability distribution’s tails (from Gaussian to Laplace). Thus, a seemingly simple change in the cost function implicitly selects a different generative assumption about noise.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
