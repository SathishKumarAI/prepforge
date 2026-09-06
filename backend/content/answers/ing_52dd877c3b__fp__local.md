---
qid: ing_52dd877c3b__fp__local
question: 'Explain: Aug. 20, 2026 — Simon Willison\u2019s Weblog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 654
total_tokens: 834
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:01:08-05:00'
sources: []
---

### The Core Problem Solved by Online Learning  

In classical batch training we solve  
\[
\min_{w}\;\frac{1}{N}\sum_{i=1}^{N} \ell\!\bigl(y_i,\,f_w(x_i)\bigr)+\lambda R(w),
\]  
where the entire dataset \(X=\{x_1,\dots,x_N\}\) is available a priori.  
But in many real‑world systems—streaming analytics, recommendation engines, autonomous vehicles—the data arrive sequentially and may never fit into memory. The learning objective must then be **incrementally updated** while guaranteeing that the model remains close to what a full‑batch optimiser would have produced.

### Why Incremental Updates Must Follow a Projection Step  

Consider the stochastic gradient descent (SGD) update  
\[
w_{t+1}=w_t-\eta_t\nabla \ell\!\bigl(y_t,\,f_{w_t}(x_t)\bigr).
\]  
If we let \(\eta_t\) be too large or if the loss surface is highly non‑convex, \(w_t\) can drift arbitrarily far from any minimiser of the cumulative empirical risk. The **mirror‑descent** view interprets each update as a *Bregman projection* onto a feasible set defined by past observations; this ensures that the new parameter vector remains close (in information‑theoretic sense) to all previous updates, preserving stability.

### Connection to Information Geometry  

The Bregman divergence \(D_\phi(w\|w')=\phi(w)-\phi(w')-\langle\nabla\phi(w'),\,w-w'\rangle\) measures how much “information” is lost when approximating \(w\) by \(w'\). In online learning, we minimise the *cumulative* Bregman divergence to all observed data points. This yields regret bounds of order \(\mathcal{O}(\sqrt{T})\), where \(T\) is the number of updates—an optimal rate for convex losses.

### A Non‑Obvious Insight  

Many practitioners equate “learning rate” with “step size”, but in an online setting the **effective step size** is determined by the *geometry* of the loss landscape and the *distribution* of incoming data. If new samples are highly correlated with past ones, a smaller \(\eta_t\) is needed; if they bring novel directions, a larger step can be safely taken. Thus, adaptive learning rates (e.g., AdaGrad, Adam) can be interpreted as **online curvature estimation**, automatically tuning the projection radius to preserve optimal regret.

In short, online learning reframes batch optimisation as a continual projection problem in information space, guaranteeing that each incremental update remains consistent with all past data while maintaining provable performance guarantees.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
