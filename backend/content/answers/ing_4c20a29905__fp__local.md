---
qid: ing_4c20a29905__fp__local
question: 'Explain: Scaling Laws of Motion Forecasting and Planning'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 478
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:46:56-05:00'
sources: []
---

**Scaling Laws of Motion Forecasting and Planning**

At the core, motion forecasting seeks a function \(f_\theta(\mathbf{x})\) that maps past trajectories \(\mathbf{x}\) to future positions. The fundamental problem is *distribution shift*: the world’s dynamics are continuous but only observed through finite data. To guarantee accurate predictions we must bound the generalization error of \(f_\theta\). In modern deep learning, this error scales as a power law with respect to three resources:

1. **Model size** (\(M\)): number of trainable parameters.
2. **Training data** (\(D\)): number of trajectory samples.
3. **Computation budget** (\(C\)): total FLOPs.

Empirically and theoretically, the expected error \(E\) satisfies  

\[
E(M,D,C)\;\approx\;A\,M^{-\alpha_M}\,D^{-\alpha_D}\,C^{-\alpha_C},
\]

where \(A>0\) is a task‑specific constant and \(\alpha_\bullet>0\) are *scaling exponents*. These exponents arise from two deep principles:

* **Capacity–bias trade‑off** (statistical learning theory): larger \(M\) reduces the bias of the hypothesis class but increases variance; data mitigates this variance, yielding a joint power‑law decay.
* **Optimization dynamics** (information geometry): stochastic gradient descent navigates a landscape whose curvature scales with \(D\); more data sharpens the loss basin, allowing faster convergence and thus an effective \(\alpha_C\).

A subtle, often overlooked insight is that **interaction complexity drives \(\alpha_D\)**. In multi‑agent scenes, the number of pairwise interactions grows quadratically with agent count. Consequently, the *effective* dataset size for learning interactions is much smaller than \(D\), making \(\alpha_D\) significantly lower in crowded scenarios. Recognizing this guides data collection: augmenting with synthetic interaction‑rich samples can disproportionately improve scaling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
