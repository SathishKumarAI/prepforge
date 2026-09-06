---
qid: ing_95e316f15a__fp__local
question: 'Explain: Pre-Trained Model as Feature Extractor in Model'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 475
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:24:00-05:00'
sources: []
---

**Why a pre‑trained network can be repurposed as a feature extractor**

The core of supervised learning is to discover a mapping  
\(f_\theta : X \rightarrow Y\) that minimises an expected loss
\(L(f_\theta(x),y)\).  In deep vision models the first layers learn
generic, low‑level patterns (edges, textures); the later layers specialise
to the target task.  When we fine‑tune a network on a new dataset \(D_{\text{new}}\),
the *parameter space* \(\Theta\) is already positioned near a region that
captures useful statistics of natural images; this is precisely where
stochastic gradient descent (SGD) converges for many tasks.

If the new task only needs a representation, not classification,
we can freeze the early layers and treat their activations as a learned
feature map:
\[
z = g_{\phi}(x), \qquad \phi=\{\theta_1,\dots,\theta_k\},
\]
where \(k < L\) (total depth).  
By construction, \(g_\phi\) maximises mutual information with the source labels,
hence it also preserves discriminative structure for any *related* target
labels.  The remaining classifier \(\psi\) solves a low‑dimensional linear
or shallow nonlinear problem:
\[
\hat{y} = h_{\psi}(z).
\]
Because \(g_\phi\) already satisfies the optimality conditions of an
information bottleneck (compressing input while retaining predictive power),
the downstream learning reduces to a convex optimisation in \(\psi\).

**Non‑obvious insight:**  
Freezing layers does **not** merely save computation; it implicitly regularises
the hypothesis space.  By constraining the network to a manifold defined by
\(g_\phi\), we reduce variance dramatically, especially when \(D_{\text{new}}\)
is small or noisy.  Thus, pre‑trained feature extractors act as *implicit
priors* that encode the geometry of natural image distributions, yielding
robust generalisation far beyond what an end‑to‑end fine‑tuning might achieve.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
