---
qid: ing_9717ac11be__fp__local
question: 'Explain: Essential Machine Learning Theory for Interviews'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 472
total_tokens: 640
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:26:52-05:00'
sources: []
---

**Why ML theory matters in interviews**

At its core, supervised learning is a *function‑approximation* problem: given samples \((x_i,y_i)\) drawn i.i.d. from an unknown distribution \(P\), we seek a hypothesis \(h\in\mathcal H\) that minimises expected loss  
\(L(h)=\mathbb E_{(X,Y)\sim P}\bigl[\ell(h(X),Y)\bigr]\).  
The *bias–variance* decomposition shows that any algorithm trades systematic error (bias) against sample‑to‑sample fluctuation (variance); this trade‑off is the reason why a richer hypothesis class can overfit while a too‑simple one underfits.

**From bias to generalisation guarantees**

PAC learning formalises “good enough” by bounding  
\(\Pr_{S}\bigl[L(h_S)-L^*>\varepsilon\bigr]\le \delta\),  
where \(h_S\) is the empirical minimiser.  The bound contains two terms: an *approximation error* (how well \(\mathcal H\) can represent the target) and a *estimation error* that scales with the class’s complexity, captured by the Vapnik–Chervonenkis dimension \(d_{\text{VC}}\).  
The key insight: **regularisation is simply an explicit penalty on this complexity**.  In SVMs, for instance, the margin maximisation implicitly controls a norm‑based capacity (Rademacher complexity), which directly tightens the generalisation bound.

**Non‑obvious takeaway**

Most candidates overlook that *any* convex surrogate loss yielding a tight upper bound on the true risk will automatically inherit the same capacity control.  Thus, choosing a proper surrogate is not just a trick for optimisation—it is the bridge that guarantees statistical performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
